import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <App />
      </Router>
   </React.StrictMode>,
   document.getElementById("root")
)
