import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center font-medium text-xl py-3`}>Good Morning, Matteo</Text>
            <View style={tw`border-t border-gray-100 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete 
                        placeholder='Enter your destination'
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={200}
                        styles={toInputBoxStyles}
                        enablePoweredByContainer={false}
                        query= {{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}
                        fetchDetails={true}
                        minLength={3}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }));
                                navigation.navigate('RideOptions')
                        }}
                    />
                </View>
                <NavFavorites />
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('RideOptions')}
                style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                    <Text style={tw`text-center text-white`}>Rides</Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex flex-row justify-between bg-gray-300 w-24 px-4 py-3 rounded-full`}>
                    <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                    <Text style={tw`text-center text-black`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#ebebf0',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
});