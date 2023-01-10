import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your course Goal !'/>
        <Button title='Add Goal' />
      </View>
      <View style = {styles.goalsContainer}>
        <Text>List of goals .... </Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
    appContainer : {
      flex : 1,
      paddingTop:10,
      paddingHorizontal:16
    },
    inputContainer : {
      flex :1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:5,
      borderBottomWidth:1,
      borderBottomColor : '#cccccc'
    },
    textInput : {
      borderWidth:1,
      borderColor :'#cccccc',
      width :'70%',
      marginRight:8,
      padding:8
    },
    goalsContainer : {
      flex : 4
    }
});
