import { View, Text, Image } from "react-native";
import React from "react";

const testImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/800px-Restaurant_N%C3%A4sinneula.jpg";

const testTitle = "Sample Restaurant";

const testDescription = "Thai · Comfort · $$ · 🎫 · 4 ⭐ (217+)";

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
