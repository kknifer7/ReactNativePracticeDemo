import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {[1, 2, 3].map((item) => (
          <View key={`left-${item}`} style={styles.redBox} />
        ))}
      </View>
      <View style={styles.center}>
        <Text style={styles.welcomeText}>HELLO REACT NATIVE😀!</Text>
      </View>
      <View style={styles.column}>
        {[1, 2, 3].map((item) => (
          <View key={`right-${item}`} style={styles.redBox} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  column: {
    justifyContent: 'space-around',
    height: '60%',
  },
  redBox: {
    width: 50,
    height: Dimensions.get('window').height / 20,
    backgroundColor: 'red',
    marginVertical: 10,
  },
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default App;
