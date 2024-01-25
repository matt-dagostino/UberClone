import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";

const EatScreen = () => {
  return (
    <SafeAreaView style={tw`bg-red-500 h-full`}>
      <View style={tw`p-10`}>
        <View style={tw`bg-yellow-400 p-5 rounded-lg`}>
          <Text style={tw`font-bold text-4xl text-center`}>
            UNDER CONSTRUCTION
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EatScreen;

const styles = StyleSheet.create({});
