import React, { useRef, useEffect, useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/organisms/Sidebar"
import "leaflet.fullscreen/Control.FullScreen.css"
import "leaflet.fullscreen/Control.FullScreen.js"
import YearsList from "../components/molecules/YearsList"
import YearsListItem from "../components/atoms/YearsListItem"
import FilmographyBlock from "../components/molecules/FilmographyBlock"

const FilmographyPage = () => {
  const years = ["1929", "30", "40", "50", "60", "70", "80", "1999"]

  return (
    <Layout>
      <section className="w-full relative">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-6">
          <div className="flex -mx-2">
            <div className="w-1/3 px-2">
              <Sidebar />
            </div>
            <div className="w-2/3 px-2">
              <YearsList>
                {years.map(year => {
                  return <YearsListItem year={year} />
                })}
              </YearsList>
              <div className="py-10">
                <div className="">
                  <div className="">
                    <div className="text-xl lg:pr-10">
                      Urodził się 14 maja 1928 roku w Nowym Sączu, zmarł 14
                      lipca 1999 roku w Krakowie; został pochowany na Pęksowym
                      Brzysku w Zakopanem. W 1947 roku Hasior. Urodził się 14
                      maja 1928 roku w Nowym Sączu, zmarł 14 lipca 1999 roku w
                      Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem. W 1947 roku Hasior
                    </div>
                    <div className="py-10">
                      <h2 className="text-black text-2xl font-bold m-0">
                        Bohater
                      </h2>
                    </div>
                    <div>
                      <FilmographyBlock
                        year="1974"
                        title="Alarm ekologiczny"
                        description="Dokument stworzony z okazji 20-go Krajowego zjazdu ekologów"
                        genre="Film dokumentalny"
                        duration="30"
                        country="Polska"
                        emissions="330g/CO2"
                      />
                      <FilmographyBlock
                        year="1974"
                        title="Alarm ekologiczny"
                        description="Dokument stworzony z okazji 20-go Krajowego zjazdu ekologów"
                        genre="Film dokumentalny"
                        country="Polska"
                        duration="30"
                        emissions="330g/CO2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Filmografia" />

export default FilmographyPage
