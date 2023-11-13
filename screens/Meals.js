import { Text, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import MealSummary from '../components/MealSummary.js';
import { setSelectedMeal } from '../slices/mealsSlice.js';



export default function Meals({ route,navigation }) {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals.meals);
  const selectedMeal = useSelector((state) => state.meals.selectedMeal);
  const { categoryId } = route.params;

  useEffect(() => {
    const filteredMeals = meals?.filter((meal) =>
      meal.categoryIds.includes(categoryId)
    );
    dispatch(setSelectedMeal(filteredMeals));
  }, [dispatch, meals, categoryId]);

  const seeDetails = (mealId) => {
    navigation.navigate("MealDetails",{mealId:mealId })
  };

  return (
    <>
      <FlatList
        data={selectedMeal}
        renderItem={({ item }) => (
          <MealSummary
            title={item.title}
            affordability={item.affordability}
            complexity={item.complexity}
            imageUrl={item.imageUrl}
            duration={item.duration}
            seeDetails={() => seeDetails(item.id)}
             mealId={item.id}
          />
        )}
        keyExtractor={(item) => item.id}></FlatList>
    </>
  );
}

const styles = StyleSheet.create({
  toBlack: {
    color: 'black',
  },
});
