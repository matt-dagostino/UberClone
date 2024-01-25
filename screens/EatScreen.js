import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'

const EatScreen = () => {
    return (
      <SafeAreaView style={tw`bg-orange-500 h-full`}>
        <View style={tw`p-5`}>
            <Text>EatScreen</Text>
        </View>
      </SafeAreaView>
    );
  };
  
  export default EatScreen;

const styles = StyleSheet.create({})