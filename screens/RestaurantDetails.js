import { View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetails/About";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

export default function RestaurantDetails({ route, navigation }) {
  return (
    <View>
      {/* Here the data passed to RestaurantDetails from RestaurantItems is sent to the About component/screen */}
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
