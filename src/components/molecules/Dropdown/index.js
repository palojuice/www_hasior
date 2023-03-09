import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"

const basicClasses =
  "flex items-center justify-between z-50 transition-colors duration-300 ease-in-out inline-block text-primary-100 text-body font-medium m-0 min-w-[220px] text-left text-black text-xl font-bold px-4 py-2"
const focusClasses =
  "outline-none focus:outline-none focus-visible:outline-none focus-visible:outline-none"
const childrenWrapperClasses =
  "backdrop-blur-xl bg-white/10 w-full absolute z-10 top-0 left-0 border-black border rounded-lg transition-opacity-visibility duration-300 ease-in-out"

const Dropdown = ({ text, additionalClasses, children }) => {
  const node = useRef()
  const [open, setOpen] = useState(false)

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return
    }
    setOpen(false)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  return (
    <div className="relative inline-block" ref={node}>
      <button
        className={`${basicClasses} ${focusClasses} ${additionalClasses} ${
          open ? "border-black" : ""
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="flex-1">
          <span className="block relative py-1 z-20 font-semibold">
            {text}
            <div
              className={`absolute z-50 bottom-0 w-full h-1 bg-black ${
                open ? "" : ""
              }`}
              role="presentation"
            />
          </span>
        </div>
        <div className="ml-4 flex-shrink-0 relative z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
            width="20"
            height="20"
          >
            <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z" />
          </svg>
        </div>
      </button>
      <div
        className={`${childrenWrapperClasses} ${
          open
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  text: PropTypes.string.isRequired,
  additionalClasses: PropTypes.string,
}

Dropdown.defaultProps = {
  text: "",
  additionalClasses: "",
}

export default Dropdown
