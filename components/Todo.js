import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../constants/Colors";
import { Container } from "./Container";

const Box = ({ flex, children }) => {
  return (
    <View
      style={{
        flex: flex,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </View>
  );
};

export const Todo = ({ item }) => {
  const { complete, todo, date } = item;
  const nav = useNavigation();

  return (
    <Container
      width={250}
      height={70}
      color={complete ? Colors.COMPLETED_TASK : Colors.COLORGUL_SECONDARY}
      radius={35}
    >
      <View
        style={{
          flex: 5,
          flexDirection: "row",
          height: "100%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box flex={1}>
          <View
            style={{
              backgroundColor: Colors.COLORFUL_PRIMARY,
              borderRadius: 25,
              width: 35,
              height: 35,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="sound" size={24} color={Colors.COLORGUL_SECONDARY} />
          </View>
        </Box>
        <Box flex={4}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
            {todo}
          </Text>
          <Text style={{ fontSize: 15, color: "#737373" }}>{date}</Text>
        </Box>
        <Box flex={1}>
          <TouchableOpacity
            onPress={() => {
              nav.navigate("examine", { item: item });
            }}
          >
            <Entypo name="cog" size={30} color={Colors.PRIMARY} />
          </TouchableOpacity>
        </Box>
      </View>
    </Container>
  );
};
