import{ View, Text, StyleSheet } from "react-native";
import { Button, Box, useBreakpointValue, ChevronLeftIcon, FlatList, VStack } from "native-base";
import { useRouter } from "expo-router";
export default function Page(){
  const router = useRouter();
  const cols = useBreakpointValue({
    base: 3,
    sm: 4,
    md: 8
  });
  const icons = [
    {
      icon: <ChevronLeftIcon />,
      iconName: "이전"
    },
  ]
  return <View style={styles.container}>
    <Box>
    <FlatList data={icons} renderItem={({
      item
    }) => <VStack py="2" flex={1} space={2} my={3} mx={2} boxSize="76">
            <Box _text={{
        textAlign: "center"
      }}>
      <Button onPress={() => router.push('/main')} size="lg" width="50" backgroundColor='#EFFEFF'>{item.icon}</Button>
            </Box>
          </VStack>} keyExtractor={item => item.iconName} numColumns={cols} />
    </Box>
    <Text style={styles.fp}>적정 체중은?</Text>
      fetch(
        
      )
    <Text style={styles.fp}>적정 사료 양은?</Text>
      fetch(
       
      )
    <Box alignItems="center">
    <Button onPress={() => router.push('/')} size="lg" marginTop="50" width="50">완료</Button>
    </Box>
  </View>
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      textAlign: "center",
      backgroundColor: '#EFFEFF'
    },
    fp:{
      fontSize: 25,
      paddingBottom: 50,
      paddingTop: 30,
    },
  })
