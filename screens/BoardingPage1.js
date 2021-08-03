import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import { ActivityIndicator } from "react-native";

const BoardingPage1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.beepyView}>
                <Text style={styles.beepyText}>Beepy</Text>
            </View>

            <View style={styles.imgView}>
                <Image
                    source={require("../assets/img/b_page/boardingPage1.png")}
                    style={{ height: 327, width: 395 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>

            <View style={styles.lineImg}>
                <Image
                    source={require("../assets/img/b_page/line1.png")}
                    style={{ height: 4, width: 16, marginHorizontal: 5 }}
                />
                <Image
                    source={require("../assets/img/b_page/line.png")}
                    style={{ height: 4, width: 16, marginHorizontal: 5 }}
                />
                <Image
                    source={require("../assets/img/b_page/line.png")}
                    style={{ height: 4, width: 16, marginHorizontal: 5 }}
                />
                <Image
                    source={require("../assets/img/b_page/line.png")}
                    style={{ height: 4, width: 16, marginHorizontal: 5 }}
                />
            </View>

            <View style={styles.textView}>
                <Text style={styles.boldText}>Find Your Vehicle</Text>
                <Text style={styles.normalText}>
                    Find the perfect vehicle for every occasion!
                </Text>
            </View>

            <View
                style={{
                    width: "90%",
                    justifyContent: "center",
                    alignSelf: "center",
                    marginTop: "8%",
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("BoardingPage2")}
                    style={{
                        width: "100%",
                        height: 55,
                        backgroundColor: "#FA7F35",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 10,
                    }}
                >
                    <Text style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "600" }}>
                        Continue
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.barView}>
                <Image
                    source={require("../assets/img/b_page/bar.png")}
                    style={{ width: 375, height: 34 }}
                />
            </View>

            {/* Navigation here */}
        </View>
    );
};

export default BoardingPage1;

const styles = StyleSheet.create({
    container: {
        marginTop: "17%",
    },
    beepyView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    beepyText: {
        fontSize: 20,
        fontWeight: "bold",
    },

    imgView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15%",
    },
    lineImg: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8%",
    },
    textView: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8%",
    },
    boldText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    normalText: {
        marginTop: "5%",
        fontWeight: "600",
        fontSize: 17,
        width: 264,
        textAlign: "center",
    },

    barView: {
        marginTop: "5%",
    },
});
