import store from './store'
import './index.css'

const DisplayValue = ({ item }) => (
  <div>
    {item}: {store.getState()[item]}
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
