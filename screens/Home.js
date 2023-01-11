import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, {
  restaurantSamples,
} from "../components/RestaurantItems";

const YELP_API_KEY = process.env.YELP_API_KEY;

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(restaurantSamples);

  const getRestaurantsYelp = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego";
  };

  const apiOptions = {
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantsData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
