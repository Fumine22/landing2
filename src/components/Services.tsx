import { Building2, LucideIcon } from "lucide-react";

interface Service {
  id: number;
  icon: LucideIcon;
  name: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: Building2,
    name: "OnSite TECH",
    description:
      "We analyse your website's structure, internal architecture & other key",
  },
  {
    id: 2,
    icon: Building2,
    name: "OnSite TECH",
    description:
      "We analyse your website's structure, internal architecture & other key",
  },
  {
    id: 3,
    icon: Building2,
    name: "OnSite TECH",
    description:
      "We analyse your website's structure, internal architecture & other key",
  },
  {
    id: 4,
    icon: Building2,
    name: "OnSite TECH",
    description:
      "We analyse your website's structure, internal architecture & other key",
  },
  {
    id: 5,
    icon: Building2,
    name: "OnSite TECH",
    description:
      "We analyse your website's structure, internal architecture & other key",
  },
  {
    id: 6,
    icon: Building2,
    name: "OnSite TECH",
    description:
      "We analyse your website's structure, internal architecture & other key",
  },
  {
    id: 7,
    icon: Building2,
    name: "OnSite TECH",
    description:
      "We analyse your website's structure, internal architecture & other key",
  },
  {
    id: 8,
    icon: Building2,
    name: "OnSite TECH",
    description:
      "We analyse your website's structure, internal architecture & other key",
  },
];

function ServiceCard({ icon: Icon, name, description }: Service) {
  return (
    <li className="py-3 px-[15px] w-full text-center mx-auto">
      <div className="w-[60px] h-[60px] rounded-full bg-[#fff] text-2xl/[60px] shadow-service mb-3 text-[#6C55F9] text-center flex items-center justify-center mx-auto">
        <Icon />
      </div>

      <h5 className="mt-0 mb-2 text-[#2D2B3A] text-xl/[1.2]">{name}</h5>

      <p className="text-[13px] mt-0 mb-4">{description}</p>
    </li>
  );
}

const Services = () => {
  return (
    <section className="text-[#898798] bg-[#F6F5FC]">
      <div className="container">
        <div className="py-[80px]">
          <div className="mx-auto text-center text-base/[1.5]">
            <p className="uppercase tracking-[3px] mb-2 font-medium">
              our services
            </p>

            <h2 className="text-[#645f88] text-[2rem]/[1.2] mb-2">
              How TECH Team Can Help
            </h2>

            <div className="mt-4 mb-8 w-8 h-[3px] rounded-[40px] bg-[#6c55f9] mx-auto" />
          </div>

          <ul className="flex flex-wrap md:grid md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3 xl:grid-rows-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
