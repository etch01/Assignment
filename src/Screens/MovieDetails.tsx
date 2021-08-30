import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, Image, Dimensions, ScrollView } from 'react-native';
import {getDetailsAction} from '../Redux/Actions/detailsAction';
import {getCreditsAction} from '../Redux/Actions/creditsAction';
import { useDispatch, useSelector } from 'react-redux';
import {colors} from '../Constants/colors';
import Header from '../Components/Header'

const {width, height} = Dimensions.get('window');

interface Iprops{
    route:any;
    navigation:any;
}

const MovieDetails = ({route, navigation}:Iprops) => {
    const { id } = route.params;

    const [loading,setLoading] = useState<boolean>(true);
    const details = useSelector((state) => state.moviesDetailsReducer.details);
    const credits = useSelector((state) => state.creditsRequestReducer.credits);
    const dispatch = useDispatch()

    const getMovieDetails = (): void =>{
        dispatch(getDetailsAction(`/movie/${id}?api_key=4f298a53e552283bee957836a529baec`,callback=>{            
            setLoading(callback.loading)
        }))
    }

    const getCredits = (): void =>{
        dispatch(getCreditsAction(`/movie/${id}/credits?api_key=4f298a53e552283bee957836a529baec`,callback=>{            
            setLoading(callback.loading)
        }))
    }

    useEffect(()=>{
        getMovieDetails();
        getCredits();
    },[])
    
    return (
        <SafeAreaView style={styles.container}>
            <Header HomeHeader={false} BackPress={()=>navigation.goBack()}/>
            {!loading?
            <ScrollView>
            {/* image , title and vote rating */}
            <View style={styles.imageContainer}>
                <View style={styles.imageJustifier}>
                    <Image style={{flex:1}} source={{uri:`https://image.tmdb.org/t/p/w500${details.poster_path}`}}/>
                </View>
            </View>
            <Text style={styles.title}>{details.title}</Text>
            {details.vote_count>0?<Text style={styles.rating}>{details.vote_average * 10}%</Text>:<Text style={styles.rating}>No votes yet</Text>}
            {/* overview */}
            <View style={{flexDirection:'row',marginTop:height*0.02}}>
            <View style={{flex:.5}}/>
                <View style={{flex:10}}>
                    <Text style={styles.header}>Overview</Text>
                    <Text style={styles.normalText}>{details.overview}</Text>
                </View>
            <View style={{flex:.5}}/>
            </View>
            {/* Genre */}
            <View style={{flexDirection:'row',marginTop:height*0.03}}>
            <View style={{flex:.5}}/>
                <View style={{flex:10}}>
                    <Text style={styles.header}>Genres</Text>
                    <View style={{flexDirection:'row', flexWrap: 'wrap',padding:1,marginTop:height*0.02}}>
                    {
                        details.genres.map(genre=>{
                            return(
                                <View key={genre.id} style={{marginRight:7,marginTop:3}}>
                                    <View style={styles.genres}>
                                        <Text>{genre.name}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                    </View>
                </View>
            <View style={{flex:.5}}/>
            </View>
            {/* credits (popularity more than 10)*/}

            <Text style={[styles.header,{marginLeft:width*0.05,marginTop:height*0.02}]}>Credits:</Text>
            <ScrollView horizontal={true} style={{marginTop:height*0.02}}>
                {credits.map(credit=>{
                if (credit.popularity > 10){
                return(
                    <View key={credit.id}>
                    <View style={styles.icon}>
                        <Image resizeMode='cover' style={{flex:1}} source={{uri:`https://image.tmdb.org/t/p/w500${credit.profile_path}`}}/>
                     </View>
                     <Text style={{textAlign:'center',marginTop:height*0.01}}>{credit.name}</Text>
                    </View>

                )}})}
            </ScrollView>
            </ScrollView>
            :
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><ActivityIndicator size={24}/></View>
            }
        </SafeAreaView>
    )
}

export default MovieDetails

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageContainer:{
        width: width,
        height:height*.3,
        marginTop: height * 0.02
    },
    imageJustifier:{
        width:width*.48,
        height:height*.3,
        alignSelf:'center',
        borderRadius:10,
        overflow:'hidden'
    },
    title:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:24,
        marginTop:height*.02
    },
    header:{
        fontWeight:'bold',
        fontSize:16,
    },
    normalText:{
        fontSize:16,
        marginTop:height*0.01
    },
    rating:{
        textAlign:'center',
        color:colors.mainColor,
        fontSize:20,
        fontWeight:'bold',
        marginTop:height*0.02
    },
    genres:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        height:height*0.03,
        backgroundColor:colors.boxBackgroundColor,
        alignSelf: 'flex-start',
        paddingLeft:10,
        paddingRight:10
    },
    icon:{
        width:height*.09,
        height:height*.09,
        alignSelf:'center',
        borderRadius:height*.045,
        overflow:'hidden',
        marginRight:width*0.05,
        marginLeft:width*0.05
    },
})
