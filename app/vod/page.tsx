import React from 'react'
import HeaderVod from './compnents/headerVod'
import VodList from './compnents/vodList'

function Vod(props:any) {
  return (
    <React.Fragment>
        <HeaderVod/>
        <VodList {...props}/>
    </React.Fragment>
  )
}

export default Vod