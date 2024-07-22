import React, { Suspense } from 'react'
import HeaderVod from './compnents/headerVod'
import VodList from './compnents/vodList'
import Loading from './loading'

function Vod(props: any) {
    return (
        <React.Fragment>
            <Suspense key={Date.now()} fallback={<Loading />}>
                <VodList {...props} />
            </Suspense>
        </React.Fragment>
    )
}

export default Vod