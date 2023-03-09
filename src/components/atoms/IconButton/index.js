import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const buttonClassShared = "w-10 h-10 rounded-full pointer-events-auto"

const IconButton = ({ children, url, buttonType, ...rest }) => {
  const chooseButtonStyle = buttonType => {
    return buttonType === "primary"
      ? "bg-black text-white"
      : "shadow-inner text-white border-2 border-white"
  }
  const buttonClass = chooseButtonStyle(buttonType)
  return (
    <>
      {url ? (
        <Link
          to={url}
          className={`${buttonClassShared} ${buttonClass}`}
          {...rest}
        >
          {children}
        </Link>
      ) : (
        <button
          role="button"
          className={`${buttonClassShared} ${buttonClass}`}
          {...rest}
        >
          {children}
        </button>
      )}
    </>
  )
}

IconButton.propTypes = {
  children: PropTypes.string,
  url: PropTypes.string,
  buttonType: PropTypes.oneOf(["primary", "secondary", ""]),
}

IconButton.defaultProps = {
  children: ``,
  url: ``,
  buttonType: "primary",
}

export default IconButton
