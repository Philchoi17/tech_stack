import React from 'react'
import {
  View, Text, StyleSheet, TouchableWithoutFeedback, LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

const ListItem = (props) => {
  // const componentWillUpdate = () => {
  //   LayoutAnimation.spring()
  // }
  LayoutAnimation.spring()

  const renderDescription = () => {
    if(props.expanded) {
      return (
        <View style={ styles.itemStyle }>
          <Text style={{ flex: 1 }}>{ props.library.description }</Text>
        </View>
      )
    }
  }
  const { id, title } = props.library
  
  return (
    <TouchableWithoutFeedback
      onPress={() => props.selectLibrary(id)}
    >
      <View style={ styles.itemStyle }>
        <Text 
          style={ styles.titleStyle }
        >
          {  title }
        </Text>
        {/* <Text>
          { props.library.description }
        </Text> */}
        { renderDescription() }
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 28,
    paddingLeft: 15,
  },
  itemStyle: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  }
})

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId == ownProps.library.id
  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)