import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";

const Container = styled.View`
  width: 100%;
  height: 100px;
  margin-top: -10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Card = styled.View`
  height: 65px;
  width: 65px;
  position: relative;
  border: 3px;
  border-radius: 50px;
  border-color: gray;
  margin-left: 12px;
  align-items: center;
  justify-content: center;
`;

const CardStory = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  border: 1px;
  border-color: white;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const CardStoryUser = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const CardFooter = styled.View`
  width: 100%;
  bottom: -17px;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #363636;
  text-shadow: 1px 1px 1px rgba(28, 28, 28, 0.3);
`;

const Divider = styled.View`
  width: 100%;
  height: 1.5px;
  background: #F0F0F0;
`;

const Story = () => {
  return (
    <>
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 100, padding: 11 }}
        >
          <Card>
            <CardStory>
              <CardStoryUser source={require("../assets/user6.jpeg")} />
            </CardStory>
            <CardFooter>
              <Text>Seu Story</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardStory>
              <CardStoryUser source={require("../assets/user2.jpg")} />
            </CardStory>
            <CardFooter>
              <Text>user7</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardStory>
              <CardStoryUser source={require("../assets/user1.jpg")} />
            </CardStory>
            <CardFooter>
              <Text>User1</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardStory>
              <CardStoryUser source={require("../assets/user5.jpg")} />
            </CardStory>
            <CardFooter>
              <Text>User2</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardStory>
              <CardStoryUser source={require("../assets/user1.jpg")} />
            </CardStory>
            <CardFooter>
              <Text>User3</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardStory>
              <CardStoryUser source={require("../assets/user1.jpg")} />
            </CardStory>
            <CardFooter>
              <Text>User4</Text>
            </CardFooter>
          </Card>
        </ScrollView>
      </Container>
      <Divider/>
    </>
  );
};

export default Story;
