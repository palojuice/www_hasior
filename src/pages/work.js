import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import WorkRowInfo from "../components/atoms/WorkRowInfo"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkPage = () => (
  <Layout>
    <section className="w-full min-h-screen bg-zinc-700 flex justify-center items-center relative">
      <div className="w-full max-w-screen-2xl p-10">
        <div className="flex flex-wrap items-center -mx-2">
          <div className="w-7/12 px-2">
            <StaticImage
              src="../images/hasior-home.jpeg"
              loading="eager"
              quality={95}
              alt="Władysław Hasior"
              className="w-full"
              imgClassName="w-full h-full object-cover"
            />
          </div>
          <div className="w-5/12 px-2 text-white">
            <div>
              <WorkRowInfo title="Tytuł:" description="Autoportret z Chandrą" />
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
      <button className="w-10 h-10 bg-black text-white rounded-full absolute top-10 right-10 z-10">
        X
      </button>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Władysław Hasior" />

export default WorkPage
