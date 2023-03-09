import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "slick-carousel/slick/slick.css"
import Slider from "react-slick"
import ChatBot from "react-simple-chatbot"

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

const carouselSettings = {
  arrows: false,
  dots: false,
  swipeToSlide: true,
  infinite: false,
  draggable: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const SlidePage = () => (
  <Layout>
    <section></section>
    <section>
      <div className="intro-slider">
        <div className="overflow-hidden max-w-[1920px] mx-auto">
          <div className="max-w-[1920px] mx-auto">
            <Slider {...carouselSettings}>
              <div>
                <div className="p-8 bg-slate-200 h-screen max-w-[1920px]">
                  <div className="flex justify-between">
                    <div className="w-1/5">Władysław Hasior</div>
                    <button>Pomiń</button>
                  </div>
                  <div className="flex justify-end pb-10">
                    <div className="w-4/5">
                      ed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </div>
                  </div>
                  <ChatBot
                    hideHeader={true}
                    hideSubmitButton={true}
                    hideBotAvatar={true}
                    hideUserAvatar={true}
                    userAvatar="Hasior"
                    width="100%"
                    contentStyle={{ height: "700px" }}
                    style={{ height: "700px" }}
                    steps={[
                      {
                        id: "1",
                        options: [
                          {
                            value: 1,
                            label: "Dlaczego zostałeś artystą?",
                            trigger: "2",
                          },
                          {
                            value: 2,
                            label: "Jak postrzegasz swoją twórczość?",
                            trigger: "2",
                          },
                          {
                            value: 3,
                            label: "O co chodzi w sztuce?",
                            trigger: "2",
                          },
                        ],
                      },
                      {
                        id: "2",
                        message:
                          "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                        trigger: "3",
                      },
                      {
                        id: "3",
                        options: [
                          {
                            value: 9,
                            label: "Kto jest Twoim patronem?",
                            trigger: "4",
                          },
                          {
                            value: 7,
                            label: "Jak postrzegasz swoją twórczość?",
                            trigger: "2",
                          },
                          {
                            value: 9,
                            label: "O co chodzi w sztuce",
                            trigger: "2",
                          },
                        ],
                      },
                      {
                        id: "4",
                        message:
                          "Nie mam patronów w zadnym artyście. Moje majsterkowanie miało swoje źródła w zdolnościach Janka Muzykanta?",
                        trigger: "5",
                      },
                      {
                        id: "5",
                        // message: "Trudno uświadomić sobie racjonalne powody",
                        options: [
                          {
                            value: 9,
                            label: "Czego się obawiasz?",
                            trigger: "6",
                          },
                          {
                            value: 7,
                            label: "Jak postrzegasz swoją twórczość?",
                            trigger: "2",
                          },
                          {
                            value: 9,
                            label: "O co chodzi w sztuce",
                            trigger: "2",
                          },
                        ],
                      },
                      {
                        id: "6",
                        message: "Obawiam się...",
                        trigger: "7",
                      },
                      {
                        id: "7",
                        options: [
                          {
                            value: 7,
                            label: "Jak postrzegasz swoją twórczość?",
                            trigger: "2",
                          },
                          {
                            value: 9,
                            label: "O co chodzi w sztuce",
                            trigger: "2",
                          },
                        ],
                      },
                    ]}
                  />
                  {/* <button onClick={}>Trigger</button> */}
                </div>
              </div>
              <div>
                <div className="min-h-screen w-full relative">
                  <div className="w-full min-h-screen flex -mx-4">
                    <div className="w-1/2 px-4 min-h-screen">
                      <div className="min-h-screen flex flex-col justify-between py-6 px-6">
                        <div>Władysław Hasior</div>
                        <div>
                          <div className="text-8xl font-bold text-black">
                            Jak rzeźbą robić niebo?
                          </div>
                        </div>
                        <div>
                          <ul className="m-0">
                            <li>
                              <Link to="/">Postać</Link>
                            </li>
                            <li>
                              <Link to="/">Twórczość</Link>
                            </li>
                            <li>
                              <Link to="/">Galeria</Link>
                            </li>
                          </ul>
                          <div className="mt-16">
                            <Link to="/">Kontakt</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 px-4 min-h-screen">
                      <div className="pr-28">
                        <StaticImage
                          src="../images/hasior-home.jpeg"
                          loading="eager"
                          quality={95}
                          alt="Władysław Hasior"
                          className="w-full min-h-screen"
                          imgClassName="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="min-h-screen w-full relative">
                  <div className="w-full min-h-screen flex -mx-4">
                    <div className="w-1/2 px-4 min-h-screen">
                      <div className="min-h-screen flex flex-col justify-between py-6 px-6">
                        <div>Władysław Hasior</div>
                        <div>
                          <div className="text-8xl font-bold text-black">
                            Jak rzeźbą robić niebo?
                          </div>
                        </div>
                        <div>
                          <ul className="m-0">
                            <li>
                              <Link to="/">Postać</Link>
                            </li>
                            <li>
                              <Link to="/">Twórczość</Link>
                            </li>
                            <li>
                              <Link to="/">Galeria</Link>
                            </li>
                          </ul>
                          <div className="mt-16">
                            <Link to="/">Kontakt</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 px-4 min-h-screen">
                      <StaticImage
                        src="../images/hasior-home.jpeg"
                        loading="eager"
                        quality={95}
                        alt="Władysław Hasior"
                        className="w-full min-h-screen"
                        imgClassName="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
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
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Władysław Hasior" />

export default SlidePage
