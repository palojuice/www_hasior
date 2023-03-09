import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const YearsListItem = ({ year, url, active }) => {
  return (
    <li>
      <Link
        to={url}
        className={`inline-block py-0.5 text-gray-700 no-underline text-xl ${
          active ? "border-b-2 border-black" : ""
        }`}
      >
        {`${year}'`}
      </Link>
    </li>
  )
}

YearsListItem.propTypes = {
  year: PropTypes.string,
  url: PropTypes.string,
  active: PropTypes.bool,
}

YearsListItem.defaultProps = {
  year: ``,
  url: ``,
  active: false,
}

export default YearsListItem
