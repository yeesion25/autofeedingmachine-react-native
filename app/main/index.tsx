import { StyleSheet, Text, View } from "react-native";
import { useRef, useState } from "react";
import { Button, Box, VStack, ScrollView, Input, useBreakpointValue, ChevronLeftIcon, ChevronRightIcon, FlatList, Select, CheckIcon, Radio } from "native-base";
import { useRouter } from "expo-router";
import React from "react";
export default function Page() {
  const router = useRouter();
  const [valueR, setValueR] = React.useState("one");
  const [value, setValue] = useState("");
  const [service, setService] = useState("");
  const handleChange = (text: string) => setValue(text);
  const [inputs, setInputs] = useState<string[]>([]);
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
  if (router + '/parrot') {

  } else {

  }
  return <Box>
    <FlatList data={icons} renderItem={({
      item
    }) => <VStack py="2" flex={1} space={2} my={3} mx={10} boxSize="76" alignItems="center">
        <Box _text={{
          textAlign: "center"
        }}>
          <Button onPress={() => router.push('/')} size="lg" width="50" backgroundColor='white'>{item.icon1}</Button>
          <Button onPress={() => router.push('/result')} size="lg" width="50" backgroundColor='white'>{item.icon2}</Button>
        </Box>
      </VStack>
    } keyExtractor={item => item.iconName} numColumns={cols} />
    <ScrollView showsVerticalScrollIndicator={false} px="3">
      <VStack w="100%" space={4} px="2" mt="4" alignItems="center" justifyContent="center">
        <View style={styles.main}>
          <Text style={styles.mainFont}>강아지</Text>
          <View>
            <Text style={styles.t}>BCS</Text>
            <Input id="kg" maxLength={3} value={value} w="100%" onChangeText={handleChange} placeholder="현재 반려동물의 BCS 점수를 입력해주세요." />
            <Text style={styles.b}>*BCS =&gt; 1~2점: 지방량 0(이상)~9(미만)% (갈비뼈와 골반, 허리뼈가 확연히 드러나 보이는 정도)
              <br></br>
              3~4점: 지방량 9(이상)~20(미만)% (손으로 만지면 뼈가 쉽게 느껴질 정도)
              <br></br>
              5점: 지방량 20(이상)~24(미만)% (갈비뼈와 골반 등의 뼈들은 만졌을 때 뼈와 살이 적절하게 만져지는 정도)
              <br></br>
              6~7점: 지방량 24(이상)~35(미만)% (두툼한 살로 덮고 있는 듯한 느낌의 뼈가 만져지는 정도)
              <br></br>
              8~9점: 지방량 35%이상 (뼈가 만져지지 않는 정도)</Text>
            <Text style={styles.t}>체중 입력</Text>
            <Input id="kg" maxLength={3} value={value} w="100%" onChangeText={handleChange} placeholder="현재 반려동물의 체중을 입력해주세요.(단위 : kg)" />

            <Text style={styles.t}>해당 사항</Text>
            <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" value={valueR} onChange={nextValue => {
              setValueR(nextValue);
            }}>
              <Radio value="one" my={1}>
                4개월 미만
              </Radio>
              <Radio value="two" my={1}>
                4개월 ~ 성견
              </Radio>
              <Radio value="three" my={1}>
                비중성화 성견
              </Radio>
              <Radio value="four" my={1}>
                중성화 성견
              </Radio>
              <Radio value="five" my={1}>
                과체중 성견
              </Radio>
              <Radio value="six" my={1}>
                비만 성견
              </Radio>
            </Radio.Group>
          </View>
          <br></br>
          <Text style={styles.mainFont}>원하는 사료 배급 시간 입력</Text>
          <br></br>
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
  b: {
    backgroundColor: '#FFE7C3',
  },
  mainFont: {
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
  },

});
