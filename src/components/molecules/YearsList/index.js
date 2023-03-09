import React from "react"

const YearsList = ({ children }) => {
  return (
    <div className="py-10">
      <ul className="m-0 flex items-center space-x-4">{children}</ul>
    </div>
  )
}

export default YearsList
