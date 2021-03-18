import React from "react"
import { render } from "react-dom"
import { MyCv } from "./component/mycv"

const here = document.querySelector("#here")
const mycv = <MyCv />

render(mycv, here)
