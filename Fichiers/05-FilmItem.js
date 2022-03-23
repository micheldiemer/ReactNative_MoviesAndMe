// Components/FilmItem.js
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import dayjs from 'dayjs'

class FilmItem extends React.Component {
  render() {
    const film = this.props.film
    console.log('test:' + this.props.film.title)
    return (
      <View style={styles.main_container}>
        {/* <Text>{film.title}</Text> */}
        <Image
          style={styles.image}
          source={require('../Assets/filmVide.png')}
        />
        {/* <Image
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        /> */}
        <View style={styles.content_container}>
          <View style={styles.title_vote_container}>
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text numberOfLines={6} style={styles.description_text}>
              {film.overview}
            </Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>
              Sorti le {new dayjs(film.release_date).format('DD/MM/YYYY')}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    height: 190,
  },
  content_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgreen',
    margin: 5,
  },
  title_vote_container: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'lightyellow',
  },
  description_container: {
    backgroundColor: 'lightpink',
    flex: 7,
  },
  date_container: {
    backgroundColor: 'mediumpurple',
    textAlign: 'right',
  },
  date_text: {
    fontSize: 16,
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666',
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
  },
})

export default FilmItem
