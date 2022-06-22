import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Picture from './src/components/Picture';
import Saisie from './src/components/Saisie';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:4}}><Picture></Picture></View>
      <View style={{flex:1}}><Saisie></Saisie></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
