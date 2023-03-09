import React from "react"
import { Link } from "gatsby"

const Sidebar = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between fixed top-0">
      <div>
        <div className="p-10">
          <span className="uppercase text-black">
            <Link to="/" className="uppercase text-black no-underline">
              Władysław Hasior
            </Link>
          </span>
        </div>
        <div className="p-10">
          <ul className="m-0">
            <li>
              <a href="" className="font-bold text-black text-xl no-underline">
                Postać
              </a>
              <ul className="ml-8">
                <li>
                  <Link
                    to="/person"
                    className="text-black text-base no-underline"
                  >
                    Życiorys
                  </Link>
                </li>
                <li>
                  <Link
                    to="/map"
                    className="text-gray-500 text-base no-underline"
                  >
                    Mapa
                  </Link>
                </li>
                <li>
                  <a href="" className="text-gray-500 text-base no-underline">
                    Bibliografia
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-500 text-base no-underline">
                    Filmografia
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href=""
                className="font-bold text-gray-500 text-xl no-underline"
              >
                Twórczość
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-bold text-gray-500 text-xl no-underline"
              >
                Galeria
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-10">
        <ul className="m-0">
          <li>
            <a href="" className="text-gray-500 text-base no-underline">
              O projekcie
            </a>
          </li>
          <li>
            <a href="" className="text-gray-500 text-base no-underline">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
