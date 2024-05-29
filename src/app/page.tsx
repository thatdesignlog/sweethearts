import Image from "next/image";
import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Home() {
  return (
   <main>
    <div className="container">
      <div className="title">does my sweetheart love me?</div>
      <div className="box">
        <canvas className="box__canvas"> 
        </canvas> 
      </div>
      <div className="direction">shake it to find out</div>
    </div>
   </main>
  );
}
