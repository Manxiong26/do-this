const note = (state={}, action) => {
    // set book list with data from server
    if (action.type === 'SET_NOTE') {
      // The action payload is a new array from the server 
      // It has ALL the information in it - no need to spread 
      // & add to previous state
      return action.payload;
    }
    return state;
  }

  export default note;