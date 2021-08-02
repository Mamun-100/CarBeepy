import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.containerTitle}>
            <Image source={require('../assets/img/car_card/backArrow.png')} style={{ width: 10, height: 16, marginTop: 10 }} />
            <Text style={styles.titleText}>{props.title}</Text>
            <Image source={require('../assets/img/car_card/Avatar.png')} style={{ width: 40, height: 40 }} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    containerTitle: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '5%',
    },
    titleText: {
        fontSize: 24,
        fontWeight: '700'
    },
})
