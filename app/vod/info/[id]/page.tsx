import React, { Suspense } from 'react'
import InfoItem from '../components/infoItem'
import HeaderVod from '../../compnents/headerVod'
import Loading from '../../loading'

function InfoPage(props: any) {

  return (
    <React.Fragment>
      <HeaderVod />
      <Suspense key={Date.now()} fallback={<Loading />}>
        <InfoItem {...props} />
      </Suspense>
    </React.Fragment>
  )
}

export default InfoPage