import { StyleSheet } from 'react-native';
import { Text, Image, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

export default function MealDetails({ route, navigation }) {
  const { mealId } = route.params;
  const meals = useSelector((state) => state.meals.meals);

  const mealToShow = meals.find((meal) => meal.id === mealId);

  return (
    <>
      <View style={styles.mealContainer}>
        <Image style={styles.imageStyle} source={mealToShow.imageUrl} />
      </View>

      <Text style={styles.titleStyle}>{mealToShow.title}</Text>

      <View style={styles.allInLines}>
        <Text>{mealToShow.affordability}</Text>
        <Text>{mealToShow.complexity}</Text>
        <Text>{mealToShow.duration}</Text>
      </View>

      <View>
        <Text style={styles.ingredientsAndStepsTitle}>Ingredients</Text>

        <FlatList
          data={mealToShow.ingredients}
          renderItem={({ item }) => <Text style={styles.orangesBox}>{item}</Text>}
          keyExtractor={(item, index) => 'element-' + index} // "element-" (ou "toto-" ... ) permet de différencier chaque élement du tableau, on aura donc : element-0, element-1 etc ..."
        />
      </View>

      <View>
        <Text style={styles.ingredientsAndStepsTitle}>Steps</Text>

        <FlatList
          data={mealToShow.steps}
          renderItem={({ item }) => <Text style={styles.orangesBox}>{item}</Text>}
          keyExtractor={(item, index) => 'element-' + index}
        />
      </View>

      <View>
        {mealToShow.isGlutenFree && <Text>isGlutenFree </Text>}
        {mealToShow.isVegan && <Text>vegan </Text>}
        {mealToShow.isVegetarian && <Text>vegetarian </Text>}
        {mealToShow.isLactoseFree && <Text>lactose free </Text>}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: '280px',
    height: '150px',
    borderRadius: '8px',
  },
  titleStyle: {
    textAlign: 'center',
        fontSize:20

  },
  allInLines: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '2rem',
  },
  mealContainer: {
    alignItems: 'center',
    margin: '1rem',
  },
  orangesBox:{
    backgroundColor:"orange",
    margin:"0.2rem",
    borderRadius:"10px",
    textAlign:"center"
  },
  ingredientsAndStepsTitle:{
    textAlign:"center",
    color:"orange",
    fontSize:20
  }
});
