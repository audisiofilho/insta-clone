import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { Entypo, EvilIcons, Feather, FontAwesome } from '@expo/vector-icons'

const Container = styled.View`
  width: 100%;
  height: 450px;
  align-items: center;
  justify-content: space-between;
`;

const PostHeader = styled.View`
  width: 100%;
  height: 55px;
  flex-direction: row;
  background-color: blue;
  align-items: center;
`;

const PostContent = styled.View`
  width: 100%;
  height: 350px;
  justify-content: center;
  align-items: center;
`;

const PostFooter = styled.View`
  width: 100%;
  height: 45px;
  flex-direction: row;
`;

const Card = styled.View`
  height: 45px;
  width: 45px;
  position: relative;
  border: 3px;
  border-radius: 50px;
  border-color: gray;
  margin-left: 12px;
  align-items: center;
  justify-content: center;
`;

const CardPoster = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  border: 1px;
  border-color: white;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const CardPosterUser = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  margin-left: 5px;
  font-size: 12px;
  font-weight: bold;
  color: black;
  
`;

const BottomPoints = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  margin-left: auto;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

const PostContentUser = styled.Image`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const BottomHeart = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  margin-left: -5px;
  bottom: 5px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

const BottomComment = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  margin-left: -10px;
  bottom: 7px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

const BottomSend = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  margin-left: -10px;
  bottom: 7px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

const BottomSave = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  margin-left: 190px;
  bottom: 7px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
`;

const Post = () => {
  return (
    <>
    
    <Container>
    <ScrollView showsVerticalScrollIndicator={false}>
      <PostHeader>
        <Card>
          <CardPoster>
            <CardPosterUser source={require("../assets/user6.jpeg")} />
          </CardPoster>
        </Card>
        <Text>audisiofilho</Text>
        <BottomPoints>
            <Entypo name="dots-three-vertical" size={20}/>
        </BottomPoints>
      </PostHeader>

      <PostContent>
          <PostContentUser source={require('../assets/post1.jpg')} />

      </PostContent>

      <PostFooter>
          <BottomHeart>
              <EvilIcons name="heart" size={40}/>
          </BottomHeart>
          <BottomComment>
              <EvilIcons name="comment" size={40}/>
          </BottomComment>
          <BottomSend>
              <Feather name="send" size={30}/>
          </BottomSend>
          <BottomSave>
              <FontAwesome name="bookmark-o" size={30}/>
          </BottomSave>
      </PostFooter>

      <PostHeader>
        <Card>
          <CardPoster>
            <CardPosterUser source={require("../assets/user2.jpg")} />
          </CardPoster>
        </Card>
        <Text>user2</Text>
        <BottomPoints>
            <Entypo name="dots-three-vertical" size={20}/>
        </BottomPoints>
      </PostHeader>

      <PostContent>
          <PostContentUser source={require('../assets/post2.jpg')} />

      </PostContent>

      <PostFooter>
          <BottomHeart>
              <EvilIcons name="heart" size={40}/>
          </BottomHeart>
          <BottomComment>
              <EvilIcons name="comment" size={40}/>
          </BottomComment>
          <BottomSend>
              <Feather name="send" size={30}/>
          </BottomSend>
          <BottomSave>
              <FontAwesome name="bookmark-o" size={30}/>
          </BottomSave>
      </PostFooter>
      </ScrollView>
    </Container>
    
    </>
  );
};

export default Post;
