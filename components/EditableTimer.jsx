import React, { useState } from 'react'
import TimerForm from './TimerForm'
import Timer from './Timer'

function EditableTimer({ id, title, project, elapsed, isRunning, editFormOpen, onPressEdit, onPressDelete }) {

  const [visibility, setVisibility] = useState(editFormOpen);

  //TimerForm -> update
  const handleFormUpdate = (update) => {
    onPressEdit(update);
    setVisibility(!visibility);
  }

  //Timer -> switch to TimerForm: OnPressEdit()
  //TimerForm -> switch to Timer: handleFormClose()
  const handleToggleTimerVisibility = () => {
    setVisibility(!visibility);
  }

  //Timer -> delete
  const handleTimerDelete = () => {
    const target = {id: id};
    onPressDelete(target);
  }

  return (
    visibility ?
      <TimerForm
        id={id} title={title}
        project={project}
        handleFormClose={handleToggleTimerVisibility}
        handleTimerUpdate={handleFormUpdate}
      />
      :
      <Timer
        id={id} title={title} project={project}
        elapsed={elapsed} isRunning={isRunning}
        onPressEdit={handleToggleTimerVisibility}
        onPressDelete={handleTimerDelete}
      />
  )
}

export default EditableTimer