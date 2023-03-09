import React, { useRef, useEffect, useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GridMapItem from "../components/molecules/GridMapItem"
import Sidebar from "../components/organisms/Sidebar"
import { Map, MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import YearsList from "../components/molecules/YearsList"
import YearsListItem from "../components/atoms/YearsListItem"
import "leaflet.fullscreen/Control.FullScreen.css"
import "leaflet.fullscreen/Control.FullScreen.js"

const years = ["1929", "30", "40", "50", "60", "70", "80", "1999"]

const MapPage = () => {
  const [activeTab, setActiveTab] = useState("tab1")
  const [map, setMap] = useState(null)
  // const [map, setMap] = useState < Map > null
  const [fullscreen, setFullscreen] = useState(false)

  function handleOnToggleFullscreen() {
    setFullscreen(!fullscreen)
    console.log(fullscreen, map)
    map.toggleFullscreen()
    // console.log(`Fullscreen: ${map.isFullscreen() ? "yes" : "no"}`)
  }

  const handleTab1 = () => {
    setActiveTab("tab1")
  }

  const handleTab2 = () => {
    setActiveTab("tab2")
  }

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
                  return <YearsListItem year={year} url="/" />
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
                    <div className="py-10 flex items-center justify-between">
                      <h1 className="text-black text-2xl font-bold m-0">
                        Podróże zagraniczne
                      </h1>
                      <div className="flex-shrink-0 flex items-center space-x-3">
                        <button
                          type="button"
                          className={`w-12 h-12 rounded-full bg-gray-100 shadow-inner ${
                            activeTab === "tab1" ? "bg-gray-300" : ""
                          }`}
                          onClick={handleTab1}
                        ></button>
                        <button
                          type="button"
                          className={`w-12 h-12 rounded-full bg-gray-100 shadow-inner ${
                            activeTab === "tab2" ? "bg-gray-300" : ""
                          }`}
                          onClick={handleTab2}
                        ></button>
                      </div>
                    </div>

                    {activeTab === "tab1" ? (
                      <div>
                        <button onClick={handleOnToggleFullscreen}>
                          ssdas
                        </button>
                        <MapContainer
                          style={{ height: "400px" }}
                          center={[51.505, -0.09]}
                          zoom={11}
                          scrollWheelZoom={false}
                          fullscreenControl={true}
                          ref={setMap}
                        >
                          <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          />

                          <Marker
                            position={[51.505, -0.11]}
                            eventHandlers={{
                              click: e => {
                                console.log(
                                  "marker clicked",
                                  e,
                                  e.containerPoint
                                )
                              },
                            }}
                          >
                            <Popup
                              maxWidth={700}
                              minWidth="500"
                              popupPane="testme"
                            >
                              <div className="text-white">1957</div>
                              {/* <div className="text-white text-2xl font-bold mt-4">
                                Berlin, Niemcy: delegacja ASP
                              </div>
                              <div className="font-serif text-xl font-white mt-12">
                                WŁADYSŁAW HASIOR Postać Życiorys Mapa
                                Bibliografia Filmografia Twórczość Galeria O
                                projekcie Kontakt 1929' 30' 40' 50' 60' 70' 80'
                                1999' Urodził się 14 maja 1928 roku w Nowym
                                Sączu, zmarł 14 lipca 1999 roku w Krakowie;
                                został pochowany na Pęksowym Brzysku w
                                Zakopanem. W 1947 roku Hasior. Urodził się 14
                                maja 1928 roku w Nowym Sączu, zmarł 14 lipca
                                1999 roku w Krakowie; został pochowany na
                                Pęksowym Brzysku w Zakopanem. W 1947 roku Hasior
                              </div> */}
                            </Popup>
                          </Marker>
                          <Marker
                            position={[51.505, -0.19]}
                            eventHandlers={{
                              click: e => {
                                console.log(
                                  "marker clicked",
                                  e,
                                  e.containerPoint
                                )
                              },
                            }}
                          >
                            <Popup>
                              A pretty CSS3 popup. <br /> Easily customizable!!!
                            </Popup>
                          </Marker>
                        </MapContainer>
                      </div>
                    ) : (
                      <div>
                        <GridMapItem
                          year="1974"
                          title="Berlin, Niemcy: delegacja ASP"
                          description="Wyjaz poświęcony spotkaniu z rektorami i prorektorami berliskich uczelni artystycznych"
                          readingTime="3"
                          audiodescription={true}
                        />
                        <GridMapItem
                          year="1974"
                          title="Berlin, Niemcy: delegacja ASP"
                          description="Wyjaz poświęcony spotkaniu z rektorami i prorektorami berliskich uczelni artystycznych"
                          readingTime="3"
                          audiodescription={true}
                        />
                        <GridMapItem
                          year="1974"
                          title="Berlin, Niemcy: delegacja ASP"
                          description="Wyjaz poświęcony spotkaniu z rektorami i prorektorami berliskich uczelni artystycznych"
                          readingTime="3"
                          audiodescription={true}
                        />
                      </div>
                    )}
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

export const Head = () => <Seo title="Władysław Hasior" />

export default MapPage
