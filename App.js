import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, View, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm'

export default function App() {
  const [timers, setTimers] = useState([
    {
      id: uuidv4(),
      title: "Mow the lawn",
      project: "House Chores",
      elapsed: 8986300,
      isRunning: true,
    },
    {
      id: uuidv4(),
      title: "Bake squash",
      project: "Kitchen Chores",
      elapsed: 1273998,
      isRunning: false,
    }
  ])

  const handleSubmitForm = (timer) => {
    const newTimer = [...timers, {
      id: uuidv4(),
      title: timer.title,
      project: timer.project,
      elapsed: 0,
      isRunning: false,
    }]
    setTimers(newTimer);
  }

  const handleEditTimer = (update) => {
    const newTimers = timers.map(item => {
      if (item.id === update.id) {
        item.title = update.title;
        item.project = update.project;
      }
      return item;
    })
    setTimers(newTimers);
  }

  const handleRemoveTimer = (target) => {
    const newTimers = timers.filter(item => item.id !== target.id);
    setTimers(newTimers)
  }

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="light-content" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <KeyboardAvoidingView behavior='padding' style={styles.timerListContainer}>
        <ScrollView style={styles.timerList}>
          <ToggleableTimerForm isOpen={false} onFormSubmit={handleSubmitForm} />
          {
            timers.map(item => {
              return (
                <EditableTimer
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  project={item.project}
                  elapsed={item.elapsed}
                  isRunning={item.isRunning}
                  onPressEdit={handleEditTimer}
                  onPressDelete={handleRemoveTimer}
                />
              )
            })
          }
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  timerListContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  }, title: {
    fontSize: 18, fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  },
});
