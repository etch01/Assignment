import React, {useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import {colors} from '../Constants/colors';
import Header from '../Components/Header';
import MovieCard from '../Components/MovieCard';

const {width, height} = Dimensions.get('window');

const Home = () => {
    const [selectedFilter,setSelectedFilter] = useState<string>('');

    const filter = (filterName:string) :void =>{

    }

    const _keyExtractor = (index:Number) => index.toString();
    
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
                    <TouchableOpacity onPress={()=>filter('top')} style={[styles.filterBox,{backgroundColor:selectedFilter == 'top' ? colors.mainColor : colors.boxBackgroundColor}]}>
                        <Text style={{fontWeight:'bold',color:selectedFilter == 'top' ? colors.selectedTextColor : colors.textColor}}>Top Rated</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.space}/>
            </View>
            {/* Movies list */}
            <FlatList  
                    data={[1,2,3,4]}  
                    renderItem={({item}) =>{
                     return <MovieCard/>
                    }}
                    keyExtractor={_keyExtractor}
                    style={{flex: 1,marginTop:height*0.02}}
                />  
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
