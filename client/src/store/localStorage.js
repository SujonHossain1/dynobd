export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('local_data')
      if (serializedState === null) {
        return undefined
      }
      return JSON.parse(serializedState)
    } catch (err) {
      return undefined
    }
  }
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('local_data', serializedState);
    } catch {
      // ignore write errors
    }
  }
  
  