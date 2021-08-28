import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native'
import { colors } from '../Constants/colors';

const {width, height} = Dimensions.get('window');

const MovieCard = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={{flex:.5}}/>
            <View style={styles.card}>
                <View style={styles.imageArea}>
                    <View style={{flex:1,overflow:'hidden',backgroundColor:'cyan',borderRadius:20 }}>
                        <Image style={{flex:1}} source={{uri:'https://i5.walmartimages.com/asr/3f92e597-86d8-498c-ae2d-257014fad650_1.b16e4b4a798d31c2416fbe338eb4af8b.jpeg'}}/>
                    </View>
                </View>
                <View style={styles.rightSide}>
                    <Text style={styles.name}>Interstellar</Text>
                    <Text>November 5, 2014</Text>
                    <View style={styles.category}>
                        <Text>Action</Text>
                    </View>
                    <Text style={styles.rate}>86%</Text>
                </View>
            </View>
            <View style={{flex:.5}}/>
        </View>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    cardContainer:{
        height:height /5,
        flexDirection:'row'
    },
    card:{
        flex:10,
        backgroundColor:'#fff',
        flexDirection:'row',
        marginBottom:height*0.02,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
    },
    imageArea:{
        flex:1,
        justifyContent:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10
    },
    rightSide:{
        flex:2,
        justifyContent:'space-around',
        paddingRight:20
    },
    category:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        height:height*0.03,
        backgroundColor:colors.boxBackgroundColor,
        alignSelf: 'flex-start',
        paddingLeft:10,
        paddingRight:10
    },
    name:{
        fontSize:20,
        fontWeight:'bold'
    },
    rate:{
        textAlign:'right',
        color:colors.mainColor,
        fontSize:20,
        fontWeight:'bold'
    }
})
