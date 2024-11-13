import Image from "next/image";
import Wrapper from "./wrapper/Wrapper";

export default function Hero() {
  return (
    <Wrapper>
      <section className="bg-[#074643] flex flex-col  sm:flex-row justify-between items-center md:h-screen lg:h-screen ">
        <div className="text-white ml-2 pb-20 mt-40 sm:ml-3 sm:pb-36 md:pb-40 md:ml-3 lg:space-y-6 lg:ml-16">
          <h2 className="text-xl font-medium my-1 sm:text-xl sm:my-1 sm:font-semibold md:text-2xl md:font-bold lg:text-4xl">
            Hello I&apos;m
          </h2>
          <h1 className="text-xl font-semibold sm:text-2xl sm:font-semibold md:text-3xl lg:text-4xl lg:font-bold">
           <span className="text-yellow-400"> Aqsa Iqbal</span>
          </h1>
          <p className="text-lg font-normal my-1 sm:text-xl sm:font-medium md:text-xl md-semibold lg:text-2xl lg:font-semibold">
            A Frontend Developer
          </p>
          <p className="text-md font-sans sm:text-lg sm:font-light  md:text-xl md:font-normal lg:text-lg lg:font-medium">
          I&apos;m a Passionate Web Developer with expertise in HTML, CSS, JavaScript, TypeScript, Tailwind CSS & Next.js.
           <br />I am dedicated to creating Responsive and visually appealing web applications..
          </p>
        </div>

        <div className="flex justify-center pt-12 mb-2 pb-20 w-10/12  sm:w-2/5 sm:mr-2 md:w-4/12   lg:w-5/12 ">
          <Image
            src="/dp girl.avif"
            alt="image"
            width={400}
            height={400}
            className="rounded-3xl hover:scale-95 duration-300 object-cover"
          />
        </div>
      </section>
    </Wrapper>
  );
}