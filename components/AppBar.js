import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Container = styled.View`
  width: 100%;
  height: 70px;
  padding: 0 11px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Row = styled.View`
  flex-direction: row;
`;

const BottomPlus = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  border-radius: 7px;
  border: 1px;
  border-color: black;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  margin-top: 2px;
`;

const BottomHeart = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

const BottomSend = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  margin-top: -5px;
  margin-left: 20px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  transform: rotate(335deg); 
`;

const Logo = styled.Image`
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const AppBar = () => {
  return (
    <Container>
      <Logo source={require("../assets/logo.png")} />
      <Row>
        <BottomPlus>
          <MaterialCommunityIcons name="plus" size={22} />
        </BottomPlus>
        <BottomHeart>
          <MaterialCommunityIcons name="heart-outline" size={32} />
        </BottomHeart>
        <BottomSend>
          <MaterialCommunityIcons name="send" size={32}/>
        </BottomSend>
      </Row>
    </Container>
  );
};

export default AppBar;
