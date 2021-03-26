import React from 'react'
import * as WS from './welcome.styled'

export const Welcome = () => {
  const title = "Welcome to my Sanctuary"
  const headerOne = "Robert Alexandru"
  const position = "Junior Front End developer"
  const about = "About me"
  const description = "Coding flows through my veins and my goal is to continuously improve and make a positive impact in people’s life by delivering amazing front end experiences."
  const downloadButton = "Download my Cv"

  return (
    <div>
      <WS.Title>{ title }</WS.Title>
      <button>YT</button>
      <h1>{ headerOne }</h1>
      <h2>{ position }</h2>
      <h3>{ about }</h3>
      <div>
        <p>{ description }</p>
      </div>
      <button>{ downloadButton }</button>
      <br></br>
      <button>AD</button> 
    </div>
  )
}
