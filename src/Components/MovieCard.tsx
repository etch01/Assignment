import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity} from 'react-native'
import { colors } from '../Constants/colors';
import {Movies} from '../Models/movies'
import { useSelector } from 'react-redux';
import moment from 'moment'

const {width, height} = Dimensions.get('window');

interface Iprops{
    movie:Movies;
    navigation:any;
}

const MovieCard = ({movie, navigation}:Iprops) => {
    const genreList = useSelector((state) => state.genreRequestReducer.genres);

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={()=>navigation.navigate('MovieDetails',{id:movie.id})}>
            <View style={{flex:.5}}/>
            <View style={styles.card}>
                {/* Image */}
                <View style={styles.imageArea}>
                    <View style={{flex:1,overflow:'hidden',borderRadius:10 }}>
                        <Image style={{flex:1}} source={{uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}`}}/>
                    </View>
                </View>
                <View style={styles.rightSide}>
                    {/* title and release date */}
                    <Text style={styles.name}>{movie.title}</Text>
                    <Text style={{marginTop:height*0.02}}>{moment(movie.release_date).format("ll")}</Text>
                    {/* genre list */}
                    <View style={{flexDirection:'row', flexWrap: 'wrap',padding:1,marginTop:height*0.02}}>
                    {
                        movie.genre_ids.map((id)=>{ 
                            const genreName = genreList?.filter(g=>g.id == id)[0].name                         
                            return (
                                <View key={id} style={{marginRight:3,marginTop:3}}>
                                    <View style={styles.category}>
                                        <Text>{genreName}</Text>
                                    </View>
                                 </View>
                            )
                        })
                    }
                    </View>
                    {/* vote rate */}
                    {movie.vote_count>0?<Text style={styles.rate}>{movie.vote_average * 10}%</Text>:<Text style={styles.rate}>No votes yet</Text>}
                </View>
            </View>
            <View style={{flex:.5}}/>
        </TouchableOpacity>
    )
}

export default MovieCard

const styles = StyleSheet.create({
    cardContainer:{
        minHeight:height /5,
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
        paddingRight:10,
        marginRight:10
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
        fontWeight:'bold',
        marginTop:height*0.01
    },
    rate:{
        textAlign:'right',
        color:colors.mainColor,
        fontSize:20,
        fontWeight:'bold',
        marginBottom:height*0.01
    }
})
