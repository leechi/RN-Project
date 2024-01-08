import { useEffect, useRef } from "react";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Calendar from "./src/Calendar";
import Margin from "./src/Margin";
import { useCalendar } from "./src/hook/use-calendar";
import { runPracticeDayjs } from "./src/practice-dayjs";
import {
  getCalendarColumns,
  ITEM_WIDTH,
  getDayColor,
  getDayText,
} from "./src/utils";
import dayjs from "dayjs";
import styled from "styled-components";
import { SimpleLineIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Ionicons } from "@expo/vector-icons";
import AddTodoInput from "./src/AddTodoInput";
import { useTodoList } from "./src/hook/use-todo-list";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const now = dayjs();
  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtract1Month,
    add1Month,
  } = useCalendar(now);
  const {
    filteredTodoList,
    input,
    setInput,
    toggleTodo,
    removeTodo,
    addTodo,
    resetInput,
    todoList,
  } = useTodoList(selectedDate);
  const columns = getCalendarColumns(selectedDate);

  const flatListRef = useRef(null);
  const onPressLeftArrow = subtract1Month;
  const onPressHeaderDate = showDatePicker;
  const onPressRightArrow = add1Month;
  const onPressDate = setSelectedDate;

  const ListHeaderComponent = () => (
    <View>
      <Calendar
        todoList={todoList}
        columns={columns}
        selectedDate={selectedDate}
        onPressLeftArrow={onPressLeftArrow}
        onPressHeaderDate={onPressHeaderDate}
        onPressRightArrow={onPressRightArrow}
        onPressDate={onPressDate}
      />
      <Margin height={15} />

      <View
        style={{
          width: 4,
          height: 4,
          borderRadius: 4 / 2,
          backgroundColor: "#a3a3a3",
          alignSelf: "center",
        }}
      />
      <Margin height={15} />
    </View>
  );

  const renderItem = ({ item: todo }) => {
    const isSuccess = todo.isSuccess;
    const onPress = () => toggleTodo(todo.id);
    const onLongPress = () => {
      Alert.alert("삭제하시겠어요?", "", [
        {
          style: "cancel",
          text: "아니요",
        },
        {
          text: "네",
          onPress: () => removeTodo(todo.id),
        },
      ]);
    };
    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={{
          flexDirection: "row",
          width: ITEM_WIDTH,
          alignSelf: "center",
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderBottomWidth: 0.2,
          borderColor: "#a6a6a6",
          // backgroundColor: todo.id % 2 === 0 ? "pink" : "lightblue",
        }}
      >
        <Text style={{ flex: 1, fontSize: 14, color: "#595959" }}>
          {todo.content}
        </Text>

        <Ionicons
          name="ios-checkmark"
          size={17}
          color={isSuccess ? "#595959" : "#bfbfbf"}
        />
      </Pressable>
    );
  };
  const scrollToEnd = () => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
      console.log(flatListRef.current);
    }, 300);
  };
  const onPressAdd = () => {
    addTodo();
    resetInput();
    scrollToEnd();
  };
  const onSubmitEditing = () => {
    addTodo();
    resetInput();
    scrollToEnd();
  };
  const onFocus = () => {
    scrollToEnd();
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            {/* Image 컴포넌트를 SafeAreaView 컴포넌트 안에 위치시킴 */}

            <View>
              <FlatList
                ref={flatListRef}
                data={filteredTodoList}
                contentContainerStyle={{ paddingTop: 30 }}
                style={{ flex: 1 }}
                ListHeaderComponent={ListHeaderComponent}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
              />

              <AddTodoInput
                value={input}
                onChangeText={setInput}
                placeholder={`${dayjs(selectedDate).format(
                  "MM.D"
                )}에 추가할 투두`}
                onPressAdd={onPressAdd}
                onSubmitEditing={onSubmitEditing}
                onFocus={onFocus}
              />
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </KeyboardAvoidingView>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
