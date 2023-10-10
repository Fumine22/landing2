import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className="bg-[#F6F5FC] rounded-[30px] z-10 text-[#645f88] my-4">
          <div className="flex items-center">
            <div className="flex flex-col lg:flex-row-reverse py-20 lg:px-20 w-full justify-between items-center">
              <div className="max-w-[400px] text-center">
                {/* Right-Image */}
                <Image
                  src="https://technext.github.io/seogram/assets/img/banner_image_1.svg"
                  alt="image"
                  width={400}
                  height={400}
                />
              </div>
              <div className="py-12 pl-[15px] pr-[30px] flex flex-col gap-6 max-w-md">
                {/* Title */}
                <h1 className="mb-4 text-5xl">
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
                  className="bg-[#6c55f9] rounded-[40px] py-[6px] pr-[6px] pl-6 inline-flex text-[#fff] gap-4 text-base max-w-[180px] hover:opacity-70"
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
