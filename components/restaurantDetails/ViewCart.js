import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ViewCart() {
  const [modalVisible, setModalVisible] = useState(false);

  // Grabs whatever items are in the current state, the cartReducer state anyways, alongside the name ofthe restaurant for the checkout screen
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  // Function to return calculated total. Replaces the dollar sign with a blank/empty string then adds up the
  // prices. Reduce will start total at 0 as well.
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalPrice = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  const modalContent = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View
          style={{
            backgroundColor: "black",
            padding: 10,
            borderRadius: 30,
            width: 150,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: "white" }}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {modalContent()}
      </Modal>
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
              onPress={() => setModalVisible(true)}
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
