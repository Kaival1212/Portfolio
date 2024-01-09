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
                    'As a computer science student,',
                    1000,
                    'As a TensorFlow enthusiast,',
                    1000,
                    'Aspiring in full-stack development,',
                    1000,
                    'Eager to dive into iOS app development,',
                    1000,
                    'Passionate about game development,',
                    1000,
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
