// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View,Image,TouchableOpacity } from 'react-native'
import {getImageFromApi} from '../API/TMDBApi'
class PosterOpen extends React.Component {


  render() {
    const imgFilm = this.props.navigation.state.params.imgFilm

    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri: imgFilm}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  image: {
    flex: 1
  }
})

export default PosterOpen
