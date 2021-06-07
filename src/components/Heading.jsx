import React from "react"

function Heading() {
  const customStyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
  }

  customStyle.color = "blue" // One of the advantages of inline styling

  return (
    <h1
      className="heading"
      contentEditable="true"
      spellCheck="false"
      style={customStyle}
    >
      My Favorite Food
    </h1>
  )
}

export default Heading
