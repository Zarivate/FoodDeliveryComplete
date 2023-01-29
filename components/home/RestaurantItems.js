import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const restaurantSamples = [
  {
    name: "Food 2",
    image_url:
      "https://www.tastefullyoffensive.com/wp-content/uploads/2021/03/frightening-foods-19.jpg",
    categories: ["Hell", "Bar"],
    price: "$$",
    reviews: 379,
    rating: 1.9,
  },
  {
    name: "New Sea Delights",
    image_url:
      "https://cache.marriott.com/content/dam/marriott-renditions/NYCMQ/nycmq-broadway-lounge-6090-hor-wide.jpg",
    categories: ["Seafood", "Bar"],
    price: "$$",
    reviews: 891,
    rating: 1.1,
  },
  {
    name: "WcDonalds",
    image_url:
      "https://static.wikia.nocookie.net/fictionalcompanies/images/9/9c/McDonald%27s_support_for_international_women%27s_month._March_8%2C_2018.jpg/revision/latest?cb=20180310183034pg",
    categories: ["Fast Food", "Anime"],
    price: "$$",
    reviews: 5871,
    rating: 4.9,
  },
];

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantsData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetails", {
              // Passing information to the RestaurantDetails component/screen as well. All the data below is considered the "route"
              // that is destructured in the RestaurantDetails component
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View
            style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialIcons name="heart-outline" size={25} color="black" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
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
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>15-30 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
