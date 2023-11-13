import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';

export default function CategorySquare({ item, goToMealsByCategory }) {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <Pressable onPress={() => goToMealsByCategory(item.id)}>
      <View style={[styles.squareStyle, {backgroundColor:item.color}]}>
        <Text style={styles.toBlack}>{item.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  toBlack: {
    color: 'black',
    fontSize:18,
    textAlign:"center"
    

  },
  squareStyle:{
    width:150,
    height:150,
    justifyContent:"center",
    borderRadius:"15px",
    margin:"0.5rem",
    
    
    
 
    
  }
});
