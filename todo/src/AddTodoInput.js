import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { ITEM_WIDTH } from "./utils";

export default ({
  value,
  onChangeText,
  placeholder,
  onPressAdd,
  onSubmitEditing,
  onFocus,
}) => {
  return (
    <View
      style={{
        width: ITEM_WIDTH,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
      }}
      onSubmitEditing={onSubmitEditing}
      blurOnSubmit={false}
      onFocus={onFocus}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        blurOnSubmit={false}
        multiline={true}
        style={{
          flex: 1,
          padding: 5,
          color: "#595959",
        }}
      />
      <TouchableOpacity onPress={onPressAdd} style={{ padding: 5 }}>
        <AntDesign name="plus" size={18} color="#595959" />
      </TouchableOpacity>
    </View>
  );
};
