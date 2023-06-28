import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Container } from "../components/Container";
import { Presser } from "../components/Presser";
import { Colors } from "../constants/Colors";
import { removeTodo, updateTodo } from "../states/slice";

export const Examine = () => {
  const router = useRoute();
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [todo, setTodo] = React.useState("");
  const [completed, setCompleted] = React.useState(false);

  React.useEffect(() => {
    const todo = router.params.item;
    setId(todo.id);
    setTodo(todo.todo);
    setCompleted(todo.complete);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.PRIMARY,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginTop: 100,
          fontWeight: "bold",
          fontSize: 75,
          color: "white",
        }}
      >
        Update
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 40,
          color: "white",
        }}
      >
        To do
      </Text>

      <TextInput
        value={todo}
        onChangeText={setTodo}
        style={{
          width: 300,
          height: 50,
          padding: 10,
          fontSize: 20,
          margin: 5,
          color: "white",
          borderBottomColor: Colors.COLORGUL_SECONDARY,
          borderBottomWidth: 2,
        }}
        placeholder="Todo"
        placeholderTextColor={Colors.COLORGUL_SECONDARY}
      />

      <Container
        width={300}
        height={75}
        color={Colors.COLORGUL_SECONDARY}
        radius={20}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            flexDirection: "row",
            flex: 4,
          }}
        >
          <View
            style={{
              flex: 3,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Entypo
              name={completed ? "thumbs-down" : "thumbs-up"}
              size={30}
              color={completed ? "#ff4d4d" : "#00cc7a"}
            />

            <Text style={{ marginLeft: 10, fontSize: 17, fontWeight: "bold" }}>
              {completed ? "Toggle as not completed." : "Toggle as completed."}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Switch
              value={completed}
              onValueChange={() => setCompleted((pre) => !pre)}
            />
          </View>
        </View>
      </Container>

      <View style={{ flexDirection: "row" }}>
        <Presser
          icon="trash"
          text={" Remove todo."}
          color={"#ff4d4d"}
          width={150}
          onPress={() => {
            Alert.alert("Agree?", "Do you want to remove?", [
              {
                text: "Cancel",
              },
              {
                text: "Remove",
                onPress: () => {
                  dispatch(removeTodo(id));
                  navigator.navigate("home");
                },
              },
            ]);
          }}
        />

        <Presser
          icon="hand"
          width={150}
          color={Colors.COLORFUL_PRIMARY}
          text={"  Save todo."}
          onPress={() => {
            dispatch(
              updateTodo({
                id: id,
                todo: todo,
                complete: completed,
              })
            );

            navigator.navigate("home");
          }}
        />
      </View>
    </View>
  );
};
