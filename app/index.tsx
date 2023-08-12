import{ Text, StyleSheet } from "react-native";
import { Button, Box } from "native-base";
import { useRouter } from "expo-router";
export default function Page(){
  const router = useRouter();
  return <Box alignItems="center">
    <Text style={styles.title}>반려동물 자동 급식기 세팅</Text>
    <Text style={styles.subtitle}>자신의 반려동물의 적정 몸무게와<br></br>적정 사료 양 알아보기</Text>
    <Button onPress={() => router.push('/main')} size="lg">시작하기</Button>
  </Box>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: 50,
    paddingBottom: 70,
    textAlign:"center"
  },
  subtitle: {
    fontSize: 15,
    color: "#38434D",
    marginBottom: 100,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
    backgroundColor: "#EFFEFF",
  },
})

