import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const linkClassShared =
  "text-black text-xl font-bold no-underline inline-flex items-center"

const LinkWithIcon = ({ children, url, text, buttonType, color, ...rest }) => {
  const chooseButtonStyle = buttonType => {
    return buttonType === "primary"
      ? "bg-black rounded-full h-10 w-10 text-white text-xs inline-flex justify-center items-center flex-shrink-0 ml-4"
      : "shadow-md bg-black rounded-full h-10 w-10 text-white text-xs inline-flex justify-center items-center flex-shrink-0 ml-4"
  }
  const chooseColorStyle = color => {
    return color === "dark" ? "text-black" : "text-white"
  }
  const buttonClass = chooseButtonStyle(buttonType)
  const colorClass = chooseColorStyle(color)
  return (
    <>
      {url ? (
        <Link to={url} className={`${linkClassShared} ${colorClass}`} {...rest}>
          {text}
          <span className={buttonClass}>{children}</span>
        </Link>
      ) : (
        <button
          role="button"
          className={`${linkClassShared} ${colorClass}`}
          {...rest}
        >
          {text}
          <span className={buttonClass}>{children}</span>
        </button>
      )}
    </>
  )
}

LinkWithIcon.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  buttonType: PropTypes.oneOf(["primary", "secondary", ""]),
  color: PropTypes.oneOf(["dark", "light", ""]),
}

LinkWithIcon.defaultProps = {
  text: ``,
  url: ``,
  buttonType: "primary",
  color: "dark",
}

export default LinkWithIcon
