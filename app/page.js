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
                // Same substring at the start will only be typed out once, initially
                'We produce food for Mice',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'We produce food for Hamsters',
                1000,
                'We produce food for Guinea Pigs',
                1000,
                'We produce food for Chinchillas',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{fontSize: '2em', display: 'inline-block'}}
              repeat={Infinity}
          />
        </section>
        <footer className={"flex justify-center items-center"}>
          contact me!!
        </footer>
      </section>
  )
}
