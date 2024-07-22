import React, { Suspense } from "react";
import Vod from "./vod/page";
import Loading from "./vod/loading";
import HeaderVod from "./vod/compnents/headerVod";


export default function Home() {
  return (
    <React.Fragment>
      <Suspense key={Date.now()} fallback={<Loading />}>
        <Vod />
      </Suspense>
    </React.Fragment>
  );
}
