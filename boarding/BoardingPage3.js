import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Image, } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';


const BoardingPage3 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.beepyView}>
                <Text style={styles.beepyText}>Beepy</Text>
            </View>
            <View style={styles.imgView}>
                <Image source={require('../assets/img/b_page/boardingPage3.png')}
                    style={{ height: 327, width: 395 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>

            <View style={styles.lineImg}>
                <Image source={require('../assets/img/b_page/line.png')}
                    style={{ height: 4, width: 16,marginHorizontal: 5}} />
                <Image source={require('../assets/img/b_page/line.png')}
                    style={{ height: 4, width: 16,marginHorizontal: 5 }} />
                <Image source={require('../assets/img/b_page/line1.png')}
                    style={{ height: 4, width: 16,marginHorizontal: 5 }} />
                <Image source={require('../assets/img/b_page/line.png')}
                    style={{ height: 4, width: 16,marginHorizontal: 5 }} />
            </View>

            <View style={styles.textView}>
                <Text style={styles.boldText}>Small Ones Too!</Text>
                <Text style={styles.normalText}>Rent a small vehicle for those short distances.</Text>
            </View>

            <View style={styles.btnView}>
                <TouchableOpacity style={styles.btnTouch}
                onPress={()=>navigation.navigate('BoardingPage4')}
                >
                    <Text style={styles.btnText}>Continue</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.barView}>
                <Image source={require('../assets/img/b_page/bar.png')}
                style={{width: 375, height: 34}}
                />
            </View>
        </View>
    )
}

export default BoardingPage3

const styles = StyleSheet.create({
    container: {
       marginTop:'17%',
    },
    beepyView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    beepyText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    imgView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'

    },
    lineImg: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '8%'
    },

    textView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '8%',
       
    },
    boldText: {
        fontSize: 24,
        fontWeight: 'bold',
        
        
    },
    normalText: {
        marginTop: '5%',
        fontWeight: '500',
        fontSize: 17,
        width: 264,
        textAlign: 'center'
    },
    
    btnView: {
        marginTop: '10%',
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        
     },
     btnTouch: {
         width: '100%',
         height: 50,
         backgroundColor: '#FA7F35',
         justifyContent: 'center',
         alignItems: 'center',
         borderRadius: 10,
     },
     btnText: {
         fontSize: 18, 
         color: "#FFFFFF", 
         fontWeight: "600"
     },
    barView: {
        marginTop: '5%'
    }
})
