import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const buttonClass =
  "inline-flex justify-center items-center bg-black rounded-full h-6 w-6 text-white"
const linkClass =
  "inline-flex items-center text-black text-lg no-underline font-bold"
const iconCLass =
  "bg-black rounded-full h-6 w-6 text-white text-xs inline-flex justify-center items-center flex-shrink-0 mr-4"

const InfoButtonWithText = ({ children, url, text, ...rest }) => {
  return (
    <>
      {url ? (
        <Link to={url} className={linkClass} {...rest}>
          <span className={iconCLass}>i</span>
          {text}
          {children}
        </Link>
      ) : (
        <button role="button" className={buttonClass} {...rest}>
          <span className={iconCLass}>i</span>
          {text}
          {children}
        </button>
      )}
    </>
  )
}

InfoButtonWithText.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
}

InfoButtonWithText.defaultProps = {
  children: ``,
  text: ``,
  url: ``,
}

export default InfoButtonWithText
