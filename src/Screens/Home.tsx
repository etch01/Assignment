import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import Header from '../Components/Header';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header HomeHeader={true}/>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
