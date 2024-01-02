import React from "react";
import { useState } from "react";

import { View, TouchableOpacity, Text } from "react-native";
import { styled } from "styled-components/native";
const ButtonContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

const COLOR = {
  RESET: "#BABABA",
  OPERATOR: "#f39c29",
  NUM: "#555555",
};

// Button type: 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, flex, type }) => {
  const backgroundColor =
    type === "reset"
      ? COLOR.RESET
      : type === "operator"
      ? COLOR.OPERATOR
      : type === "num"
      ? COLOR.NUM
      : "transparent";
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: flex,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        paddingVertical: 20,
        margin: 5,
      }}
    >
      <Text style={{ color: "white", fontSize: 40 }}>{text}</Text>
    </TouchableOpacity>
  );
};

const InputContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export default () => {
  const [input, setInput] = useState(1); // 2 -> 14
  const [currentOperator, setCurrentOperator] = useState(null); // + -> null
  const [result, setResult] = useState(null); // 12 -> 14
  const [tempInput, setTempInput] = useState(null); // 2
  const [tempOperator, setTempOperator] = useState(null); // +
  return (
    <View>
      {/* 결과 */}
      <InputContainer>
        <Text style={{ color: "white", fontSize: 70 }}>{input}</Text>
      </InputContainer>
      {/* [AC ~ /] */}
      <ButtonContainer>
        <Button type="reset" text="C" onPress={() => null} flex={1} />
        <Button type="reset" text="+/-" onPress={() => null} flex={1} />
        <Button type="reset" text="%" onPress={() => null} flex={1} />
        <Button type="operator" text="/" onPress={() => null} flex={1} />
      </ButtonContainer>
      {/* [7 ~ x] */}
      <ButtonContainer>
        <Button type="num" text="7" onPress={() => null} flex={1} />
        <Button type="num" text="8" onPress={() => null} flex={1} />
        <Button type="num" text="9" onPress={() => null} flex={1} />
        <Button type="operator" text="X" onPress={() => null} flex={1} />
      </ButtonContainer>
      {/* [4 ~ -] */}
      <ButtonContainer>
        <Button type="num" text="4" onPress={() => null} flex={1} />
        <Button type="num" text="5" onPress={() => null} flex={1} />
        <Button type="num" text="6" onPress={() => null} flex={1} />
        <Button type="operator" text="-" onPress={() => null} flex={1} />
      </ButtonContainer>
      {/* [1 ~ +] */}
      <ButtonContainer>
        <Button type="num" text="1" onPress={() => null} flex={1} />
        <Button type="num" text="2" onPress={() => null} flex={1} />
        <Button type="num" text="3" onPress={() => null} flex={1} />
        <Button type="operator" text="+" onPress={() => null} flex={1} />
      </ButtonContainer>
      {/* [0 ~ =] */}
      <ButtonContainer>
        <Button type="num" text="0" onPress={() => null} flex={2} />
        <Button type="num" text="." onPress={() => null} flex={1} />
        <Button type="operator" text="=" onPress={() => null} flex={1} />
      </ButtonContainer>
    </View>
  );
};
