import React from 'react';
import NetInfo from "@react-native-community/netinfo";
import NoInternetHeader from '../Components/noInternetHeader';
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { MainNavStack } from './MainNavigation';
import { updateConnectionStatus } from '../Redux/Actions/connectionAction';


const AppContainer = () => {
    //state
    const loginState = useSelector((state) => state.login);
    const [online, setOnline] = React.useState(true);
    //redux
    const dispatch = useDispatch()


    React.useEffect(() => {
        // Subscribe for connection status
        const unsubscribe = NetInfo.addEventListener(state => {
            dispatch(updateConnectionStatus(state.isConnected));
            setOnline(state.isConnected);
        });
        return () => {
            unsubscribe();
        };
    }, [online])
  
    return (
      
        <NavigationContainer>
            {online ? null : <NoInternetHeader />}
                <MainNavStack />
         </NavigationContainer >
    )
}


export default AppContainer