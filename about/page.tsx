import Wrapper from "@/app/components/wrapper/Wrapper";
import Image from "next/image"; // Import the Image component

export default function About() {
    return (
        <Wrapper>
            <section className="bg-[#074643]  h-full  text-white text-center">
                <div className="text-center space-y-4">
                    <h1 className=" md:text-3xl font-bold md:mb-10 text-yellow-400 text-xl pt-28 md:pt-24 hover:scale-105 duration-300 cursor-pointer">About Me</h1>
                    <h2 className="text-lg font-sans sm:text-xl md:text-2xl lg:text-2xl">Hey there!</h2>
                    <h3 className="text-lg font-sans sm:text-xl md:text-2xl lg:text-2xl">My name is Aqsa Iqbal</h3>
                    <h3 className="text-lg font-sans sm:text-xl md:text-2xl lg:text-2xl">I&apos;m 23 years old</h3>
                    <p className="text-sm font-sans sm:text-xl md:text-2xl lg:text-2xl">
                        🌟 Just a friendly coder on a journey to turn ideas into stunning digital adventures
                        <br /> Join me on this thrilling adventure as I continue to learn, grow
                        <br /> and push the boundaries of my skills. The journey is just beginning,
                        <br /> I can’t wait to see where this path leads me!
                    </p>
                </div>
                
                <div className="mt-10 text-center">
  <h2 className="text-lg font-semibold mb-5 text-yellow-400 py-8 md:text-4xl">My Skills</h2>
  <div className="grid grid-cols-2 gap-3 w-36  mx-auto pb-14 justify-center items-center  md:grid-cols-6 md:w-2/4 md:pb-5 md:gap-2 lg:w-3/4 lg:gap-1 lg:pb-7 cursor-pointer">
    <Image src="/html3.png" alt="HTML" width={90} height={30} className="hover:scale-110 duration-300 w-20 h-20" />
    <Image src="/css2.webp" alt="CSS" width={90} height={50} className="hover:scale-110 duration-300 w-24 h-20" />
    <Image src="/Group.jpg" alt="JavaScript" width={90} height={50} className="hover:scale-110 duration-300" />
    <Image src="/ts2.webp" alt="TypeScript" width={90} height={50} className="hover:scale-110 duration-300" />
    <Image src="/tailwind.png" alt="Tailwind CSS" width={90} height={50} className="hover:scale-110 duration-300" />
    <Image src="/next.webp" alt="Next.js" width={90} height={30} className="hover:scale-110 duration-300" />
  </div>
</div>

                
            </section>
        </Wrapper>
    );
}