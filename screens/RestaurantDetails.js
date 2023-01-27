import { View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetails/About";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

const testFoods = [
  {
    title: "Big Grapes",
    description: "What more needs to be said? Ir's grapes but for the big bois",
    price: "$4.99",
    image: "https://m.media-amazon.com/images/I/71949a+B2YL._SL1500_.jpg",
  },
  {
    title: "test2",
    description: "Literally one of the best ways to die that's under $20",
    price: "$11.99",
    image:
      "https://okamotokitchen.com/wprs/wp-content/uploads/2016/09/SnS_Screenshot2.jpg",
  },
  {
    title: "Chicken n Waffles",
    description:
      "Waffles and chicken friend and seasoned too perfection with a healthy dose of syrup on the side",
    price: "$6.99",
    image:
      "http://cdn.shopify.com/s/files/1/0579/9362/5765/articles/20211102155531-fried-chicken-tender-and-caramel-pecan-waffles-1024x685.jpg?v=1635869756",
  },
  {
    title: "Heart Attack Sandwich",
    description:
      "Just look at it, it'll taste good on the way down but your blood sugar will hate you",
    price: "$7.99",
    image:
      "https://www.thesun.co.uk/wp-content/uploads/2020/04/NINTCHDBPICT000577254125.jpg",
  },
  {
    title: "Heart Attack Sandwich",
    description:
      "Just look at it, it'll taste good on the way down but your blood sugar will hate you",
    price: "$7.99",
    image:
      "https://www.thesun.co.uk/wp-content/uploads/2020/04/NINTCHDBPICT000577254125.jpg",
  },
  {
    title: "Heart Attack Sandwich",
    description:
      "Just look at it, it'll taste good on the way down but your blood sugar will hate you",
    price: "$7.99",
    image:
      "https://www.thesun.co.uk/wp-content/uploads/2020/04/NINTCHDBPICT000577254125.jpg",
  },
];

export default function RestaurantDetails({ route, navigation }) {
  return (
    <View>
      {/* Here the data passed to RestaurantDetails from RestaurantItems is sent to the About component/screen */}
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} testFoods={testFoods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
