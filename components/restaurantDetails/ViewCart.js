import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function ViewCart() {
  // Grabs whatever items are in the current state, the cartReducer state anyways
  const items = useSelector((state) => state.cartReducer.selectedItems.items);

  // Function to return calculated total. Replaces the dollar sign with a blank/empty string then adds up the
  // prices. Reduce will start total at 0 as well.
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalPrice = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  console.log("Total so far is " + totalPrice);

  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            position: "absolute",
            bottom: 25,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",

              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "space-evenly",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 50 }}>
                View Cart
              </Text>
              <Text
                style={{ color: "white", fontSize: 20 }}
              >{`$${totalPrice}`}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
