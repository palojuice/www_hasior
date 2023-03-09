import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const links = [
  {
    text: "Porozmawiaj z Hasiorem",
    url: "/slide",
  },
  {
    text: "Zobacz sylwetkę",
    url: "/person",
  },
  {
    text: "Poznaj go bliżej",
    url: "/prace",
  },
]

const IndexPage = () => (
  <Layout>
    <section>
      <div className="w-full min-h-screen relative">
        <StaticImage
          src="../images/hasior-home.jpeg"
          loading="eager"
          quality={95}
          alt="Władysław Hasior"
          className="w-full min-h-screen"
          imgClassName="w-full h-full object-cover"
        />
        <div className="w-full max-w-7xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-4xl lg:text-[96px] text-white text-center uppercase font-bold font-serif tracking-tighter leading-normal">
            Władysław Hasior
          </h1>
          <ul className="absolute right-0 text-right pt-12">
            {links.map(link => (
              <li key={link.url} className="">
                <Link
                  className="text-black no-underline text-3xl font-bold flex items-center justify-end"
                  to={link.url}
                >
                  {link.text}
                  <span className="inline-block w-12 h-12 bg-black rounded-full ml-3"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Władysław Hasior" />

export default IndexPage
