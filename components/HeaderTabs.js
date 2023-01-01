import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [active, setActive] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <ButtonChoice
        text="Delivery"
        btnColor="black"
        txtColor="white"
        activeTab={active}
        setActiveTab={setActive}
      />
      <ButtonChoice
        text="Pickup"
        btnColor="white"
        txtColor="black"
        activeTab={active}
        setActiveTab={setActive}
      />
    </View>
  );
}

const ButtonChoice = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab == props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 50,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab == props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
