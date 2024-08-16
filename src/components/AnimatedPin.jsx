"use client";
import React from "react";
import { PinContainer } from "./UI/ThreeDPin";

export function AnimatedPin({
    pinTitle,
    pinHref,
    children

}) {
  return (
    <div className="  ">
      <PinContainer containerClassName={" "} className={ ""}
        title={pinTitle}
        href={pinHref}
      >
        {children}
       
      </PinContainer>
    </div>
  );
}
