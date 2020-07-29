import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// importing screens
import IndexScreen from './src/screens/IndexScreen'

// import redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// import reducers
import reducers from './src/reducers'


// creating navigator where screens will be added
const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Tech Stack'
  }
})


// creating app container
const App = createAppContainer(navigator)

// exporting screen / navigator to be shown on screen
export default () => {
  return (
    <Provider store={ createStore(reducers) }>
      <App />
    </Provider>
  )
}