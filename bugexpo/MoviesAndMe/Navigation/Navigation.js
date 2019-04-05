// Navigation/Navigation.js

import { createStackNavigator, createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import PosterOpen from '../Components/PosterOpen'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: FilmDetail,
    navigationOptions: {
      title: 'Details Du Film'
    }
  },
  PosterOpen: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: PosterOpen,
    navigationOptions: {
      title: 'Affiche du Film'
    }
  }
})

export default createAppContainer(SearchStackNavigator)
