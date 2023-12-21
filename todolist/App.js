import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GoalDate from "./components/GoalDate";

export default function App() {
  return (
    <View style={styles.container}>
      <GoalDate />
    </View>
  );
}

const styles = StyleSheet.create({});
