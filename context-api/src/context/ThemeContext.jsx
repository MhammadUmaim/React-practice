import React, { createContext } from 'react'

// Create and export the context so consumers can import it
export const PostDataContext = createContext(null)

// Provider component — wrap your app with this to supply the context value
const ThemeContext = (props) => {
  return (
    <PostDataContext.Provider value={'HHHHH'}>
      {props.children}
    </PostDataContext.Provider>
  )
}

export default ThemeContext