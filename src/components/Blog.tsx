import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  src: string;
  title: string;
  posted: string;
  time: string;
}

const blogItem: Blog[] = [
  {
    id: 1,
    src: "https://technext.github.io/seogram/assets/img/blog/blog-1.jpg",
    title: "Source of Content Inspiration",
    posted: "Posted on",
    time: "27 Jan 2020",
  },
  {
    id: 2,
    src: "https://technext.github.io/seogram/assets/img/blog/blog-2.jpg",
    title: "Source of Content Inspiration",
    posted: "Posted on",
    time: "27 Jan 2020",
  },
  {
    id: 3,
    src: "https://technext.github.io/seogram/assets/img/blog/blog-3.jpg",
    title: "Source of Content Inspiration",
    posted: "Posted on",
    time: "27 Jan 2020",
  },
];

function BlogCard({ src, title, posted, time }: Blog) {
  return (
    <li className="my-0 mx-auto max-w-[280px] rounded shadow-blog text-base text-left">
      <div className="bg-[#F6F5FC] w-full h-[200px]">
        {/* Image Cover */}
        <Image
          src={src}
          alt="photo"
          width={312}
          height={200}
          className="h-full"
        />
      </div>
      <div className="p-5">
        <h5 className="text-lg/[1.2] font-medium mb-2 mt-0">
          {/* Title Blog */}
          <Link href="#" className="text-[#645f88]">
            {title}
          </Link>
        </h5>

        {/* Description Blog */}
        <p className=" text-[13px]/[1.5]">
          {posted}
          <Link href="#" className="text-[#6C55F9]">
            {" "}
            {time}
          </Link>
        </p>
      </div>
    </li>
  );
}

const Blog = () => {
  return (
    <section className="text-[#898798]">
      <div className="container">
        <div className="py-[80px]">
          <div className="text-center font-medium">
            <p className="uppercase tracking-[3px] mb-2">Our Blog</p>

            <h2 className="text-[#645f88] text-[2rem]/[1.2] mt-0">
              Read Latest News
            </h2>

            <div className="mt-4 mb-8 w-8 h-[3px] rounded-[40px] bg-[#6c55f9] mx-auto" />
          </div>

          {/* Loop Card */}
          <div className="flex flex-wrap mt-5 justify-center items-center">
            <ul className="py-3 flex flex-col gap-8 lg:flex-row lg:gap-20">
              {blogItem.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
            </ul>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <Link
              href="#"
              className="text-center mt-4 py-2 px-6 bg-[#6c55f9] text-[#fff] border text-base/[1.5] rounded"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
