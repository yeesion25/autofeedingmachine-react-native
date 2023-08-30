import{ View, Text, StyleSheet } from "react-native";
import { Box, Button, Radio, useBreakpointValue, ChevronLeftIcon, FlatList, VStack } from "native-base";
import React from 'react';
import { useRouter } from "expo-router";
export default function Page(){
  const router = useRouter();
  const [value, setValue] = React.useState("one");
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
      return <View style={styles.gray}>
    <Box>
    <FlatList data={icons} renderItem={({
      item
    }) => <VStack py="2" flex={1} space={2} my={3} mx={2} boxSize="76">
            <Box _text={{
        textAlign: "center"
      }}>
      <Button onPress={() => router.push('/main')} size="lg" width="50" backgroundColor= "#DADADA">{item.icon}</Button>
            </Box>
          </VStack>} keyExtractor={item => item.iconName} numColumns={cols} />
    </Box>
    <View style={styles.container}>
    <Text style={styles.t}>하나를 선택해 주세요</Text>
    <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={value} onChange={nextValue => {
    setValue(nextValue);
  }}>
      <Radio value="one" my={1}>
        4개월 미만
      </Radio>
      <Radio value="two" my={1}>
        4 ~ 6개월
      </Radio>
      <Radio value="three" my={1}>
        7 ~ 12개월
      </Radio>
      <Radio value="four" my={1}>
        일반 성묘(중성화 수술 안함)
      </Radio>
      <Radio value="five" my={1}>
        중성화 수술을 한 성묘
      </Radio>
      <Radio value="six" my={1}>
        늙은 성묘
      </Radio>
      <Radio value="seven" my={1}>
        운동량이 많은 성묘
      </Radio>
      <Radio value="eight" my={1}>
        비만묘
      </Radio>
    </Radio.Group>
      </View>
    <Box alignItems="center" marginBottom="20">
    <Button onPress={() => router.push('/main')} size="lg" marginTop="50" backgroundColor='#9E9E9E'>완료</Button>
    </Box>
  </View>
}
const styles = StyleSheet.create({
    gray:{
      backgroundColor: "#DADADA",
      flex:1,
    },
    t:{
      fontSize: 25,
      paddingBottom: 50,
      fontWeight: "500"
    },
    container:{
      flex:1,
      textAlign: "center",
      alignItems: "center",
      backgroundColor: "#DADADA",
    }
  })