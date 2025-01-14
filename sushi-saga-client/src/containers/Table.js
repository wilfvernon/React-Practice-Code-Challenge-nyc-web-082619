import React, { Fragment } from 'react'
import SushiForm from '../components/SushiForm'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.money } remaining!
        <SushiForm updateWallet={props.updateWallet}/>
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.sushis)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table