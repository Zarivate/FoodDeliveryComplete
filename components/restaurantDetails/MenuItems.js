import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const testFoods = [
  {
    title: "Big Grapes",
    description: "What more needs to be said? Ir's grapes but for the big bois",
    price: "$7.77",
    image: "https://m.media-amazon.com/images/I/71949a+B2YL._SL1500_.jpg",
  },
  {
    title: "test2",
    description: "Literally one of the best ways to die that's under $20",
    price: "$12.57",
    image:
      "https://okamotokitchen.com/wprs/wp-content/uploads/2016/09/SnS_Screenshot2.jpg",
  },
  {
    title: "Chicken n Waffles",
    description:
      "Waffles and chicken friend and seasoned too perfection with a healthy dose of syrup on the side",
    price: "$6.53",
    image:
      "http://cdn.shopify.com/s/files/1/0579/9362/5765/articles/20211102155531-fried-chicken-tender-and-caramel-pecan-waffles-1024x685.jpg?v=1635869756",
  },
  {
    title: "Heart Attack Sandwich",
    description:
      "Just look at it, it'll taste good on the way down but your blood sugar will hate you",
    price: "$7.50",
    image:
      "https://www.thesun.co.uk/wp-content/uploads/2020/04/NINTCHDBPICT000577254125.jpg",
  },
  {
    title: "Chicken n Waffles",
    description:
      "Waffles and chicken friend and seasoned too perfection with a healthy dose of syrup on the side",
    price: "$6.53",
    image:
      "http://cdn.shopify.com/s/files/1/0579/9362/5765/articles/20211102155531-fried-chicken-tender-and-caramel-pecan-waffles-1024x685.jpg?v=1635869756",
  },
  {
    title: "Heart Attack Sandwich",
    description:
      "Just look at it, it'll taste good on the way down but your blood sugar will hate you",
    price: "$7.50",
    image:
      "https://www.thesun.co.uk/wp-content/uploads/2020/04/NINTCHDBPICT000577254125.jpg",
  },
  {
    title: "test2",
    description: "Literally one of the best ways to die that's under $20",
    price: "$12.57",
    image:
      "https://okamotokitchen.com/wprs/wp-content/uploads/2016/09/SnS_Screenshot2.jpg",
  },
  {
    title: "test2",
    description: "Literally one of the best ways to die that's under $20",
    price: "$12.57",
    image:
      "https://okamotokitchen.com/wprs/wp-content/uploads/2016/09/SnS_Screenshot2.jpg",
  },
  {
    title: "test2",
    description: "Literally one of the best ways to die that's under $20",
    price: "$12.57",
    image:
      "https://okamotokitchen.com/wprs/wp-content/uploads/2016/09/SnS_Screenshot2.jpg",
  },
  {
    title: "test2",
    description: "Literally one of the best ways to die that's under $20",
    price: "$12.57",
    image:
      "https://okamotokitchen.com/wprs/wp-content/uploads/2016/09/SnS_Screenshot2.jpg",
  },
];

export default function MenuItems() {
  return (
    <ScrollView style={{ height: 400 }} showsVerticalScrollIndicator={false}>
      {testFoods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodDetails food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodDetails = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
