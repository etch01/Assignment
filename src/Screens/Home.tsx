import React, {useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Header from '../Components/Header';
import {colors} from '../Constants/colors';

const {width, height} = Dimensions.get('window');

const Home = () => {
    const [selectedFilter,setSelectedFilter] = useState<string>('');

    const filter = (filterName:string) :void =>{

    }
    
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
        backgroundColor:'pink',
        // width:width/3.8,
        flex:1,
        height:height*0.05
    }
})
