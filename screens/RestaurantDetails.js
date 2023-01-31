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
    title: "Test Pancakes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum semper euismod. Nunc dapibus mauris a ligula blandit tristique. Suspendisse et dignissim arcu. Curabitur massa nibh, eleifend at dapibus placerat, lobortis sit amet sem. Aenean nec magna vitae risus commodo scelerisque. Nam lacinia arcu a leo volutpat, et viverra purus molestie. Mauris ut semper dui, in placerat nibh.",
    price: "$3.55",
    image:
      "https://tastykitchen.com/wp-content/uploads/2011/03/Tasty-Kitchen-Blog-The-Theme-is-Pancakes-Chocolate-Chip-Pancakes-with-Nutella-Maple-Syrup-submitted-by-TK-member-Kelly-of-Evil-Shenanigans.jpg",
  },
  {
    title: "Budget burger",
    description:
      "In hac habitasse platea dictumst. Praesent nisi ante, congue vitae rhoncus nec, volutpat eu elit. Vivamus commodo at velit ut euismod. Aenean sed massa arcu. Sed at velit ante. Donec sed maximus risus. Fusce rutrum fringilla sem quis efficitur. Donec ullamcorper sapien metus. Nulla cursus maximus pulvinar. Quisque non vulputate est, non dapibus mi. Suspendisse id pharetra massa, ut laoreet felis.",
    price: "$2.97",
    image:
      "https://loveincorporated.blob.core.windows.net/contentimages/gallery/70bc81c8-b277-407d-8c3a-5c1a3e501732-4-hamburger.jpg",
  },
  {
    title: "Taco Tacos",
    description:
      "In hac habitasse platea dictumst. Praesent nisi ante, congue vitae rhoncus nec, volutpat eu elit. Vivamus commodo at velit ut euismod. Aenean sed massa arcu. Sed at velit ante. Donec sed maximus risus. Fusce rutrum fringilla sem quis efficitur. Donec ullamcorper sapien metus. Nulla cursus maximus pulvinar. Quisque non vulputate est, non dapibus mi. Suspendisse id pharetra massa, ut laoreet felis.",
    price: "$2.97",
    image:
      "https://loveincorporated.blob.core.windows.net/contentimages/gallery/671e271d-b43d-4924-8d43-fbf254c37f8f-bao-buns.jpg",
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
