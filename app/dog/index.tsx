import{ View, Text, StyleSheet } from "react-native";
import { Stack, Input, Box, Button, useBreakpointValue, ChevronLeftIcon, FlatList, VStack } from "native-base";
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
    <Box alignItems="center">
    <FlatList data={icons} renderItem={({
      item
    }) => <VStack py="2" flex={1} space={2} my={3} mx={2} boxSize="76">
            <Box _text={{
        textAlign: "center"
      }}>
      <Button onPress={() => router.push('/main')} size="lg" width="50" backgroundColor= '#FFE7C3'>{item.icon}</Button>
            </Box>
          </VStack>} keyExtractor={item => item.iconName} numColumns={cols} />
    </Box>
    <Text style={{fontSize:30, paddingTop: 100, paddingBottom: 25}}>현재 사료의 칼로리 입력</Text>
    <Stack space={4} w="75%" maxW="300px" mx="auto">
      <Input variant="rounded" placeholder="현재 사료의 칼로리를 입력해 주세요.(단위 : kcal)" />
    </Stack>
    <Box alignItems="center">
    <Button onPress={() => router.push('/main')} size="lg" marginTop="50" backgroundColor='#E0B095'>완료</Button>
    </Box>
  </View>
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      textAlign: "center",
      backgroundColor: '#FFE7C3',
    }
  })