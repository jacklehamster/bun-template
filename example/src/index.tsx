// To recognize dom types (see https://bun.sh/docs/typescript#dom-types):
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Hello } from "bun-template";

const div = document.body.appendChild(document.createElement("div"));


//  HelloComponent
const root = createRoot(div);
root.render(location.search.indexOf("strict-mode") >= 0 ?
  <StrictMode>
    <>{Hello.hello()}</>
  </StrictMode> : <>{Hello.hello()}</>
);

//  Hello
;


export {Hello};
