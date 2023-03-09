import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/organisms/sidebar"
import YearsList from "../components/molecules/YearsList"
import YearsListItem from "../components/atoms/YearsListItem"
import InfoButton from "../components/atoms/InfoButton"
import InfoButtonWithText from "../components/atoms/InfoButtonWithText"
import LinkWithIcon from "../components/atoms/LinkWithIcon"
import ArrowRightIcon from "../images/svg/arrow-right.svg"

const years = ["1929", "30", "40", "50", "60", "70", "80", "1999"]

const PersonPage = () => (
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
              <h1 className="text-black text-2xl font-bold">1932</h1>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full lg:w-7/12 px-2">
                  <div className="text-xl lg:pr-10">
                    Urodził się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca
                    1999 roku w Krakowie; został pochowany na Pęksowym Brzysku w
                    Zakopanem. W 1947 roku Hasior. Urodził się 14 maja 1928 roku
                    w Nowym Sączu, zmarł 14 lipca 1999 roku w Krakowie; został
                    pochowany na Pęksowym Brzysku w Zakopanem. W 1947 roku
                    Hasior
                  </div>
                </div>
                <div className="w-full lg:w-5/12 px-2">
                  <div className="relative">
                    <StaticImage
                      src="../images/hasior-home.jpeg"
                      loading="eager"
                      quality={95}
                      alt="Władysław Hasior"
                      className="w-full"
                      imgClassName="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <InfoButton url="/photo" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div className="mb-4">
                  <InfoButtonWithText url="/opis" text="rozbudowany opis" />
                </div>
                <div className="text-sm text-gray-700">
                  <span className="block">Czas czytania: 3 minuty</span>
                  <span className="block">Audio deskrypcja: dostępna</span>
                </div>
              </div>
              <div className="flex justify-end mt-10">
                <LinkWithIcon url="/person" text="następne wspomnienie">
                  <ArrowRightIcon className="fill-current" />
                </LinkWithIcon>
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
