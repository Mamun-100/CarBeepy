import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import CardComponent from './CardComponent'
import Header from './Header'

const data = [
    {
        id: 1,
        carTitle: 'Classic Car',
        image: require('../assets/img/car_card/classicCar.png'),
        color: '#B67853',
        price: 34,
        carDes: 'Who dreamt about roadtrip? Rent this van and make your dreams come true.',
        screen: 'CarDetails'
    },
    {
        id: 2,
        carTitle: 'SportCar',
        image: require('../assets/img/car_card/sportCar.png'),
        color: '#60B5F4',
        price: 55,
        carDes: 'Wanna ride the coolest sport car in the world?',
        screen: 'CarDetails'
    },
    {
        id: 3,
        carTitle: 'Flying Car',
        image: require('../assets/img/car_card/flyingCar.png'),
        color: '#8382C2',
        price: 500,
        carDes: 'Who dreamt about roadtrip? Rent this van and make your dreams come true.',
        screen: 'CarDetails'
    },
    {
        id: 4,
        carTitle: 'Motorhome',
        image: require('../assets/img/car_card/motorHomeCar.png'),
        color: '#7EB0AA',
        price: 23,
        carDes: 'Wanna ride the coolest sport car in the world? Who dreamt about roadtrip? ',
        screen: 'CarDetails'
    },
    {
        id: 5,
        carTitle: 'PickUp',
        image: require('../assets/img/car_card/pickup.png'),
        color: '#AD8E73',
        price: 10,
        carDes: 'Who dreamt about roadtrip? Rent this van and make your dreams come true.',
        screen: 'CarDetails'
    },
    {
        id: 6,
        carTitle: 'AirPlane',
        image: require('../assets/img/car_card/airplane.png'),
        color: '#A34D48',
        price: 11,
        carDes: 'They say one the best ways to know a city is by riding a Airplane.',
        screen: 'CarDetails'
    },
    {
        id: 7,
        carTitle: 'Vespa',
        image: require('../assets/img/car_card/vespa.png'),
        color: '#D7913F',
        price: 23,
        carDes: 'They say one the best ways to know a city is by riding a Vespa Bike.',
        screen: 'CarDetails'
    },
    {
        id: 8,
        carTitle: 'Electric Bike',
        image: require('../assets/img/car_card/electricBike.png'),
        color: '#DF7588',
        price: 11,
        carDes: 'They say one the best ways to know a city is by riding a Electric Bike.',
        screen: 'CarDetails'

    },
    {
        id: 9,
        carTitle: 'Delivery Bike',
        image: require('../assets/img/car_card/deliveryBike.png'),
        color: '#60C1DC',
        price: 10,
        carDes: 'They say one the best ways to know a city is by riding a Delivery Bike.',
        screen: 'CarDetails'
    },

]

const Cards = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <Header title="Cars" />

            <FlatList
                itemDimension={180}
                data={data}
                style={{ marginTop: 10 }}
                renderItem={({ item, index }) => {
                    return (

                        <CardComponent
                            price={item.price}
                            image={item.image}
                            carTitle={item.carTitle}
                            color={item.color}
                            onPress={() => {navigation.navigate(
                                item.screen,{
                                    carTitle:item.carTitle,
                                    image: item.image,
                                    price: item.price,
                                    carDes: item.carDes,
                                    color: item.color,
                                    
                                })}}
                        />

                    )
                }
                }
                keyExtractor={item => item.id}
            />

        </View>
    )
}

export default Cards

const styles = StyleSheet.create({
    container: {
        marginTop: '15%'
    },
    cardTitle: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '700'
    }

})
