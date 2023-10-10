import {
  Facebook,
  Instagram,
  LucideIcon,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

interface Media {
  id: number;
  icon: LucideIcon;
}

interface Navigate {
  id: number;
  src: string;
  text: string;
}

const media: Media[] = [
  { id: 1, icon: Facebook },
  { id: 2, icon: Twitter },
  { id: 3, icon: Mail },
  { id: 4, icon: Instagram },
  { id: 5, icon: Youtube },
];

const navigateLink: Navigate[] = [
  { id: 1, src: "#", text: "About Us" },
  { id: 2, src: "#", text: "Career" },
  { id: 3, src: "#", text: "Advertise" },
  { id: 4, src: "#", text: "Term of Service" },
  { id: 5, src: "#", text: "Help & Support" },
];

function MediaButton({ icon: Icon }: Media) {
  return (
    <li className="w-10 h-10 text-[#898798] bg-[#fff] rounded-full text-center text-base/[40px] flex justify-center items-center">
      <Link href="#">
        <Icon />
      </Link>
    </li>
  );
}

function NavMenu({ src, text }: Navigate) {
  return (
    <li>
      <Link href={src}>{text}</Link>
    </li>
  );
}

const Footer = () => {
  return (
    <footer className="bg-[url('https://technext.github.io/seogram/assets/img/world_pattern.svg')] bg-center bg-cover bg-no-repeat bg-[#2D2B3A] text-[#898798]">
      <div className="container">
        <div className="py-[80px]">
          <div className="mb-5 md:max-w-[540px] flex flex-col mx-auto lg:max-w-full lg:flex-row lg:gap-7 lg:justify-center">
            {/* Name and Description */}
            <div className="py-3 lg:flex-1">
              <h3 className="text-2xl/[1.2] mb-6 mt-0 font-medium text-[#fff]">
                TECHGram
              </h3>

              <p className=" mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                alias quisquam et maiores ipsa at ab ullam adipisci. Nihil
                architecto quidem facere cumque modi odit repudiandae quas
                aliquid eligendi voluptatem?
              </p>

              {/* Media */}
              <ul className="flex gap-2">
                {media.map((network) => (
                  <MediaButton key={network.id} {...network} />
                ))}
              </ul>
            </div>

            {/* Company Link */}
            <div className="py-3 lg:flex-1">
              <h5 className="mb-6 text-xl/[1.2] text-[#fff] mt-0 text-left font-medium">
                Company
              </h5>

              <ul className="mb-4 flex flex-col gap-6">
                {navigateLink.map((navigate) => (
                  <NavMenu key={navigate.id} {...navigate} />
                ))}
              </ul>
            </div>

            {/* Company Contact */}
            <div className="py-3 lg:flex-1">
              <h5 className="mb-6 mt-0 text-xl/[1.2] font-medium text-[#fff]">
                Contact Us
              </h5>
              <p className="mb-4">
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
              <Link href="#" className="py-[6px]">
                +00 1122 3344 5566
              </Link>
              <br />
              <Link href="#" className="py-[6px]">
                techgram@temporary.com
              </Link>
            </div>

            {/* Send Mail */}
            <div className="py-3 lg:flex-1">
              <h5 className="mb-6 text-[#fff] text-xl/[1.2] font-medium mt-0">
                Newsletter
              </h5>

              <p className="mb-4">Get updates, news or events on your mail.</p>

              <form action="#" className="flex flex-col">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="py-2 h-12 border-[#d6dbd9] text-[#495075] bg-[#fff] text-base/[1.5] border rounded px-[15px] w-full"
                />

                <Link
                  href="#"
                  className="py-2 px-6 text-[#fff] bg-[#35bb78] mt-2 w-full text-center border border-[#35bb78] rounded text-base/[1.5] hover:opacity-70"
                >
                  Send Mail
                </Link>
              </form>
            </div>
          </div>
          <p className="text-[#898798] text-center text-sm/[1.5]">
            Copyright © 2020. This template design and develop by{" "}
            <Link href="#" className="text-[#35bb78]">
              MACode ID
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
