import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import {colors} from '../Constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import {getMoviesAction} from '../Redux/Actions/moviesAction';
import {getGenreAction} from '../Redux/Actions/genreAcrion';

import {Movies} from '../Models/movies';
import Header from '../Components/Header';
import MovieCard from '../Components/MovieCard';
import Skeleton from '../Components/skeleton';

const {width, height} = Dimensions.get('window');

interface Iprops{
    navigation:any
}

const Home = ({navigation}:Iprops) => {
    const [selectedFilter,setSelectedFilter] = useState<string>('');
    const [loading,setLoading] = useState<boolean>(false);
    const moviesList = useSelector((state) => state.moviesRequestReducer.MoviesList);

    const dispatch = useDispatch()

    const filter = (filterName:string) :void =>{
        //If you must have an API key or a secret to access some resource from your app, the most secure way to handle this would be to build an orchestration layer between app and the resource.
        //Another solution but not ideal is storing api key in .env
        dispatch(getMoviesAction(`/movie/${filterName}?api_key=4f298a53e552283bee957836a529baec`,(callback)=>setLoading(callback.loading)))
        setSelectedFilter(filterName)
    }

    //get all genre
    const getGenreList = ():void =>{
        dispatch(getGenreAction('/genre/movie/list?api_key=4f298a53e552283bee957836a529baec',(callback)=>null))
    }

    //get all upcoming movies by default
    useEffect(()=>{
        getGenreList();
        filter('upcoming');
    },[])

    const _keyExtractor = (item:Movies,index:Number) => item.id;
    
    return (
        <SafeAreaView style={styles.container}>
            <Header HomeHeader={true}/>
            {/* Filters Row */}
            <View style={styles.filtersContainer}>
                <View style={styles.space}/>
                <View style={styles.subFiltersContainer}>
                    <TouchableOpacity onPress={()=>filter('upcoming')} style={[styles.filterBox,{backgroundColor:selectedFilter == 'upcoming' ? colors.mainColor : colors.boxBackgroundColor}]}>
                        <Text style={{fontWeight:'bold',color:selectedFilter == 'upcoming' ? colors.selectedTextColor : colors.textColor}}>Upcoming</Text>
                    </TouchableOpacity>
                    <View style={{width:10}}/>
                    <TouchableOpacity onPress={()=>filter('popular')} style={[styles.filterBox,{backgroundColor:selectedFilter == 'popular' ? colors.mainColor : colors.boxBackgroundColor}]}>
                        <Text style={{fontWeight:'bold',color:selectedFilter == 'popular' ? colors.selectedTextColor : colors.textColor}}>Popular</Text>
                    </TouchableOpacity>
                    <View style={{width:10}}/>
                    <View/>
                    <TouchableOpacity onPress={()=>filter('top_rated')} style={[styles.filterBox,{backgroundColor:selectedFilter == 'top_rated' ? colors.mainColor : colors.boxBackgroundColor}]}>
                        <Text style={{fontWeight:'bold',color:selectedFilter == 'top_rated' ? colors.selectedTextColor : colors.textColor}}>Top Rated</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.space}/>
            </View>
            {/* Movies list */}
            {!loading?<FlatList  
                    data={moviesList}  
                    renderItem={({item}) =>{
                     return <MovieCard navigation={navigation} movie={item}/>
                    }}
                    keyExtractor={_keyExtractor}
                    style={{flex: 1,marginTop:height*0.02}}
                /> :<><Skeleton/><Skeleton/><Skeleton/><Skeleton/><Skeleton/></>}
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    filtersContainer:{
        flexDirection:'row',
        marginTop: height* 0.02
    },
    space:{
        flex:.5,
    },
    subFiltersContainer:{
        flex:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    filterBox:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        flex:1,
        height:height*0.05
    }
})
