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
  SELECT: "#ffffff",
};

// Button type: 'reset' | 'operator' | 'num'
const Button = ({ text, onPress, flex, type, isSelected }) => {
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
        backgroundColor:
          isSelected && type === "operator" ? "white" : backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        paddingVertical: 20,
        margin: 5,
      }}
    >
      <Text
        style={{
          color: isSelected && type === "operator" ? COLOR.OPERATOR : "white",
          fontSize: 40,
        }}
      >
        {text}
      </Text>
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
  console.log(currentOperator);
  return (
    <View>
      {/* 결과 */}
      <InputContainer>
        <Text style={{ color: "white", fontSize: 70 }}>{input}</Text>
      </InputContainer>
      {/* [AC ~ /] */}
      <ButtonContainer>
        {["C", "+/-", "%"].map((num) => (
          <Button type="reset" text={`${num}`} onPress={() => null} flex={1} />
        ))}
        <Button
          type="operator"
          text="/"
          isSelected={currentOperator === "/"}
          onPress={() => setCurrentOperator("/")}
          flex={1}
        />
      </ButtonContainer>
      {/* [7 ~ x] */}
      <ButtonContainer>
        {[7, 8, 9].map((num) => (
          <Button type="num" text={`${num}`} onPress={() => null} flex={1} />
        ))}
        <Button
          type="operator"
          text="X"
          isSelected={currentOperator === "X"}
          onPress={() => null}
          flex={1}
        />
      </ButtonContainer>
      {/* [4 ~ -] */}
      <ButtonContainer>
        {[4, 5, 6].map((num) => (
          <Button type="num" text={`${num}`} onPress={() => null} flex={1} />
        ))}
        <Button
          type="operator"
          text="-"
          isSelected={currentOperator === "-"}
          onPress={() => null}
          flex={1}
        />
      </ButtonContainer>
      {/* [1 ~ +] */}
      <ButtonContainer>
        {[1, 2, 3].map((num) => (
          <Button type="num" text={`${num}`} onPress={() => null} flex={1} />
        ))}
        <Button
          type="operator"
          text="+"
          isSelected={currentOperator === "+"}
          onPress={() => setCurrentOperator("+")}
          flex={1}
        />
      </ButtonContainer>
      {/* [0 ~ =] */}
      <ButtonContainer>
        <Button type="num" text="0" onPress={() => null} flex={2} />
        <Button type="num" text="." onPress={() => null} flex={1} />
        <Button
          type="operator"
          text="="
          isSelected={currentOperator === "="}
          onPress={() => setCurrentOperator("=")}
          flex={1}
        />
      </ButtonContainer>
    </View>
  );
};
