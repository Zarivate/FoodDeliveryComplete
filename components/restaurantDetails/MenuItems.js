import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function MenuItems({
  restaurantName,
  testFoods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();

  // Runs everytime a user selects an item, dispatches item selected
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView style={{ height: 400 }} showsVerticalScrollIndicator={false}>
      {testFoods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {/* Checks to see if checkboxes are hidden so that any data on the OrderComplete screen doesn't have the checkboxes */}
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                size={18}
                iconStyle={{ borderRadius: 0 }}
                innerIconStyle={{ borderRadius: 0, borderColor: "lightgray" }}
                fillColor="green"
                // The checkboxValue prop from bouncyCheckbox will be used to decided when too add or remove an item from a user's cart
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isInCart(food, cartItems)}
              />
            )}
            <FoodDetails food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodDetails = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 75,
        height: 75,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
