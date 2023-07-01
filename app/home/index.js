import{ View, Text, StyleSheet } from "react-native";
export default function Page(){
  return <View style={styles.container}>
    <View style={{flex:1, backgroundColor:'red'}}></View>
    <View style={{flex:2, backgroundColor:'blue'}}></View>
    {/* <Text style={{fontSize:40}}>홈홈홈</Text> */}
  </View>
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})