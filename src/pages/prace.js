import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/organisms/Sidebar"
import YearsList from "../components/molecules/YearsList"
import YearsListItem from "../components/atoms/YearsListItem"
import { StaticImage } from "gatsby-plugin-image"
import Dropdown from "../components/molecules/Dropdown"

const WorksPage = () => {
  const years = ["1929", "30", "40", "50", "60", "70", "80", "1999"]

  return (
    <Layout>
      <div className="w-full relative font-serif">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-6">
          <div className="flex -mx-2">
            <div className="w-1/4 px-2">
              <Sidebar />
            </div>
            <div className="w-3/4 px-2">
              <div className="flex items-center justify-between">
                <YearsList>
                  {years.map(year => {
                    return <YearsListItem year={year} />
                  })}
                </YearsList>
                <div className="flex items-center space-x-4">
                  <Dropdown to="/category" text="technika">
                    <ul className="pt-20 pb-10 m-0">
                      <li className="px-4 text-black text-lg font-semibold">
                        <button className="w-full flex items-center justify-between">
                          poezja
                          <span className="w-6 h-6 text-white bg-black rounded-full flex items-center justify-center">
                            x
                          </span>
                        </button>
                      </li>
                      <li className="px-4 text-gray-500 text-lg font-semibold">
                        Zakopane
                      </li>
                      <li className="px-4 text-gray-500 text-lg font-semibold">
                        abstrakcja
                      </li>
                      <li className="px-4 text-gray-500 text-lg font-semibold">
                        dzieci
                      </li>
                      <li className="px-4 text-gray-500 text-lg font-semibold">
                        ziemia
                      </li>
                      <li className="px-4 text-gray-500 text-lg font-semibold">
                        strachy
                      </li>
                      <li className="px-4 text-gray-500 text-lg font-semibold">
                        śmierć
                      </li>
                    </ul>
                  </Dropdown>
                  <Dropdown to="/category" text="motywy">
                    <ul className="pt-20 pb-10">
                      <li>poezja</li>
                      <li>Zakopane</li>
                      <li>abstrakcja</li>
                      <li>dzieci</li>
                      <li>ziemia</li>
                      <li>strachy</li>
                      <li>śmierć</li>
                    </ul>
                  </Dropdown>
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="szukaj"
                      className="border rounded-2xl py-2 pl-2 pr-8 outline-none"
                    />
                    <button
                      className="focus:outline-none focus-visible:rounded-sm focus-visible:outline-none focus:ring-0 absolute top-1/2 right-2 transform -translate-y-1/2"
                      aria-label="Search"
                      type="submit"
                    >
                      <svg
                        width="30px"
                        height="30px"
                        className="fill-current"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path d="M12.5 6a6.5 6.5 0 014.933 10.734l5.643 5.644-.707.707-5.645-5.645A6.5 6.5 0 1112.502 6zm0 1a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <section className="">
                <div className="text-xl lg:pr-10">
                  Urodził się 14 maja 1928 roku w Nowym Sączu, zmarł 14 lipca
                  1999 roku w Krakowie; został pochowany na Pęksowym Brzysku w
                  Zakopanem. W 1947 roku Hasior. Urodził się 14 maja 1928 roku w
                  Nowym Sączu, zmarł 14 lipca 1999 roku w Krakowie; został
                  pochowany na Pęksowym Brzysku w Zakopanem. W 1947 roku Hasior
                </div>
              </section>
              <section className="mt-10">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/hasior-home.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-1.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-1.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-1.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-1.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-1.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-1.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-1.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-1.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-1.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-1.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-1.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-2.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/hasior-home.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-1.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/5 px-3">
                    <Link
                      to="/work"
                      className="block my-6 no-underline text-gray-500"
                    >
                      <div className="aspect-[4/3]">
                        <StaticImage
                          src="../images/praca-2.jpeg"
                          loading="eager"
                          quality={95}
                          objectFit="contain"
                          alt="Władysław Hasior"
                          className="h-full"
                          imgClassName="w-full h-full object-contain object-[center_bottom] shadow-lg"
                        />
                      </div>
                      <div className="mt-2 text-sm">
                        <h3>Autoportret z Chandrą</h3>
                        <div>1956</div>
                        <div>S/3456/MT</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Filmografia" />

export default WorksPage
