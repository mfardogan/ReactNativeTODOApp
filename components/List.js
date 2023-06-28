import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { Todo } from "./Todo";

export const List = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Todo item={item} />;
      }}
    />
  );
};
