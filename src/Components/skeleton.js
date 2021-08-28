
import React from "react";
import { View , Dimensions} from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const {width, height} = Dimensions.get('window');

const skeleton = () => {
  return (
      <View>
    <SkeletonPlaceholder backgroundColor={'lightgrey'}>
        <View style={{width:width*.86,alignSelf:'center' ,flexDirection:'row',marginTop:50}}>
            <View style={{borderRadius:20,width:height*0.08,height:height*0.08}}/>
            <View style={{ marginLeft: 20 }}>
          <View style={{ width: width*.6, height: 20, borderRadius: 4 }} />
          <View style={{ marginTop: 6, width: width*.2, height: 20, borderRadius: 4 }}/>
          <View style={{ marginTop: 6, width: width*.6, height: 20, borderRadius: 4 }} />
        </View>
        </View>
    </SkeletonPlaceholder>
      </View>
  );
};

export default skeleton;