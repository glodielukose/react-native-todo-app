import { StyleSheet, Text, View } from 'react-native'
// import CheckBox from '@react-native-community/checkbox';
import { useState } from 'react'
import MyIcon from './MyIcon'
import { CheckBox } from '@rneui/themed';

const Task = ({task}) => {
    const [isChecked, setIsChecked] = useState(false);
    
    return (
    <View style={styles.taskContainer}>
        <CheckBox
            center
            title={task}
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
            containerStyle={{
                padding: 0
            }}
            textStyle={styles.taskText}
        />
        {/* <Text style={styles.taskText}>{task}</Text> */}
        <MyIcon name={'trash'} color={'#bbb'} size={25}/>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
    taskContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    taskText: {
        fontSize: 16
    },
    radioButton: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        marginRight: 15
    }
})