import {Text, FlatList, StyleSheet,View} from 'react-native';
import CategorySquare from '../components/CategorySquare.js';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Categories({navigation}) {
  const categories = useSelector(state=>state.categories.categories)

const goToMealsByCategory = (categoryId) => {
navigation.navigate("Meals",{categoryId:categoryId})
}

  return (
    
<>
  <View style={styles.setScreen}>
      <FlatList numColumns={2} // pour avoir deux colonnes maximum
        data={categories}
        renderItem={({item}) => <CategorySquare item={item} goToMealsByCategory={goToMealsByCategory} />}
        keyExtractor={(item) => item.id}
      />
</View>
      
    </>
  );
}


const styles = StyleSheet.create({
setScreen:{
  alignItems:"center",
  
}
});
