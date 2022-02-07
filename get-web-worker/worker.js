import {pi} from 'web-worker-util'
import Program from "buble-jsx-only/src/program/Program";

addEventListener('message', (event) => {
  postMessage(pi(event.data))
})

