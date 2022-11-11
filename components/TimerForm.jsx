import React, {useState, useEffect} from 'react'
import { StyleSheet, View, ScrollView, Text, TextInput} from 'react-native'
import TimerButton from './TimerButton';

function TimerForm({ id, title, project, handleFormCreate, handleFormClose, handleTimerUpdate }) {
  const submitText = id ? 'Update' : 'Create';
  const [inputTitle, setInputTitle] = useState("");
  const [inputProject, setInputProject] = useState("")

  useEffect(() => {
    title !== undefined && setInputTitle(title)
    project !== undefined && setInputProject(project)
  }, [])

  const handleOnChange = (text, type) => {
    if (type === 'title') {
      // console.log(text);
      setInputTitle(text);
    }
    if (type === 'project') {
      // console.log(text);
      setInputProject(text);
    }
  }
  
  const handleOnClick = (type) => {
    // console.log("This belongs to the TimerForm function")
    if (type === 'Cancel') 
      handleCancel();
    if (type === 'Update') 
      handleUpdate();
    if (type === 'Create') 
      handleCreate();
  }

  const handleCancel = () => {
    handleFormClose();
  }

  const handleUpdate = () => {
    const update = {title: inputTitle, project: inputProject, id: id}
    handleTimerUpdate(update)
  }

  const handleCreate = () => {
    const timer = {title: inputTitle, project: inputProject};
    handleFormCreate(timer);
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={inputTitle}
            onChangeText={(text) => handleOnChange(text, 'title')}
          /> 
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={inputProject}
            onChangeText={(text) => handleOnChange(text, 'project')}
          /> 
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton small color="#21BA45" title= {submitText} handleOnClick={handleOnClick} />
        <TimerButton small color="#DB2828" title='Cancel' handleOnClick = {handleOnClick} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TimerForm