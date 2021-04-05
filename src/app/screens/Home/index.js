import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cardGame}>
        <Text style={styles.textCard}>INICIAR JUEGO</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
