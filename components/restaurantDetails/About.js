import { View, Text, Image } from "react-native";
import React from "react";

const testImage =
  "https://www.beyondpinkworld.com/Assets/News/2855/BP_1_636898382689406962.jpg";

const testTitle = "Toilet Restaurant";

const testDescription = "Thai · Confort · $$ · 🎫 · 4 ⭐ (217+)";

export default function About() {
  return (
    <View>
      <RestaurantImage image={testImage} />
      <RestaurantTitle title={testTitle} />
      <RestaurantDescription description={testDescription} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
