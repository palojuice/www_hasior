import React from "react"
import PropTypes from "prop-types"

const WorkRowInfo = ({ title, description }) => {
  return (
    <div className="flex -mx-6">
      <div className="w-1/3 px-4 text-right">{title}</div>
      <div className="w-2/3 px-4">{description}</div>
    </div>
  )
}

WorkRowInfo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

WorkRowInfo.defaultProps = {
  title: ``,
  description: ``,
}

export default WorkRowInfo
