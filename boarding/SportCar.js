import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, } from 'react-native'

const SportCar = ({route}) => {
    const {carPrice, carDes} = route.params;
    
    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Image source={require('../assets/img/car_card/backArrow.png')} style={{ width: 10, height: 16, marginTop: 10 }} />
                <Text style={styles.titleText}>Cars</Text>
                <Image source={require('../assets/img/car_card/Avatar.png')} style={{ width: 40, height: 40 }} />
            </View>
            <ScrollView style={styles.scroll}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '8%' }}>
                    <Image source={require('../assets/img/car_card/sport.png')} style={{ width: 375, height: 289 }} />
                </View>
                <View style={styles.bookView}>
                    <View style={styles.titleView}>
                        <Text style={styles.bookTitleText}>SportCar</Text>
                        <Image source={require('../assets/img/car_card/Star.png')} style={{ width: 35, height: 35, top: 15 }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, color: '#fff' }}>{carPrice}</Text>
                        <Text style={{ fontSize: 22, color: '#fff', marginTop: '10%', fontWeight: '700' }}>Description</Text>
                        <Text style={{ fontSize: 18, color: '#fff' }}>{carDes}</Text>
                    </View>

                    <View style={styles.bookBtnView}>
                    <TouchableOpacity style={styles.btnTouch}
                        onPress={() => alert('confirm book')}
                    >
                        <Text style={{color: '#000', fontWeight: '700', fontSize: 15}}>Book Now</Text>
                    </TouchableOpacity>
                </View>

                </View>
               
            </ScrollView>
        </View>
    )
}

export default SportCar

const styles = StyleSheet.create({
    container: {
        marginTop: '18%'
    },
    containerTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        height: 50,
        marginHorizontal: '5%',

    },
    titleText: {
        fontSize: 24,
        fontWeight: '700'
    },
    scroll: {
        width: '100%',
        backgroundColor: '#ddd'
    },
    bookView: {
        backgroundColor: '#60B5F4',
        width: '100%',
        height: 354,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginVertical: '10%',
        paddingHorizontal: '10%',
        paddingTop: '10%',
       
    },

    titleView: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    bookTitleText: {
        fontSize: 45,
        color: '#fff',
        fontWeight: '700'
    },
    bookBtnView:{
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf:'center',
        width: '100%',
        marginTop: '10%',
        
    },
    btnTouch: {
        height: 57,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
