import React from "react"
import PropTypes from "prop-types"

const FilmographyBlock = ({
  year,
  title,
  description,
  genre,
  country,
  duration,
  emissions,
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
      <div className="flex-none w-52">
        <div className="aspect-video bg-gray-300"></div>
      </div>
      <div className="flex-none w-64 pl-8">
        <div className="">{genre}</div>
        <div className="">Czas trwania: {duration} minuty</div>
        <div className="">Produkcja: {country}</div>
        <div>Emisja pliku: {emissions}</div>
      </div>
    </div>
  )
}

FilmographyBlock.propTypes = {
  year: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  genre: PropTypes.string,
  country: PropTypes.string,
  duration: PropTypes.string,
  emissions: PropTypes.string,
}

FilmographyBlock.defaultProps = {
  year: ``,
  title: ``,
  description: ``,
  genre: ``,
  country: ``,
  duration: ``,
  emissions: ``,
}

export default FilmographyBlock
