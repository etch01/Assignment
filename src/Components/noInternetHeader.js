import React from 'react'
import { StyleSheet, Text, Platform, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';

const {width, height} = Dimensions.get('window');

const noIntenetHeader = ({}) => {
    return (
        <Animatable.View animation="slideInDown" style={styles.noInternetHeader}>
            <Text style={styles.noInternetText}>There is No internet connection.</Text>
        </Animatable.View>
    )
}


const styles = StyleSheet.create({
    noInternetHeader:{
        backgroundColor:'#f62433',
        alignItems:'center',
        justifyContent:'center',
        height:height/10,
    },
    noInternetText:{
        fontSize:18,
        color:'#ffffff',
        marginTop:Platform.OS == 'ios' ? height * 0.04: 0,
    }
})

export default noIntenetHeader
