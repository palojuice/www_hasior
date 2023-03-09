import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const buttonClass =
  "inline-flex justify-center items-center bg-black rounded-full h-6 w-6 text-white no-underline"

const InfoButton = ({ url, ...rest }) => {
  return (
    <>
      {url ? (
        <Link to={url} className={buttonClass} {...rest}>
          i
        </Link>
      ) : (
        <button role="button" className={buttonClass} {...rest}>
          i
        </button>
      )}
    </>
  )
}

InfoButton.propTypes = {
  url: PropTypes.string,
}

InfoButton.defaultProps = {
  url: ``,
}

export default InfoButton
