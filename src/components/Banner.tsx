import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className="bg-[#F6F5FC] rounded-[30px] z-10 text-[#645f88] my-4">
          <div className="h-full flex flex-wrap items-center justify-center">
            <div className="lg:flex lg:flex-nowrap lg:flex-row-reverse lg:justify-between py-10 lg:px-20">
              <div className="max-w-[400px] text-center h-auto m-auto">
                {/* Right-Image */}
                <Image
                  src="https://technext.github.io/seogram/assets/img/banner_image_1.svg"
                  alt="image"
                  width={345}
                  height={296}
                />
              </div>
              <div className="lg:max-w-[384px] py-12 pl-[15px] pr-[30px] flex flex-col gap-6">
                {/* Title */}
                <h1 className="mb-4 text-4xl">
                  Let&apos;s Check and Optimize your website!
                </h1>

                {/* Description */}
                <p className="text-[#8e8aad] text-base mb-5">
                  Ignite the most powerful growth engine you have ever built for
                  your company
                </p>

                {/* Button */}
                <Link
                  href="#"
                  className="bg-[#6c55f9] rounded-[40px] py-[6px] pr-[6px] pl-6 inline-flex text-[#fff] gap-4 text-base max-w-[180px]"
                >
                  <p>Watch Video</p>
                  <PlayCircle />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
