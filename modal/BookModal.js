import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Alert, Pressable, Image } from "react-native";

const BookModal = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View
            style={{
                padding: 10,
                margin: 10,
                
            }}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal Close"), setModalVisible(!modalVisible);
                }}
            >
                <View
                    style={{
                        backgroundColor: "#ddd",
                        borderRadius: 10,
                        alignSelf: "center",
                        width: "90%",
                        height: "50%",
                        padding: 10,
                    }}
                >
                    <View style={{paddingLeft:'5%', paddingTop: '5%'}}>
                    <Text style={{ fontSize: 25, color: "#00f",paddingVertical: 10 }}>Vehicle: {props.car}</Text>
                    <Text style={{ fontSize: 20, paddingVertical: 5 }}>Price: {props.price}/day </Text>
                    <Image source={props.imgCar} style={{justifyContent: 'center', alignSelf:'center'}}/>
                    <Text style={{ fontSize: 16, paddingVertical: 5 }}>Description: {props.carDes} </Text>
                    </View>

                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            position: "absolute",
                            bottom: 5,
                            flex: 1,
                            alignSelf: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Pressable
                            style={{
                                flex: 0.4,
                                backgroundColor: "#f00",
                                height: 40,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10,
                            }}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={{ fontSize: 20 }}>Cencel</Text>
                        </Pressable>
                        <Pressable
                            style={{
                                flex: 0.4,
                                backgroundColor: "#aaa",
                                height: 40,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 10,
                            }}
                            onPress={() => alert("Booked", setModalVisible(!modalVisible))}
                        >
                            <Text style={{ fontSize: 20 }}>Confirm</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View
                style={{
                    width: "100%",
                    backgroundColor: "#fff",
                    height: 50,
                    justifyContent: "center",
                    alignSelf: "center",
                    borderRadius: 10,
                }}
            >
                <Pressable
                    style={{ justifyContent:'center', alignItems:'center' }}
                    onPress={() => setModalVisible(true)}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        Book Now
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default BookModal;

const styles = StyleSheet.create({});
