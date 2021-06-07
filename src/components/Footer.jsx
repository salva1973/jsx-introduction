import React from "react"

function Footer() {
  const fName = "Salvatore"
  const lName = "Vivolo"
  const year = new Date().getFullYear()

  return (
    <div>
      <p>
        Copyright © {year} {fName} {lName}
      </p>
    </div>
  )
}

export default Footer
