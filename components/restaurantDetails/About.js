import { View, Text, Image } from "react-native";
import React from "react";

const yelpDataTest = {
  name: "Sample Restaurant",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/800px-Restaurant_N%C3%A4sinneula.jpg",
  price: "$$",
  reviews: "217",
  rating: "3.1",
  categories: [{ title: "Thai" }, { title: "Comfort" }],
};

const { name, image, price, reviews, rating, categories } = yelpDataTest;

const formattedCategories = categories
  .map((category) => category.title)
  .join(" · ");

const description = `${formattedCategories} ${
  price ? " · " + price : ""
} · 🎫 · ${rating} ⭐ (${reviews}+)`;

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName title={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
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
