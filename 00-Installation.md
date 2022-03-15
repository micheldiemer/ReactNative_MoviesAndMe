# Installation de React Native

cf. https://reactnative.dev/docs/environment-setup

## Installation de node et de yarn

1. Installer `nvm` (Node Version Manager) et/ou `chocolatey` et/ou `scoop`
2. Installer nodejs version [16 LTS](https://nodejs.org/download/release/latest-v16.x/) `nvm install 16`
3. Si nécessaire mettre node.exe dans le PATH
4. `refreshenv`
5. Vérifier `node --version`
6. Mettre à jour npm `npm update -g npm`
7. Vérifier `npm --version`
8. Installer yarn `npm install --global yarn`
9. Vérifier `yarn --version`

## Commandes de Yarn

- `yarn add` : ajouter un module pour le projet courant
- `yarn bin` : displays the location of the yarn bin folder.
- `yarn info -A` : informations
- `yarn remove` : remove a package that will no longer be used in your current package.
- `yarn upgrade` : upgrade packages to their latest version based on the specified range.
- `yarn cache clean [--all}]` : clean the cache
- `yarn autoclean` : voir la [doc](https://classic.yarnpkg.com/en/docs/cli/autoclean)
- `yarn set version stable`: met à jour yarn

## Démarrage rapide avec expo

1. `yarn set version stable` : mettre yarn à jour
2. `npm install --global expo-cli`
3. `where expo` ou bien `which expo`
4. Vérifier `expo --version` ; si ça ne fonctionne pas chercher le dossier `expo-cli` contenant le script `expo` ou `expo.bat` ou `expo.cmd`

## Installer l'extension

1. Navigateur Internet : React Developer Tools
2. Éditeur de code : vérifier et installer les extensions disponibles/utiles

## Création du projet

1. Aller dans le dossier des projets `cd %USERPROFILE%/Documents && mkdir ReactNative && cd ReactNative` Linux `cd ~ && mkdir ReactNative`
1. `cd %USERPROFILE%/Documents/ReactNative` Linux `cd ~/ReactNative`
1. `expo init moviesandme`
1. `cd moviesandme`
1. `code .`
1. `expo start`

## Modules intéressants

- `yarn add react-json-pretty`

````javascript
import 'react-json-pretty/themes/adventure_time.css'
import JSONPretty from 'react-json-pretty'
<View>
    <JSONPretty
        id="json-pretty"
        data={ obj || this.state.obj }
    ></JSONPretty>
</View>

```bash
- `yarn add axios`
- `yarn add react-navigation`
- `yarn global add redux`
- `yarn global add react-redux`
- `yarn add react-native-device-info`

Spécifique expo :

- `expo install expo-camera`
- `expo install expo-location`
- `expo install expo-sensors`
```javascript
import {
  Accelerometer,
  Barometer,
  Gyroscope,
  Magnetometer,
  MagnetometerUncalibrated,
  Pedometer,
} from 'expo-sensors';
````

[React Native Directory](https://reactnative.directory/)  
[Chrome Debugger Tools](http://localhost:8081/debugger-ui/)
react-devtools
