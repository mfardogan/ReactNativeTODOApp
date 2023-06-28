import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Notify } from "../components/Nofity";
import { Presser } from "../components/Presser";
import { Colors } from "../constants/Colors";
import { addTodo } from "../states/slice";

export const Create = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.PRIMARY,
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
        Create
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

      <Presser
        icon="hand"
        width={200}
        color={Colors.COLORFUL_PRIMARY}
        text={"  Save to do"}
        onPress={() => {
          if (todo == "") {
            setError(true);
            return;
          }
          setTodo("");
          setError(false);
          dispatch(addTodo(todo));
        }}
      />

      {error && (
        <Notify text={"Enter a todo text!"} hide={() => setError(false)} />
      )}
    </View>
  );
};
