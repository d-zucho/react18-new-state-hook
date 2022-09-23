import store from './store'
import './index.css'
import { useEffect, useState } from 'react'

//? create custom hook to connect store to application
const useStore = () => {
  //* This will
  //* Subscribe to the store, and
  //* update the state when things actually change
  const [state, setState] = useState(store.getState())

  useEffect(() => store.subscribe(setState), [])

  return state
}

const DisplayValue = ({ item }) => (
  <div>
    {item}: {useStore()[item]}
  </div>
)

const IncrementValue = ({ item }) => {
  return (
    <button
      onClick={() => {
        const state = store.getState()
        store.setState({
          ...state,
          [item]: state[item] + 1,
          // if item = 0, this is samme as 0 + 1
        })
      }}
    >
      Increment {item}
    </button>
  )
}

function App({ item }) {
  return (
    <div className='app__container'>
      {/* Add button to increment value  */}
      <IncrementValue item='value1' />
      <DisplayValue item='value1' />
      <IncrementValue item='value2' />
      <DisplayValue item='value2' />
    </div>
  )
}

export default App
