import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <View>
      <RestaurantImage />
      <RestaurantInfo />
    </View>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://static.wikia.nocookie.net/fictionalcompanies/images/9/9c/McDonald%27s_support_for_international_women%27s_month._March_8%2C_2018.jpg/revision/latest?cb=20180310183034",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialIcons name="heart-outline" size={25} color="black" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    {/* In order to get the wait time to show up below the restaurant name, they're wrapped in their own View. 
    Since that will make it row based, as that's how it is by default. The Text left outside is horizontal based */}
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>WcDonalds</Text>
      <Text>15-30 • min</Text>
    </View>

    <Text>1.2</Text>
  </View>
);
