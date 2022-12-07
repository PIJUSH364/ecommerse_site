import React from 'react'

export const Home = ({data}) => {
  return (
    <>
      <h3>Home</h3>
      {
        data.map((e,key)=><li key={key}>{e.email}</li>)
      }
    </>
    
  )
}
