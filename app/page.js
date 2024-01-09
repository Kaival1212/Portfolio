"use client"

import {TypeAnimation} from "react-type-animation";
import { FaGithub ,FaLinkedin } from "react-icons/fa";
import Coffee from "./(Comps)/Coffee";
import Link from "next/link";

export default function Home() {

  return (
      <section className={"flex flex-col h-full bg-[#03001C] text-[#FFE039] text-4xl font-bold font-playfair"}>
          <nav className="flex justify-center text-6xl font-bold items-center h-1/6 bg-gradient-to-b from-[#03001C] to-[#252035]  backdrop-filter backdrop-blur-md shadow-md">
          Kaival Patel
        </nav>
        <section className={"flex-grow flex items-center text-sm justify-start"}>
            <div className={"w-1/2 ml-2"}>
            <TypeAnimation
                sequence={[
                    "I'm a Computer Science student with a passion for learning .",
                    1000,
                    'I have experience with AI using TensorFlow .',
                    500,
                    'I am exploring the exciting world of Full-stack development .',
                    500,
                    'I am eager to dive into iOS app development .',
                    500,
                    'I am also interested in game development .',
                    500,
                ]}
                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
            />
            </div>

            <div className={"flex w-1/2  justify-center items-center"}>
            <Coffee></Coffee>
            </div>

        </section>
        <footer className={"flex mb-3 ml-3 gap-3"}>
           <Link href={"https://github.com/Kaival1212"} replace={false} target="_blank">
               <FaGithub/>
           </Link>
            <Link href={"https://www.linkedin.com/in/kaival-patel-6a3614252/"} replace={false} target="_blank">
                <FaLinkedin/>
            </Link>
        </footer>
      </section>
  )
}
