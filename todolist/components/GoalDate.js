import { StyleSheet, Text, View } from "react-native";

const GoalDate = () => {
  return (
    <View style={date.todoInfo}>
      <Text style={date.left}></Text>
      <Text style={date.title}>Today</Text>
      <Text style={date.date}>12.21(목)</Text>
    </View>
  );
};

const date = StyleSheet.create({
  todoInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    width: "33%",
    textAlign: "center",
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    width: "33%",
    textAlign: "center",
  },
  left: {
    width: "33%",
  },
});

export default GoalDate;
