import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const CardItem = (props) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: props.color,
                marginHorizontal: "5%",
                borderRadius: 10,
                marginVertical: "7%",
                paddingLeft: 20,
                paddingTop: 16,
                height: 144,
            }}
            onPress={props.onPress}
        >
            <Text style={styles.carTitle}>{props.carTitle}</Text>
            <View style={styles.cardView}>
                <Text style={styles.priceDay}>${props.price}/day</Text>
                <View style={styles.star}>
                    <Image
                        source={require("../assets/img/car_card/Star.png")}
                        style={{ width: 30, height: 30 }}
                    />
                </View>
                <View style={styles.image}>
                    <Image source={props.image} style={{ width: 200, height: 124 }} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CardItem;

const styles = StyleSheet.create({
    carTitle: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "600",
    },
    cardView: {
        display: "flex",
        position: "relative",
        paddingTop: 5,
    },
    priceDay: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
    },
    star: {
        marginTop: 20,
    },
    image: {
        left: "40%",
        bottom: "40%",
    },
});
