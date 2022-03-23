# Récupération du poster

1. Ajouter l'image Assets/filmVide.png
2. Effectuer un `console.log` ou un `<JSONPretty>` de l'objet films
3. Quels attributs renvoient un lien vers une image ?
4. Quell est l'URL complète de l'image ? Voir la [lien1](https://developers.themoviedb.org/3/movies/get-movie-images) et [lien2] (https://www.themoviedb.org/talk/5abcef779251411e97025408?language=fr-FR) ou sinon rechercher sur Google `The Movie Database API Images`
5. Afficher manuellement les différentes images possibles dans le navigateur
6. Afficher l'image directement dans le code
7. Ajouter la fonction `getImageFromApi` dans le fichier `API/TMDBApi.js`
8. Exporter la fonction `getImageFromApi` dans le fichier `API/TMDBApi.js`
9. Importer la fonction `getImageFromApi` dans le fichier `Search.js`

```javascript
// API/TMDBApi.js

const getImageFromApi = (name) => {
  return { uri: 'https://image.tmdb.org/t/p/w300' + name }
}
```

Ajuster l'export et les import

```jsx
// API/TMDBApi.js
export { getFilmsFromApiWithSearchedText, getImageFromApi }

// Components/Search.js
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
```

```jsx
// Components/FilmItem.js

import { getImageFromApi } from '../API/TMDBApi'
```

```jsx
// ...
<Image style={styles.image} source={getImageFromApi(film.poster_path)} />
```

## Gestion des cas où il n'y a pas d'image

- Créer un dossier Assets
- Ajouter le fichiler filmVide.png

```javascript
// API/TMDBApi.js
const getImageFromApi = (name) => {
  if (name === null || name === undefined)
    return require('../Assets/filmVide.png')
  // 'https://image.tmdb.org/t/p/original' + name
  // 'https://image.tmdb.org/t/p/w300' + name
  return { uri: 'https://image.tmdb.org/t/p/w300' + name }
}
```
