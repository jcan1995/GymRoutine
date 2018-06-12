import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';

export default class HomePageListItem extends Component {

  render(){
    console.log(this.props.routine);
    const { day, title } = this.props.routine;

    return(
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>{day}</Text>
        </CardSection>
      </View>
    );
  }

}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}
