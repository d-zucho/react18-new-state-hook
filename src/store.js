//? takes in initial state
//? and keeps track of current target
function createStore(initialState) {
  let currentState = initialState

  //* In store, we have 3 abilities:
  //*   1. get the state: getState
  //*   2. set the state: setState
  //*   3. how we connect the store to the app

  return {
    getState: () => currentState,
    setState: (newState) => (currentState = newState),
  }
}

//? Create the store object
const store = createStore({
  value1: 0,
  value2: 0,
})
