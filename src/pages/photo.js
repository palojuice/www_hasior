import * as React from "react"
import { Link, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import WorkRowInfo from "../components/atoms/WorkRowInfo"

import Layout from "../components/layout"
import Seo from "../components/seo"
import IconButton from "../components/atoms/IconButton"

const PhotoPage = () => (
  <Layout>
    <section className="w-full min-h-screen bg-zinc-700 flex justify-center items-center relative">
      <div className="w-full max-w-screen-2xl p-10">
        <div className="flex flex-wrap items-center -mx-2">
          <div className="w-full lg:w-7/12 px-2">
            <div className="px-16 relative">
              <div className="aspect-w-1 aspect-h-1">
                <StaticImage
                  src="../images/hasior-home.jpeg"
                  loading="eager"
                  quality={95}
                  alt="Władysław Hasior"
                  objectFit="contain"
                  placeholder=""
                  imgClassName="w-full h-full object-contain"
                />
              </div>
              <button className="w-10 h-10 bg-black text-white rounded-full absolute top-1/2 left-0 z-10 transform -translate-y-1/2">{`<`}</button>
              <button className="w-10 h-10 bg-black text-white rounded-full absolute top-1/2 right-0 z-10 transform -translate-y-1/2">{`>`}</button>
            </div>
          </div>
          <div className="w-full lg:w-5/12 px-2 text-white">
            <div className="mt-10 lg:mt-0">
              <div>
                <WorkRowInfo
                  title="Tytuł:"
                  description="Autoportret z Chandrą"
                />
                <WorkRowInfo title="Autor:" description="Władysław Hasior" />
                <WorkRowInfo title="Data:" description="1956" />
                <WorkRowInfo title="Sygnatura:" description="S/4556/MT" />
              </div>
              <div className="mt-8">
                <WorkRowInfo
                  title="Opis:"
                  description="Praca z cyklu autoportrety"
                />
              </div>
              <div className="mt-8">
                <WorkRowInfo title="Wymiary:" description="132 x 187 cm" />
                <WorkRowInfo
                  title="Technika:"
                  description="Instalacja elektryczna"
                />
              </div>
              <div className="mt-8">
                <WorkRowInfo
                  title="Tytuł:"
                  description="Autoportret z Chandrą"
                />
                <WorkRowInfo title="Autor:" description="Władysław Hasior" />
                <WorkRowInfo title="Data:" description="1956" />
                <WorkRowInfo title="Sygnatura:" description="S/4556/MT" />
              </div>
              <div className="mt-8">
                <WorkRowInfo
                  title="Opis:"
                  description="Praca z cyklu autoportrety"
                />
              </div>
              <div className="mt-8">
                <WorkRowInfo title="Wymiary:" description="132 x 187 cm" />
                <WorkRowInfo
                  title="Technika:"
                  description="Instalacja elektryczna"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-10 right-10 z-10">
        <IconButton onClick={() => navigate(-1)}>X</IconButton>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Władysław Hasior" />

export default PhotoPage
