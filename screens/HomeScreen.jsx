import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import Task from '../components/Task'
import InputContainer from '../components/InputContainer'

const HomeScreen = () => {
    const [tasks, setTasks] = useState([
        'Plan the family trip to Norway',
        "Plan David's birthday event",
        'Groceries for dinner',
        'Send the presentation to Jeff',
        'Take the jacket to dry cleaning',
        "Fix dad's tablet",
        'Talk with Steve about this trip',
    ])
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>ALL TASKS</Text>

            <FlatList 
                data={tasks}
                renderItem={({item}) => (
                    <Task task={item}/>
                )}
                keyExtractor={(index) => index?.toString()}
                contentContainerStyle={styles.list}
            />
            <InputContainer />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 30
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    list: {
        paddingHorizontal: 20,
        paddingBottom: 50
    }
})