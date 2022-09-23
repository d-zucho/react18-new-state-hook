import store from './store'
import './index.css'
import { useEffect, useState } from 'react'

//? create custom hook to connect store to application
//* use selector to update only the piece of state that is getting updated
const useStore = (selector = (state) => state) => {
  //* This will
  //* Subscribe to the store, and
  //* update the state when things actually change
  const [state, setState] = useState(selector(store.getState()))

  useEffect(() => store.subscribe((state) => setState(selector(state))), [])

  return state
}

const DisplayValue = ({ item }) => (
  <div>
    {item}: {useStore((state) => state[item])}
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
