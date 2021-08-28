import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import {images} from '../Assets/index';

interface IProps {
    HomeHeader : boolean;
    BackPress?: ()=> void
}

const Header = ({HomeHeader,BackPress}:IProps) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.space}/>
            <View style={styles.middleArea}>
                {/* check if title or back button will show up */}
                {HomeHeader?<Text style={styles.headerText}>Movies</Text>
                :
                <TouchableOpacity onPress={BackPress}>
                    <Image source={images.back}/>
                </TouchableOpacity>}
            </View>
            <View style={styles.space}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row'
    },
    space:{
        flex:.5,
    },
    middleArea:{
        flex:10,
    },
    headerText:{
        fontSize:30,
        fontWeight:'bold'
    }
})
