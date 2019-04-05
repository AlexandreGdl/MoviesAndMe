import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text, ActivityIndicator } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText, getFilmDetailFromApi } from '../API/TMDBApi'
class Search extends React.Component {

  constructor(props){
    super(props)
    this.info = '',
    this.searchedText = '',
    this.page = 0,
    this.totalPages = 0,
    this.state = {
      films: [],
      isLoading: false
    }
  }
  _loadFilms(){
    this.setState({ isLoading: true })
    if (this.searchedText.length > 0 ) {
      getFilmsFromApiWithSearchedText(this.searchedText, this.page + 1).then(data => {
        this.page = data.page,
        this.totalPages = data.total_pages,
        this.setState({
          films: [ ...this.state.films, ...data.results],
          isLoading: false
       })
     }
     )
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return(
        <View style={styles.loading_container}>
          <ActivityIndicator size= 'large'/>
        </View>
      )
    }
  }
  _searchTextInputChanged(text){
    this.searchedText = text
  }

  _searchFilms(){
    this.page=0
    this.totalPages = 0
    this.setState({
      films:[]
    }, () => { this._loadFilms() })

  }
  _displayDetailForFilm = (idFilm) => {
    getFilmDetailFromApi(idFilm).then(data => {
      this.props.navigation.navigate("FilmDetail", { infoFilm: data })
    })

    console.log('second')
    // Premier parametre = View a afficher, Deuxieme parametre = les variable / parametre qu'on veut faire passer

  }
  render(){
    return(
      <View style={styles.main_container}>
        <TextInput onSubmitEditing={() => this._searchFilms()} onChangeText={(text) => this._searchTextInputChanged(text)} placeholder='Titre du film' style={styles.textinput}/>
        <Button title="Rechercher" onPress={() => this._searchFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          onEndReachThreshold={0.5}
          onEndReached={() => {
            if (this.page < this.totalPages) {
              this._loadFilms()
            }
          }}
          renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}
          />
          {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textinput: {
     marginLeft: 5,
     marginRight: 5,
     height: 50,
     borderColor: "#000000",
     borderWidth: 1,
     paddingLeft: 5
  },
  main_container: {
    flex: 1
  },
  loading_container: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 100,
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center'
}
})
export default Search
