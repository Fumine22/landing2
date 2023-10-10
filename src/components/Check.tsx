import Link from "next/link";

const Check = () => {
  return (
    <section className="bg-check text-[#fff]">
      <div className="bg-[url('https://technext.github.io/seogram/assets/img/bg_pattern.svg')] bg-center bg-cover bg-no-repeat h-[315px] md:h-[277px]">
        <div className="container">
          <div className="text-center mx-auto py-[80px]">
            <div className="flex flex-col justify-center max-w-[610px] mx-auto">
              <h2 className="mb-4 mt-0 text-[1.55rem]/[1.2] font-medium">
                Check your Website TECH
              </h2>

              <form action="#" className="relative">
                <input
                  type="text"
                  className="h-[54px] rounded-md py-2 px-[15px] w-full text-base/[1.5] bg-[#fff] text-[#495057] border border-[#ced4da] relative"
                  placeholder="Your Website"
                />

                <Link
                  href="#"
                  className="absolute top-[6px] right-[6px] py-2 px-6 bg-[#35bb78] rounded text-base/[1.5] hover:opacity-70"
                >
                  Check Now
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Check;
