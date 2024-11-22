import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import MyIcon from './MyIcon'

const InputContainer = ({onAddTask}) => {
  const [newTask, setNewTask] = useState('')

  const handleAddPress = (newTask) => {
    if(newTask !== ''){
      onAddTask(newTask)
      setNewTask('')
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
        placeholder='I want to ...'
        value={newTask}
        onChangeText={(text) => setNewTask(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => handleAddPress(newTask)}>
        <MyIcon name={'add'} color={'white'} size={20} />
      </TouchableOpacity>
    </View>
  )
}

export default InputContainer

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        height: 40,
        paddingHorizontal: 15
    },
    addButton: {
        height: 40,
        width: 40,
        backgroundColor: '#007BFF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10

    }
})