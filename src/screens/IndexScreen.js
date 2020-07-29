import React from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'

// import components
import LibraryList from '../components/LibraryList'

const IndexScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <LibraryList />
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen