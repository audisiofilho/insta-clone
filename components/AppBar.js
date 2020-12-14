import React from "react";
import styled from "styled-components/native";
import { EvilIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

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
  margin-left: 10px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

const BottomSend = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  margin-top: -5px;
  margin-left: 6px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;
const LogoContent = styled.View`
  width: 145px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  width: 140px;
  height: 40px;
  align-items: center;
  margin-bottom: 3px;
  justify-content: center;
`;

const AppBar = () => {
  return (
    <Container>
      <LogoContent>
      <Logo source={require("../assets/logo.png")} />
      </LogoContent>
      <Row>
        <BottomPlus>
          <MaterialCommunityIcons name="plus" size={22} />
        </BottomPlus>
        <BottomHeart>
          <EvilIcons name="heart" size={35} />
        </BottomHeart>
        <BottomSend>
          <Feather name="send" size={27}/>
        </BottomSend>
      </Row>
    </Container>
  );
};

export default AppBar;
