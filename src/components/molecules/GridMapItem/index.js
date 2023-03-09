import React from "react"
import PropTypes from "prop-types"
import InfoButtonWithText from "../../atoms/InfoButtonWithText"

const GridMapItem = ({
  year,
  title,
  description,
  readingTime,
  audiodescription,
}) => {
  return (
    <div className="flex border-t pt-4 pb-4">
      <div className="flex-none w-32">
        <div className="text-lg">{year}</div>
      </div>
      <div className="flex-1">
        <h3 className="text-2xl">{title}</h3>
        <div className="text-lg mt-4">
          <p>{description}</p>
        </div>
      </div>
      <div className="flex-none w-64 pl-8">
        <div className="text-xl font-semibold">
          <InfoButtonWithText url="/" text="pełny opis" />
        </div>
        <div className="mt-4">czas czytania: {readingTime} minuty</div>
        <div>audiodeskrypcja: {audiodescription ? "dostępna" : "brak"}</div>
      </div>
    </div>
  )
}

GridMapItem.propTypes = {
  year: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  readingTime: PropTypes.string,
  audiodescription: PropTypes.bool,
}

GridMapItem.defaultProps = {
  year: ``,
  title: ``,
  description: ``,
  readingTime: ``,
  audiodescription: false,
}

export default GridMapItem
