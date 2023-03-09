import React, { useEffect, useState, useRef } from "react"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { readingTime } from "reading-time-estimator"

import Layout from "../components/layout"
import Seo from "../components/seo"
import InfoButton from "../components/atoms/InfoButton"
import IconButton from "../components/atoms/IconButton"
import LinkWithIcon from "../components/atoms/LinkWithIcon"
import ArrowRightIcon from "../images/svg/arrow-right.svg"

const DescriptionPage = () => {
  const [totalWords, setTotalWords] = useState("")
  const ref = useRef(null)

  useEffect(() => {
    setTotalWords(ref.current.innerHTML)
  })

  const handleScrollTop = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  const stats = readingTime(totalWords, 255)
  return (
    <Layout>
      <section className="w-full min-h-screen bg-zinc-700 flex justify-center items-center relative">
        <div className="w-full max-w-screen-2xl px-10">
          <div className="min-h-screen lg:pl-24 pt-40 pb-24 relative">
            <div className="fixed w-full top-0 left-0 z-50 pointer-events-none">
              <div className="w-full max-w-screen-2xl mx-auto px-10">
                <div className="text-right mt-8">
                  <div>
                    <IconButton>X</IconButton>
                  </div>
                  <div className="mt-4 pointer-events-auto">
                    <LinkWithIcon
                      text="Audiodeskrypcja"
                      buttonType="secondary"
                      color="light"
                    >
                      <ArrowRightIcon className="fill-current" />
                    </LinkWithIcon>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed w-full bottom-0 left-0 z-50 pointer-events-none">
              <div className="w-full max-w-screen-2xl mx-auto px-10">
                <div className="mb-8">
                  <IconButton buttonType="secondary" onClick={handleScrollTop}>
                    Up
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mb-6">
              <h1 className="text-white text-6xl font-bold">Początki</h1>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2">
                <div className="lg:pr-24" ref={ref}>
                  <div className="text-white text-2xl">
                    Rzeźbiarz, malarz, scenograf, pedagog. Urodził się 14 maja
                    1928 roku w Nowym Sączu, zmarł 14 lipca 1999 roku w
                    Krakowie; został pochowany na Pęksowym Brzysku w Zakopanem.
                  </div>

                  <div className="text-white text-lg mt-8">
                    <p>
                      Rzeźbiarz, malarz, scenograf, pedagog. Urodził się 14 maja
                      1928 roku w Nowym Sączu, zmarł 14 lipca 1999 roku w
                      Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem. Rzeźbiarz, malarz, scenograf, pedagog. Urodził
                      się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca 1999
                      roku w Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem. Rzeźbiarz, malarz, scenograf, pedagog. Urodził
                      się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca 1999
                      roku w Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem.
                    </p>
                    <p>
                      Rzeźbiarz, malarz, scenograf, pedagog. Urodził się 14 maja
                      1928 roku w Nowym Sączu, zmarł 14 lipca 1999 roku w
                      Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem. Rzeźbiarz, malarz, scenograf, pedagog. Urodził
                      się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca 1999
                      roku w Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem. Rzeźbiarz, malarz, scenograf, pedagog. Urodził
                      się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca 1999
                      roku w Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem.Rzeźbiarz, malarz, scenograf, pedagog. Urodził
                      się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca 1999
                      roku w Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem. Rzeźbiarz, malarz, scenograf, pedagog. Urodził
                      się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca 1999
                      roku w Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem. Rzeźbiarz, malarz, scenograf, pedagog. Urodził
                      się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca 1999
                      roku w Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem.
                    </p>
                    <p>
                      Rzeźbiarz, malarz, scenograf, pedagog. Urodził się 14 maja
                      1928 roku w Nowym Sączu, zmarł 14 lipca 1999 roku w
                      Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem. Rzeźbiarz, malarz, scenograf, pedagog. Urodził
                      się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca 1999
                      roku w Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem. Rzeźbiarz, malarz, scenograf, pedagog. Urodził
                      się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca 1999
                      roku w Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem.Rzeźbiarz, malarz, scenograf, pedagog. Urodził
                      się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca 1999
                      roku w Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem. Rzeźbiarz, malarz, scenograf, pedagog. Urodził
                      się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca 1999
                      roku w Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem. Rzeźbiarz, malarz, scenograf, pedagog. Urodził
                      się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca 1999
                      roku w Krakowie; został pochowany na Pęksowym Brzysku w
                      Zakopanem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="lg:pl-24">
                  <div className="text-white text-sm mb-12">
                    <div className="flex -mx-6">
                      <div className="w-[150px] px-4 text-right flex-shrink-0">
                        Autor:
                      </div>
                      <div className="flex-grow px-4">Marianna Kosecka</div>
                    </div>
                    <div className="flex -mx-6">
                      <div className="w-[150px] px-4 text-right flex-shrink-0">
                        Czas czytania:
                      </div>
                      <div className="flex-grow px-4">
                        {stats.minutes} minut
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <StaticImage
                      src="../images/hasior-home.jpeg"
                      loading="eager"
                      quality={95}
                      alt="Władysław Hasior"
                      className="w-full"
                      imgClassName="object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <InfoButton
                        onClick={() => console.log("Button Clicked")}
                      />
                    </div>
                  </div>

                  <div className="mt-24">
                    <StaticImage
                      src="../images/hasior-home.jpeg"
                      loading="eager"
                      quality={95}
                      alt="Władysław Hasior"
                      className="w-full"
                      imgClassName="object-cover"
                    />
                    <div className="text-sx text-white mt-3">
                      Portret Hasiora stojącego na tle górskie chaty
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

export const Head = () => <Seo title="Władysław Hasior" />

export default DescriptionPage
