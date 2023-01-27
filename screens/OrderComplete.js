import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import firebase from "firebase/compat";
import MenuItems from "../components/restaurantDetails/MenuItems";
import { ScrollView } from "react-native";

export default function OrderComplete() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Test",
        description:
          "A blank order meant for testing out whether data can be correctly retrieved and overwrite this dummy text. If you're reading this that means it failed.",
        price: "$5.15",
        image:
          "https://irepo.primecp.com/2022/12/544963/Strawberry-French-Toast-Roll-Ups-8131-H_ExtraLarge800_ID-5038791.jpg?v=5038791",
      },
    ],
  });
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalPrice = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    // Once useEffect is finished, connection to firebase database is shutdown. Make anonymous call to unsubscribe.
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <LottieView
          style={{ alignSelf: "center", marginBottom: 20 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          autoSize={true}
          speed={0.5}
          loop={true}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order for {restaurantName} has been placed for ${totalPrice}
        </Text>
        <ScrollView>
          <MenuItems
            testFoods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />

          <LottieView
            style={{ height: 100, alignSelf: "center", marginBottom: 25 }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.75}
            autoSize={true}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
