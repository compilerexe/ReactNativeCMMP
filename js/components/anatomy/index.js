import React, { Component } from 'react'
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  H3,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Card,
  CardItem
} from 'native-base'

import { View } from 'react-native'

import styles from './styles'

class Anatomy extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <Header style={{marginTop: 20, paddingBottom: 15}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('DrawerOpen')}
            >
              <Icon name="ios-menu"/>
            </Button>
          </Left>
          <Body>
          <Title style={{width: 250}}>Chiang Mai MAKER PARTY</Title>
          </Body>
          <Right/>

        </Header>

        <Content padder>

          <Card style={styles.mb}>

            <CardItem header bordered style={{backgroundColor: '#3AB4F1'}}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>
                Wednesday 06 / 12 / 2560
              </Text>
            </CardItem>

            <CardItem bordered style={{flex: 1, flexDirection: 'column'}}>

              <Text style={{ color: 'green', fontWeight: 'bold'}}>10.00 : 11.00 , Activity</Text>
              <Text>{`การบัดกรีวงจรอิเล็กโทรนิกส์พื้นฐาน CMMC`}</Text>

              <View style={{justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
                <Button danger>
                  <Icon active name="heart" style={{color: 'white', marginRight: 0}}/>
                  <Text>
                    Interesting
                  </Text>
                </Button>
              </View>

            </CardItem>

            <CardItem bordered style={{flex: 1, flexDirection: 'column'}}>

              <Text style={{ color: 'green', fontWeight: 'bold'}}>11.00 : 12.00 , Maker Talk</Text>
              <Text>{`Maker Movement in South East Asia`}</Text>

              <View style={{justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
                <Button danger>
                  <Icon name="heart" style={{color: 'white', marginRight: 0}}/>
                  <Text>
                    Interesting
                  </Text>
                </Button>
              </View>

            </CardItem>

            <CardItem bordered style={{flex: 1, flexDirection: 'column'}}>

              <Text style={{ color: 'green', fontWeight: 'bold'}}>12.00 : 13.00 , Activity</Text>
              <Text>{`Espresso Lite WiFi Rover`}</Text>

              <View style={{justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
                <Button danger>
                  <Icon name="heart" style={{color: 'white', marginRight: 0}}/>
                  <Text>
                    Interesting
                  </Text>
                </Button>
              </View>

            </CardItem>

          </Card>

        </Content>

      </Container>
    )
  }
}

export default Anatomy
