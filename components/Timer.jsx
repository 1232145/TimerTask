import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TimerButton from './TimerButton';

function Timer({ title, project, elapsed, onPressEdit, onPressDelete, isRunning }) {

  const millisecondsToHuman = (ms) => {
    const seconds = (ms / 1000) % 60 | 0;
    const minutes = (ms / (1000 * 60)) % 60 | 0;
    const hours = (ms / (1000 * 60 * 60)) % 24 | 0;
    return `${hours}:${minutes}:${seconds}`;
  }
  const [ms, setMs] = useState(elapsed);
  const [timeString, setTimeString] = useState(millisecondsToHuman(elapsed))
  const [runState, setRunState] = useState(isRunning);
  const isStart = runState ? {title: "Stop", color: "#DB2828"} : {title: "Start", color: "#21BA45"};

  //countdown

  //countup
  useEffect(() => {
    if (runState) {
      setTimeout(() => setMs(ms + 1000), 1000)
      setTimeString(millisecondsToHuman(ms));
    }
  })

  const handleEditOrRemove = (type) => {
    if (type === "Edit")
      onPressEdit();
    if (type === "Remove")
      onPressDelete();
  }

  const handleStartAndStop = () => {
    setRunState(!runState);
  }

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{timeString}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton color="blue" small title="Edit" handleOnClick={handleEditOrRemove} />
        <TimerButton color="blue" small title="Remove" handleOnClick={handleEditOrRemove} />
      </View>
      <TimerButton color={isStart.color} title={isStart.title} handleOnClick={handleStartAndStop} />
    </View>
  );
}
const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  }
});

export default Timer;