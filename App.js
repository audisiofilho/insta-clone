import React from "react";
import { ScrollView, StatusBar } from "react-native";
import styled from "styled-components/native";
import AppBar from "./components/AppBar";
import AppFooter from "./components/AppFooter";
import Post from "./components/Post";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Container>
        
          <AppBar />
        <ScrollView>
          <Post />
        </ScrollView>
        <AppFooter />

      </Container>
    </>
  );
};

export default App;
