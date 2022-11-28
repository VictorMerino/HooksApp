import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
import { MemorizeWithHook } from "./06-memos/MemorizeWithHook";
import { CallbackHook } from "./06-memos/CallbackHook";
import { Father } from "./07-memoTask/Father";
import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";

// import "./08-useReducer/reducers/intro-reducer.ts";

import { HooksApp } from "./HooksApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
    {/* // <FormWithCustomHook /> */}
    {/* // <MultipleCustomHooks /> */}
    {/* // <Layout /> */}
    {/* // <MemorizeWithHook /> */}
    {/* // <CallbackHook /> */}
    <MainApp />
    {/* //{" "} */}
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
