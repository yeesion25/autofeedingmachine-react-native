import { StyleSheet, Text, View } from "react-native";
import { useRef, useState } from "react";
import { Button, Box, VStack, ScrollView, Stack, Input, useBreakpointValue, ChevronLeftIcon, ChevronRightIcon, FlatList, Select, CheckIcon } from "native-base";
import { useRouter } from "expo-router";
import React from "react";
export default function Page() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [service, setService] = useState("");
  const handleChange = (text: string) => setValue(text);
  const inputs = useState<string[]>([]);
  const cols = useBreakpointValue({
    base: 3,
    sm: 4,
    md: 8
  });
  const icons = [
    {
      icon1: <ChevronLeftIcon />,
      iconName: "이전"
    },
    {
      icon2: <ChevronRightIcon />,
      iconName: "다음"
    },
  ];
  return <Box alignItems="center">
    <FlatList data={icons} renderItem={({
      item
    }) => <VStack py="2" flex={1} space={2} my={3} mx={10} boxSize="76" alignItems="center">
        <Box _text={{
          textAlign: "center"
        }}>
          <Button onPress={() => router.push('/')} size="lg" width="50" backgroundColor='white'>{item.icon1}</Button>
          <Button onPress={() => router.push('/result')} size="lg" id="R" width="50" backgroundColor='white' >{item.icon2}</Button>
        </Box>
      </VStack>} keyExtractor={item => item.iconName} numColumns={cols} />
    <ScrollView showsVerticalScrollIndicator={false} px="3">
      <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
        <View style={styles.main}>
          <Text style={{ fontSize: 25, paddingBottom: 20 }}>동물 종류(선택)</Text>
          <Stack mb="2.5" mt="1.5" direction={{
            base: "column",
            md: "row"
          }} space={2} mx={{
            base: "auto",
            md: "0"
          }}>
            <Button id="#dog" onPress={() => router.push('/dog')} size="lg" variant="ghost" >
              강아지
            </Button>

            <Button id="#cat" onPress={() => router.push('/cat')} size="lg" variant="ghost" >
              고양이
            </Button>

            <Button id="#parrot" onPress={() => router.push('/parrot')} size="lg" variant="ghost" >
              앵무새
            </Button>

          </Stack>
          <Text style={styles.t}>체중 입력</Text>
          <Input id="#kg" maxLength={3} value={value} w="100%" onChangeText={handleChange} placeholder="현재 반려동물의 체중을 입력해주세요.(단위 : kg)" />
          
          <Text style={styles.t}>원하는 사료 배급 시간 입력</Text>

          <View style={{ alignItems: "center" }}>

            <View style={{ flexDirection: "row", marginBottom: 10 }}>

              <Box maxW="150">
                <Select minWidth="110" accessibilityLabel="Choose time" placeholder="오전/오후 선택" _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                  <Select.Item label="오전" value="am" />
                  <Select.Item label="오후" value="pm" />
                </Select>
              </Box>

              <Input maxLength={2} style={{ width: 50 }} />시
              <Input maxLength={2} style={{ width: 50 }} />분
            </View>

            <View style={{ flexDirection: "row", marginBottom: 10 }}>

              <Box maxW="150">
                <Select minWidth="110" accessibilityLabel="Choose time" placeholder="오전/오후 선택" _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                  <Select.Item label="오전" value="am" />
                  <Select.Item label="오후" value="pm" />
                </Select>
              </Box>

              <Input maxLength={2} style={{ width: 50 }} />시
              <Input maxLength={2} style={{ width: 50 }} />분
            </View>

            <View style={{ flexDirection: "row", marginBottom: 10 }}>

              <Box maxW="150">
                <Select minWidth="110" accessibilityLabel="Choose time" placeholder="오전/오후 선택" _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                  <Select.Item label="오전" value="am" />
                  <Select.Item label="오후" value="pm" />
                </Select>
              </Box>

              <Input maxLength={2} style={{ width: 50 }} />시
              <Input maxLength={2} style={{ width: 50 }} />분     
            </View>
                
          </View>

        </View>
      </VStack>
    </ScrollView>
  </Box>
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  t: {
    fontSize: 25,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
