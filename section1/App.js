import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!"/>
        <Button title="Add Goal"/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:4,
    paddingTop:50,
    paddingHorizontal:16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginBottom: 24,
  },
  textInput: {
    width:'70%',
    borderWidth: 1,
    borderColor: '#cccccc',
    marginRight: 8,
    padding:8
  },
  goalsContainer:{
    flex:7,
  }
});
