"use client"

import {TypeAnimation} from "react-type-animation";

export default function Home() {

  return (
      <section className={"flex flex-col h-full bg-[#03001C] text-[#FFE039] text-4xl font-bold font-playfair"}>
        <nav className={"flex justify-center items-center"}>
          Kaival Patel
        </nav>
        <section className={"flex-grow flex items-center text-xl justify-start"}>
            <TypeAnimation
                sequence={[
                    "I'm a Computer Science student with a passion for learning.",
                    1000,
                    'I have experience with AI using TensorFlow.',
                    500,
                    'I am exploring the exciting world of Full-stack development.',
                    500,
                    'I am eager to dive into iOS app development.',
                    500,
                    'I am also interested in game development.',
                    500,
                ]}

                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
            />
        </section>
        <footer className={"flex justify-center items-center"}>
          contact me!!
        </footer>
      </section>
  )
}
