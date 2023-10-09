import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="text-[#898798]">
      <div className="container">
        <div className="flex items-center flex-wrap lg:flex-nowrap py-[80px]">
          <div className="py-3 lg:max-w-[496px]">
            <p className="uppercase tracking-[3px] text-base">about us</p>

            <h2 className="text-[32px]/[1.2] text-[#645f88]">
              The number #1 TECH Service Company
            </h2>

            <div className="mt-4 mb-8 w-8 h-[3px] rounded-[40px] bg-[#6c55f9]" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              quod quisquam ducimus rerum, dolorum aut. Odit corrupti autem vel
              ea?
            </p>

            <br />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              corrupti!
            </p>

            <br />

            <Link
              href="#"
              className="py-2 px-6 bg-[#6c55f9] mt-3 text-[#fff] rounded text-lg"
            >
              Read More
            </Link>
          </div>

          <div className="py-3 max-w-full h-auto mx-auto">
            <Image
              src="https://technext.github.io/seogram/assets/img/about_frame.png"
              alt="photo"
              width={476}
              height={446}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
