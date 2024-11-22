import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import Task from '../components/Task'
import InputContainer from '../components/InputContainer'

const HomeScreen = () => {
    const [tasks, setTasks] = useState([
        {
            id : '1',
            task: 'Plan the family trip to Norway',
            checked : true
        },
        {
            id : '2',
            task: "Plan David's birthday event",
            checked : true
        },
        {
            id : '3',
            task: 'Groceries for dinner',
            checked : true
        },
        {
            id : '4',
            task: 'Send the presentation to Jeff',
            checked : true
        },
    ])

    const handleAddTask = (newTask) => {
        setTasks([...tasks, { id: Date.now().toString(), task: newTask, checked: false}])
    }

    const handleDeletteTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== index))
    }
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>ALL TASKS</Text>

            <FlatList 
                data={tasks}
                renderItem={({item}) => (
                    <Task task={item} index={item.id} onDeletteTask={handleDeletteTask}/>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
            <InputContainer onAddTask={handleAddTask} />
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