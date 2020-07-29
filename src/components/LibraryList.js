import React, { useState } from 'react'
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

const LibraryList = ({ libraries }) => {
  // const [selectedDescription, setSelectedDescription] = useState('')

  // const openDescription = libraryDescription => {
  //   setSelectedDescription(libraryDescription)
  // }

  return (
    <View style={{ flex: 1 }}>
      <FlatList 
        data={ libraries }
        keyExtractor={ library => library.id.toString() }
        renderItem={({ item }) => {
          return (
            <ListItem 
              library={ item }
            />
          )
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    alignSelf: 'center',
    fontSize: 24
  },
  descriptionStyle: {
  }
})

const mapStateToProps = state => {
  // console.log(state)
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)