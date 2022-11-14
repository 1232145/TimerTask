import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import TimerButton from './TimerButton'; 
import TimerForm from './TimerForm';

function ToggleableTimerForm({ isOpen, onFormSubmit }) {
  const [visibility, setVisibility] = useState(isOpen);
  
  const handleToggleVisibility = () => {
    setVisibility(!visibility);
  }

  const handleFormCreate = (timer) => {
    onFormSubmit(timer);
    setVisibility(!visibility)
  }

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {visibility ? <TimerForm handleFormCreate={handleFormCreate} handleFormClose={handleToggleVisibility}/> 
      : 
      <TimerButton title="+" color="black" handleOnClick={handleToggleVisibility}/>}
    </View>);
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});

export default ToggleableTimerForm;
