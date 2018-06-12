import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import HomePageListItem from './HomePageListItem';

class HomePage extends Component {

  componentWillMount(){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.routines);
  }

  renderRow(routine){
    return(
      <HomePageListItem
        routine={routine}
      />
    );
  }

  render() {
    return(
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { routines: state.routines };
};

export default connect(mapStateToProps)(HomePage);
