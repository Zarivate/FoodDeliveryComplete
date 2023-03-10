import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/home/HeaderTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems, {
  restaurantSamples,
} from "../components/home/RestaurantItems";
import { YELP_FUSION_API_KEY } from "@env";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

const YELP_API_KEY = YELP_FUSION_API_KEY;

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(restaurantSamples);
  // Has to be passed to SearchBar component so data can be returned and change the "city" variable
  const [city, setCity] = useState("San Francisco");

  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantsData={restaurantData}
          // Navigation passed here so component RestaurantItems has access to navigation and can be destructured
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
