import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native'
import styled from 'styled-components';

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
      };
  render() {
    return ( 
    <RootVIew >
      <VerticalLine/>
      <Container>
        <Header>
          <Gretting>
            <Weather>Good Morning,</Weather>
            <Quote>Have a nice day!</Quote>
          </Gretting>
        </Header>
        <Content>
        <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                paddingBottom: 20,
              }}>
                <TouchableOpacity onPress={
                  () => {
                    this.props.navigation.push('Detail')
                  }
                }>
          <Card>
            <Image source={require('../../app/assets/gallery/gallery1.jpg')}/>
            <Title>The Forest of Winds</Title>
            <Subtitle>Relaxing Music</Subtitle>
          </Card>
          </TouchableOpacity> 
          <Card>
            <Image source={require('../../app/assets/gallery/gallery4.jpg')}/>
            <Title>The Forest of Winds</Title>
            <Subtitle>Relaxing Music</Subtitle>
          </Card>
          <Card>
            <Image source={require('../../app/assets/gallery/gallery3.jpg')}/>
            <Title>The Forest of Winds</Title>
            <Subtitle>Relaxing Music</Subtitle>
          </Card>
          </ScrollView>
        </Content>
        <NavigationContainer>
        <NavigationBar>
          <NavItem>
              <IconTab source={require('../assets/icons/home/home.png')}/>
              {/* <NavTitle>Home</NavTitle> */}
          </NavItem>
          <NavItem>
          <TouchableOpacity onPress={
             () => {
                 this.props.navigation.push('Favorite')
             }
         }>
              <IconTab source={require('../assets/icons/favorite/favorite.png')}/>
              {/* <NavTitle>Favorite</NavTitle> */}
              </TouchableOpacity>
          </NavItem>
          <NavItem>
              <IconTab source={require('../assets/icons/search/search.png')}/>
              {/* <NavTitle>Search</NavTitle> */}
          </NavItem>
        </NavigationBar>
        </NavigationContainer>
      </Container> 
    </RootVIew >
    );
  }
}

export default HomeScreen;

const RootVIew = styled.View `
  flex: 1;
  background:#F2F3F7;
`;

const VerticalLine = styled.View`
  position: absolute;
  right:0;
  width: 70px;
  height:100%;
  background: #E7E9EC;
`

const Container = styled.View`
  flex:1;
`

const Header = styled.View`
  padding:20px;
`

const Gretting = styled.View`
  margin-top:10px;
`

const Weather = styled.Text`
font-size:14px;
font-weight:300;
color:#2F2F31;
`

const Quote = styled.Text`
  font-size:22px;
  font-weight:600;
  color:#2F2F31;
`

const Content = styled.View`
  flex:1;
`

const Card = styled.View`
  width: 252px;
  height: 312px;
  background: grey;
  border-radius:10px;
  box-shadow: 20px 20px 30px rgba(55, 84, 170,1);
  margin-right:40px;
`

const Image = styled.Image`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  border-radius:10px;
`

const Title = styled.Text`
  margin-left:20px;
  position: absolute;
  bottom:40px;
  font-size:18px;
  font-weight:700;
  color: #E7E9EC;
`

const Subtitle = styled.Text`
  margin-left:20px;
  font-size:14px;
  color: #E7E9EC;
  position: absolute;
  bottom:20px;
`

const NavigationContainer = styled.View`
align-items:center;
justify-content:center;
padding-bottom:20px;
`

const NavigationBar = styled.View`
  background:white;
  width:321px;
  height:66px;
  box-shadow: 2px 10px 20px rgba(55,84,170,00.5);
  border-radius:15px;
  justify-content:space-between;
  padding:20px;
  flex-direction:row;
  align-items:center;
`

const NavItem = styled.View`
    flex-direction:row;
`

const IconTab = styled.Image``

const NavTitle = styled.Text`
    margin-left:10px;
`