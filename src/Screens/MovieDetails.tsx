import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {getDetailsAction} from '../Redux/Actions/detailsAction';
import { useDispatch, useSelector } from 'react-redux';

interface Iprops{
    route:any
}

const MovieDetails = ({route}:Iprops) => {
    const { id } = route.params;


    const details = useSelector((state) => state.moviesDetailsReducer.details);
    const dispatch = useDispatch()

    const getMovieDetails = (): void =>{
        dispatch(getDetailsAction(`/movie/${id}?api_key=4f298a53e552283bee957836a529baec`,callback=>{
            
        }))
    }

    useEffect(()=>{
        getMovieDetails();
    },[])
    
    return (
        <View>
            <Text>{id}</Text>
        </View>
    )
}

export default MovieDetails

const styles = StyleSheet.create({})
