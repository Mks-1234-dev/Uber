import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "Uber-x",
    title: "Uber",
    multiplier: 1, // For Price
    image: "https://links.papareact.com/3pn",
  },
];

// If theres a surge of users price goes up
const SURGE_CHARGE_RATE = 1.0;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute left-5 z-50 pb-5 rounded-full -mt-1`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>

        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 w-60 ml-auto mr-auto mb-5 -mt-5 ${
            !selected && "bg-gray-300"
          }`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>

        <Text
          style={tw`absolute left-5 z-50 pb-5 rounded-full -mt-1 ml-76 font-semibold`}
        >
          {travelTimeInformation?.distance?.text}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
