import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import WorkRowInfo from "../components/atoms/WorkRowInfo"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PersonPage = () => (
  <Layout>
    <section className="w-full relative">
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-6">
        <div className="flex -mx-2">
          <div className="w-1/3 px-2">
            <div className="min-h-screen flex flex-col justify-between">
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
                      <a
                        href=""
                        className="font-bold text-black text-xl no-underline"
                      >
                        Postać
                      </a>
                      <ul className="ml-8">
                        <li>
                          <a
                            href=""
                            className="text-black text-base no-underline"
                          >
                            Życiorys
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-gray-500 text-base no-underline"
                          >
                            Mapa
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-gray-500 text-base no-underline"
                          >
                            Bibliografia
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            className="text-gray-500 text-base no-underline"
                          >
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
          </div>
          <div className="w-2/3 px-2">
            <div className="py-10">
              <ul className="m-0 flex items-center space-x-4">
                <li>
                  <a href="" className="text-gray-700 no-underline text-xl">
                    1929'
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-700 no-underline text-xl">
                    30'
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-700 no-underline text-xl">
                    40'
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-700 no-underline text-xl">
                    50'
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-700 no-underline text-xl">
                    60'
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-700 no-underline text-xl">
                    70'
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-700 no-underline text-xl">
                    80'
                  </a>
                </li>
                <li>
                  <a href="" className="text-gray-700 no-underline text-xl">
                    1999'
                  </a>
                </li>
              </ul>
            </div>
            <div className="py-10">
              <h1 className="text-black text-2xl font-bold">1932</h1>
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/2 px-2">
                  <div className="text-xl lg:pr-10">
                    Urodził się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca
                    1999 roku w Krakowie; został pochowany na Pęksowym Brzysku w
                    Zakopanem. W 1947 roku Hasior. Urodził się 14 maja 1928 roku
                    w Nowym Sączu, zmarł 14 lipca 1999 roku w Krakowie; został
                    pochowany na Pęksowym Brzysku w Zakopanem. W 1947 roku
                    Hasior
                  </div>
                </div>
                <div className="w-1/2 px-2">
                  <StaticImage
                    src="../images/hasior-home.jpeg"
                    loading="eager"
                    quality={95}
                    alt="Władysław Hasior"
                    className="w-full"
                    imgClassName="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-10">
                <div className="text-black text-xl font-bold">
                  Rozbudowany opis
                </div>
                <div className="text-sm text-gray-700">
                  <span className="block">Czas czytania: 3 minuty</span>
                  <span className="block">Audio deskrypcja: dostępna</span>
                </div>
              </div>
              <div className="flex justify-end mt-10">
                <a
                  href=""
                  className="text-black text-2xl font-bold no-underline inline-flex items-center"
                >
                  następne wspomnienie
                  <span className="inline-block w-12 h-12 bg-black rounded-full ml-3"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Władysław Hasior" />

export default PersonPage
