import { createStore } from "./core.js";
import widthLogger from "./logger.js";
import reducer from "./reducer.js";

var {attach, connect, dispatch} = createStore(widthLogger(reducer));

window.dispatch = dispatch

export {
    attach,
    connect
}