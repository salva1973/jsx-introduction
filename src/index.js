import React from "react"
import ReactDOM from "react-dom"

const fName = "Salvatore"
const lName = "Vivolo"
const year = new Date().getFullYear()
const img = "https://picsum.photos/200"

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favorite Food
    </h1>
    <div>
      <img
        className="food-img"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2night.s3.amazonaws.com%2Fpics%2Farticles%2Fcropped%2F1600x800%2Fe37%2F5541ec1385c759030e7ba18e.jpg&f=1&nofb=1"
        alt="pizza"
      />
      <img
        className="food-img"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fricettafacile.it%2Fwp-content%2Fuploads%2FTortellini-in-brodo.jpg&f=1&nofb=1"
        alt="tortellini"
      />
      <img
        className="food-img"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tribugolosa.com%2Fuploads%2Fmedia%2Fsartu-di-riso.jpg%3F1388176113&f=1&nofb=1"
        alt="sartù di riso"
      />
    </div>
    <img src={img + "?grayscale"} alt="random" />
    <p>
      Copyright © {year} {fName} {lName}
    </p>
  </div>,
  document.getElementById("root")
)
