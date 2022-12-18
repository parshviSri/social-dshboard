import React from 'react';
import { render } from "react-dom";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import "./styles.css";
const Level = () => {
    return (
      <div>
        <Suspense fallback={null}>
        </Suspense>
        <Loader />
      </div>
    );
}

export default Level;
