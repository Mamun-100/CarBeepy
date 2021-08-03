import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Modal } from "react-native";
import Header from "../header/Header";
import BookModal from "../modal/BookModal";

const CarDetails = ({ props, route }) => {
    const carT = route.params.carTitle;
    const imgBody = route.params.image;
    const priDay = route.params.price;
    const description = route.params.carDes;
    const colors = route.params.color;

    //  alert(carT)
    //   console.log(carT,'cartitle-----------------------------------')
    return (
        <View style={styles.container}>
            <View>
                <Header title={carT} />
            </View>
            <View style={{ marginVertical: "10%" }}>
                <Image
                    source={imgBody}
                    style={{
                        width: 380,
                        height: 230,
                        justifyContent: "center",
                        alignSelf: "center",
                    }}
                />
            </View>

            <View
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: colors,
                    borderRadius: 30,
                    marginTop: 10,
                }}
            >
                <View style={styles.title}>
                    <Text style={{ fontSize: 40, color: "#fff" }}>{carT}</Text>
                    <Image
                        source={require("../assets/img/car_card/Star.png")}
                        style={{ width: 30, height: 30 }}
                    />
                </View>
                <View style={{ marginLeft: "5%", paddingTop: 10 }}>
                    <Text style={{ fontSize: 20, color: "#fff" }}>${priDay}/day</Text>
                </View>
                <View style={{ marginVertical: "10%", paddingHorizontal: "5%" }}>
                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600" }}>
                        Description:
                    </Text>
                    <Text
                        style={{
                            color: "#fff",
                            fontSize: 18,
                            paddingTop: 10,
                            lineHeight: 28,
                        }}
                    >
                        {description}
                    </Text>
                </View>
                {/***** book now btn  */}
                <View
                    style={{
                        width: "90%",
                        justifyContent: "center",
                        alignSelf: "center",
                    }}
                >
                    <View>
                        <BookModal 
                        car={carT} 
                        price={priDay} 
                        carDes={description}
                        imgCar={imgBody}
                        />
                    </View>

                    {/* <TouchableOpacity
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            height: 55,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onPress={() =>
                            alert(
                                "Confirm Book!\nCar: " +
                                carT +
                                "\n Price: $" +
                                priDay +
                                "/perDay"
                            )
                        }
                    >
                        <Text style={{ fontSize: 20 }}>Book Now</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    );
};

export default CarDetails;

const styles = StyleSheet.create({
    container: {
        marginTop: "15%",
    },

    title: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 25,
        width: "90%",
        alignSelf: "center",
    },
});
