# Creation d'un Tabbar et d'une fenêtre avec la liste des favoris

## Création de Favoris.js

```javascript
// Components/Favorites.js

import React from 'react'
import { StyleSheet, Text } from 'react-native'

class Favorites extends React.Component {
  render() {
    return <Text>Mes Favoris</Text>
  }
}

const styles = StyleSheet.create({})

export default Favorites
```

## Création du BottomTabNavigator avec deux onglets

```javascript
// Navigation/Navigation.js

import { createBottomTabNavigator } from 'react-navigation'
import Favorites from '../Components/Favorites'

const tabBarOptionsX = {
  labelStyle: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '900',
  },
  style: {
    backgroundColor: 'lightgrey',
  },
}

const MoviesTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarLabel: '🔍',
      },
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarLabel: '♥',
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: tabBarOptionsX,
  },
)

export default createAppContainer(MoviesTabNavigator)
```

## Création d'un composant FilmList (qui est déjà dans Search.js)

```javascript
// Components/FilmLists.js

import React from 'react'
import FilmItem from './FilmItem'
import { View } from 'react-native'
import { FlatList } from 'react-native'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'
import JSONPretty from 'react-json-pretty'

class FilmList extends React.Component {
  constructor(props) {
    super(props)
  }

  _displayDetailForFilm = (idFilm, listId) => {
    console.log('film.id=' + idFilm + ' film.listId=' + listId)
    this.props.navigation.navigate('FilmDetail', {
      idFilm: idFilm,
      listId: listId,
    })
  }

  render() {
    return (
      <View>
        <JSONPretty
          id="json-pretty"
          data={this.props.favoritesFilm.map(function (r) {
            return r['id'] + '-' + r['listId'] + '-' + r['title']
          })}
        />
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (this.page < this.totalPages) {
              // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
              this._loadFilms()
            }
          }}
          keyExtractor={(item) => item.listId}
          data={this.props.films}
          extraData={this.props.favoritesFilm}
          renderItem={({ item }) => (
            <FilmItem
              film={item}
              displayDetailForFilm={this._displayDetailForFilm}
              isFilmFavorite={
                this.props.favoritesFilm.findIndex(
                  (favori) => item.id === favori.id,
                ) !== -1
              }
            />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
    maxHeight: 5000,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm,
  }
}

export default withNavigation(connect(mapStateToProps)(FilmList))
```

## Utilisation du composant FilmList dans Search.js

```javascript
// Components/Search.js

  <Button title="Rechercher" onPress={() => this._loadFilms(true)} />
  <FilmList films = { this.state.films } />
```

## Utilisation du composant FilmList dans Favoris.js

```javascript
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FilmList from './FilmList'
import { connect } from 'react-redux'

class Favorites extends React.Component {
  render() {
    return (
      <View>
        <Text>Mes Favoris</Text>
        <FilmList films={this.props.favoritesFilm}></FilmList>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm,
  }
}

export default connect(mapStateToProps)(Favorites)
```

## Petit détail : ajout de listId dans getFilmDetailFromApi

```javascript
// API/TMDBApi.js
const getFilmDetailFromApi = async (id, listId = null) => {
  // ...
  let response = await axios.get(url)
  response.data.listId = listId ?? uuidv4()
  return response.data
}

// Components/FilmDetail.js
//...
getFilmDetailFromApi(
  this.props.navigation.getParam('idFilm'),
  this.props.navigation.getParam('listId'), //ajout du listId
) //...
```
