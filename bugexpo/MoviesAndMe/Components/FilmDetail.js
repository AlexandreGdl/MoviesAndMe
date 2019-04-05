// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View, Text,Image,TouchableOpacity } from 'react-native'
import {getFilmDetailFromApi, getImageFromApi} from '../API/TMDBApi'
class FilmDetail extends React.Component {

  _displayImgFilm = (imgFilm) => {

     this.props.navigation.navigate("PosterOpen", { imgFilm: getImageFromApi(imgFilm) })

  }

  render() {
    const idFilm = this.props.navigation.state.params.infoFilm
    { console.log(idFilm['overview']) }
    return (
      <View style={styles.main_container}>
        <Text>Détail du film </Text>
        <TouchableOpacity onPress={() => {this._displayImgFilm(idFilm['poster_path'])}}>
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(idFilm['poster_path'])}}
        />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  }
})

export default FilmDetail
