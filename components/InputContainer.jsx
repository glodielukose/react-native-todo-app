import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const InputContainer = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.input}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
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

    },
    addButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
})