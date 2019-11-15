import React from 'react'
import styled from 'styled-components'
import {Animated, Easing, TouchableOpacity} from 'react-native'


class DetailMusic extends React.Component{
    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
      };

      state = {
        rotation: new Animated.Value(0)
      }

      componentDidMount(){
        Animated.loop(
            Animated.timing(this.state.rotation, {
              toValue: 1,
              duration: 2500,
              easing: Easing.linear
            })
          ).start();
      }

    render(){
        return(
            <Container>
                <NavigationBar>
                    <TouchableOpacity onPress={
                        ()=>{
                            this.props.navigation.goBack()
                        }
                    }>
                    <ArrowBack>
                        <IconBar source={require('../../assets/icons/arrow-back/ionic-ios-arrow-back.png')}/>
                    </ArrowBack>
                    </TouchableOpacity>
                    <Favorite source={require('../../assets/icons/favorite/favorite.png')}/>
                </NavigationBar>
                <Content>
                    <ImageContainer>
                        <ImageHolder>
                            <ImageAnimated 
                            source={require('../../assets/gallery/gallery1.jpg')} 
                            style={{transform:[{
                                rotate: this.state.rotation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "360deg"]
                                }),
                            }]
                            }}/>
                            <Hole/>
                        </ImageHolder>
                    </ImageContainer>
                    <DescriptionContainer>
                        <Title>The Forest of Wind</Title>
                        <Subtitle>Relaxing Music</Subtitle>
                    </DescriptionContainer>
                    <ActionContainer>
                        <ActionBar>
                            <PrevWrapper>
                                <Prev source={require('../../assets/icons/prev/prev.png')}/>
                            </PrevWrapper>
                            <PlayWrapper>
                                <Play source={require('../../assets/icons/play/play.png')}/>
                            </PlayWrapper>
                            <NextWrapper>
                                <Next source={require('../../assets/icons/next/next.png')}/>
                            </NextWrapper>
                        </ActionBar>
                        </ActionContainer>
                </Content>
            </Container>
        )
    }
}

export default DetailMusic

const Container = styled.View`
    flex:1;
    background:#F2F3F7;
`

const DescriptionContainer = styled.View`
    padding:20px;
    margin-top:20px;
    align-items:center;
`

const Title = styled.Text`
    font-size:22px;
    font-weight:700;
    color:#2F2F31;
`

const Subtitle = styled.Text`
    font-size:16px;
    font-weight:300;
    color:#2F2F31;
`

const Hole = styled.View`
    width:40px;
    height:40px;
    border-radius:100px;
    background:#ffffff;
    position:absolute;
    
`

const ActionContainer = styled.View`
    justify-content: center;
    flex:1;
    padding-bottom:50px;
`

const ActionBar = styled.View`
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
`

const PrevWrapper = styled.View``

const Prev = styled.Image``

const PlayWrapper = styled.View``

const Play = styled.Image``

const NextWrapper = styled.View``

const Next = styled.Image``

const NavigationBar = styled.View`
    padding:20px;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
`

const ArrowBack = styled.View`
    width:31px;
    height:31px;
    background:#ffffff;
    justify-content:center;
    align-items:center;
    transform: rotate(45deg)
    border-radius:10px;
`

const IconBar = styled.Image`
    transform: rotate(-45deg);
`

const Favorite = styled.Image``

const Content = styled.View`
    flex:1;
`

const ImageContainer = styled.View`
    align-items:center;
    margin-top:30px;
`

const ImageHolder = styled.View`
    width: 224px;
    height: 224px;
    border-radius:150px;
    overflow:hidden;
    align-items:center;
    justify-content:center;
    
`

const Image = styled.Image`
    width: 100%;
    height:100%;
    
`

const ImageAnimated = Animated.createAnimatedComponent(Image)
