

# Récupération du poster
```javascript
// API/TMDBApi.js

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}
```
```javascript
// Components/FilmItem.js

import { getImageFromApi } from '../API/TMDBApi'

// ...

<Image
          style={styles.image}
          source={{ uri: getImageFromApi(film.poster_path) }}
        />  
```

## Gestion des cas où il n'y a pas d'image
- Créer un dossier Assets
- Ajouter le fichiler filmVide.png
```javascript
// API/TMDBApi.js
export function getImageFromApi(name) {
  if (name == null)
    return '../Assets/filmVide.png'
  return 'https://image.tmdb.org/t/p/w300' + name
}
```