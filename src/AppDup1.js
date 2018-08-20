import React from 'react'
import { Toggle } from './components/Toggle1';

const AppDup = () => {
  return (
    <Toggle 
        onToggle={on => console.log('toggle',on)}
        />
  )
}

export default AppDup;
