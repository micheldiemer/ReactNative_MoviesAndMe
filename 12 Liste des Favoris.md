# Liste des favoris

## this n'est pas automatiquement défini correctement

```javascript
let person = {
  name: 'John Doe',
  getName: function () {
    // this n'est pas défini/pas défini correctement
    console.log(this.name)
  },
}
setTimeout(person.getName, 1000)
```

```javascript
let person = {
  name: 'John Doe',
  getName: function () {
    // this est l'objet personne grâce à la fonction bind
    console.log(this.name)
  },
}
let f = person.getName.bind(person)
setTimeout(f, 1000)
```

```javascript
let person = {
  name: 'John Doe',
  getName: () => {
    // this est correctement défini grâce à la fonction fléchée
    console.log(this.name)
  },
}
setTimeout(f, 1000)
```

## FilmList

- Créer un composant ReactNative FilmList qui contient la FlatList
- Dans Search.js remplacer la FlatList par le nouveau composant FilmList  
  Plusieurs props : films, \_loadFilms qui est la fonction de rechargement des films, page, totalPages et favoriteList qui est true ou false
- Dans Search.js transformer \_loadFilms en une fonction fléchée
- Créer un fichier `Favorites.js` qui affiche la liste des favoris

```javascript
// Components/Search.js

  _loadFilms = (doResetList = false) => {
```

```javascript
// Components/Search.js

<Button title="Rechercher" onPress={() => this._loadFilms(true)} />
        <FilmList
          films={this.state.films}
          loadFilms={() => this._loadFilms()}
          page={this.page}
          totalPages={this.totalPages}
          favoriteList={false}
        />
```

-

- Créer un createBottomTabNavigator qui contient deux onglets : SearchStackNavigator et FavoritesStackNavigator
