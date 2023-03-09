import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const links = [
  {
    text: "Porozmawiaj z Hasiorem",
    url: "https://www.gatsbyjs.com/docs/tutorial",
  },
  {
    text: "Zobacz sylwetkę",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
  },
  {
    text: "Poznaj go bliżej",
    url: "https://www.gatsbyjs.com/plugins",
  },
]

const MainPage = () => (
  <Layout>
    <section>
      <div className="w-full min-h-screen relative">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 h-full">
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center relative"
            >
              <StaticImage
                src="../images/hasior-home.jpeg"
                loading="eager"
                quality={95}
                alt="Władysław Hasior"
                className="w-full min-h-screen"
                imgClassName="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex">
                  <h2 className="text-4xl text-white">Postać</h2>
                  <span className="inline-block w-12 h-12 bg-black rounded-full ml-3"></span>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-1/3 h-full">
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center relative"
            >
              <StaticImage
                src="../images/hasior-home.jpeg"
                loading="eager"
                quality={95}
                alt="Władysław Hasior"
                className="w-full min-h-screen"
                imgClassName="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex">
                  <h2 className="text-4xl text-white">Postać</h2>
                  <span className="inline-block w-12 h-12 bg-black rounded-full ml-3"></span>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-1/3 h-full">
            <Link
              to="/"
              className="w-full h-full flex justify-center items-center relative"
            >
              <StaticImage
                src="../images/hasior-home.jpeg"
                loading="eager"
                quality={95}
                alt="Władysław Hasior"
                className="w-full min-h-screen"
                imgClassName="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex">
                  <h2 className="text-4xl text-white">Postać</h2>
                  <span className="inline-block w-12 h-12 bg-black rounded-full ml-3"></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Władysław Hasior" />

export default MainPage
