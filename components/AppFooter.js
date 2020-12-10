import React from "react";
import styled from "styled-components";
import { Foundation, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Container = styled.View`
  width: 100%;
  height: 57px;
  background-color: transparent;
`;

const Row = styled.View`
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

const Card = styled.View`
  height: 40px;
  width: 40px;
  position: relative;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const CardFooterUser = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const AppFooter = () => {
  return (
    <Container>
      <Row>
        <Button>
          <Foundation name="home" size={40} />
        </Button>
        <Button>
            <Ionicons name="ios-search" size={40} />
        </Button>
        <Button>
            <MaterialCommunityIcons name="clipboard-play" size={40} />
        </Button>
        <Button>
            <MaterialCommunityIcons name="shopping" size={40} />
        </Button>
        <Button>
            <Card>
                <CardFooterUser source={require('../assets/user6.jpeg')} />
            </Card>
        </Button>
      </Row>
    </Container>
  );
};

export default AppFooter;
