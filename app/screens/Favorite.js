import React from 'react'
import styled from 'styled-components'

class Favorite extends React.Component{
    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
      };
    render(){
        return(
            <Container>
                <Title>Favorite Song</Title>
            </Container>
        )
    }
}

export default Favorite

const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
`

const Title = styled.Text``