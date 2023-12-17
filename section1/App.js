import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
      text: enteredGoalText, id:Math.random().toString()
    },]);
  }



  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler}/>
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList alwaysBounceVertical={false} 
                  data={courseGoals} 
                  keyExtractor={(item, index)=>{
                    return item.id;
                  }}
                  renderItem={(itemData) => {
                      return(
                      <View style={styles.goalItem}>
                        <Text style={styles.goalText}>{itemData.item.text}</Text>
                      </View>

                  )

                 }}/>
         
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
  },
  goalItem:{
    backgroundColor:'#5e0acc',
    borderRadius:6,
    margin: 8,
    padding: 8,
  },
  goalText:{
    color:'white',

  }
  
});
