import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import logo from "./img/logo32.png";
import blob from "./img/blob.svg";
import { GitHub, Linkedin, Facebook, X, Menu } from "react-feather";

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-4/5 min-h-screen bg-base lg:px-52 relative">
        <nav className="w-full absolute top-0 left-0 md:h-24">
          <div className="w-full p-5 md:hidden">
            <ul className="w-full flex justify-between">
              <li className="flex items-center gap-2">
                <div>
                  <img src={logo} />
                </div>
                <div>
                  <p className="text-lg font-bold">Jerome</p>
                </div>
              </li>
              <li className="flex items-center">
                <button
                  className="font-medium text-primary"
                  onClick={() => setOpenMenu((prev) => !prev)}
                >
                  <Menu />
                </button>
              </li>
            </ul>
          </div>

          <OutsideClickHandler onOutsideClick={() => setOpenMenu(false)}>
            <ul
              className={`fixed left-0 w-full flex-1 flex flex-col gap-5 items-center justify-around bg-base p-2 py-5 shadow-nav transition-all duration-300 lg:px-32 md:flex-row md:relative ${
                openMenu ? "top-0" : "-top-full"
              }`}
            >
              <li className="flex items-center gap-2">
                <div>
                  <img src={logo} />
                </div>
                <div>
                  <p className="text-lg font-bold">Jerome</p>
                </div>
              </li>
              <li>
                <button className="font-medium text-primary">home</button>
              </li>
              <li>
                <button className="font-medium text-primary">about me</button>
              </li>
              <li>
                <button className="font-medium text-primary">projects</button>
              </li>
              <li>
                <button className="font-medium text-primary">contact</button>
              </li>
              <li>
                <div className="w-24 p-2 bg-primary bg-opacity-50 rounded-full">
                  <button className="text-sm bg-primary p-1 px-2 rounded-full text-white">
                    Dark
                  </button>
                </div>
              </li>
              <li className="md:hidden">
                <button
                  className="font-medium text-primary"
                  onClick={() => setOpenMenu(false)}
                >
                  <X />
                </button>
              </li>
            </ul>
          </OutsideClickHandler>
        </nav>

        <main>
          <section className="flex flex-col-reverse mt-24 p-5">
            <div className="flex-1 p-5">
              <p className="font-medium">Hello I'm</p>
              <h1 className="text-lg font-extrabold uppercase">
                Jerome C. Bacatan
              </h1>
              <p className="font-medium">Web Developer</p>

              <div className="mt-10 flex justify-around text-primary">
                <button data-fe>
                  <GitHub />
                </button>
                <button data-fe>
                  <Linkedin />
                </button>
                <button data-fe>
                  <Facebook />
                </button>
              </div>

              <button className="bg-primary text-white rounded p-2 mt-10 block mx-auto">
                Download Resume
              </button>
            </div>
            <div className="flex-1">
              <img src={blob} />
            </div>
          </section>

          <section className="mt-10 p-5">
            <p className="font-medium text-primary text-center my-5">
              about me
            </p>
            <div>
              <p className="font-bold my-5">Hi there</p>
              <p className="text-sm">
                I have been very passionate in programming specially in web
                development. I build web system/application using MERN Stack,
                Laravel . Oriented in C++, VB .net . Has knowledge and skills on
                blockchain technology (Kadena blockchain), did some micro
                projects on it eg, Item Identification.
              </p>
            </div>
            <div className="mt-10 text-sm font-medium">
              <div>
                <p className="font-semibold mb-5">Skills</p>
                <div>
                  <ul className="flex flex-wrap gap-5">
                    <li className="px-5 py-2 shadow rounded">html</li>
                    <li className="px-5 py-2 shadow rounded">css</li>
                    <li className="px-5 py-2 shadow rounded">javascript</li>
                    <li className="px-5 py-2 shadow rounded">mern</li>
                    <li className="px-5 py-2 shadow rounded">laravel</li>
                    <li className="px-5 py-2 shadow rounded">api</li>
                    <li className="px-5 py-2 shadow rounded">git</li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 text-sm font-medium">
                <p className="font-semibold mb-5">Blockchain</p>
                <div>
                  <ul className="flex flex-wrap gap-5">
                    <li className="px-5 py-2 shadow rounded">
                      kadena blockchain
                    </li>
                    <li className="px-5 py-2 shadow rounded">
                      pact smart contract
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 p-5">
            <p className="font-medium text-primary text-center my-5">
              featured projects
            </p>
            <div className="h-96 shadow"></div>
          </section>

          <section className="mt-10 p-5 text-center">
            <p className="font-medium text-primary text-center my-5">
              whats next ?
            </p>
            <div className="shadow p-5">
              <p className="font-semibold text-sm">Send me a message</p>
              <form className="mt-10">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="rounded border border-blue-200 w-full p-2 mt-5 focus:border-blue-400 focus:outline-none"
                ></input>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your email"
                  className="rounded border border-blue-200 w-full p-2 mt-5 focus:border-blue-400 focus:outline-none"
                ></input>

                <textarea
                  type="text"
                  name="name"
                  placeholder="Enter your message"
                  className="rounded border border-blue-200 w-full p-2 mt-5 focus:border-blue-400 focus:outline-none"
                ></textarea>

                <button className="bg-primary rounded px-10 py-2 text-white mt-5">
                  Shoot
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
