import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export default function MealSummary({
  title,
  duration,
  complexity,
  affordability,
  imageUrl,
  mealId,
  seeDetails,
}) {
  return (
    <>
      <View style={styles.mealContainer}>
        <Pressable onPress={seeDetails}>
          <Image style={styles.imageStyle} source={imageUrl}>
            {imageUrl}
          </Image>

<View style={styles.bottomBackground}>
          <Text style={styles.titleStyle}>{title}</Text>
          <View style={styles.allInLines}>
            <Text>{duration}</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
          </View>


</View>
        </Pressable>
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
  mealContainer: {
    alignItems: 'center',
    margin: '1rem',
  },
  allInLines: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '2rem',
   
  },
  titleStyle: {
    textAlign: 'center',
    
   
  },
  bottomBackground:{
    backgroundColor:"#edde6d",
    borderRadius:" 15px 2px ",
  }
});
