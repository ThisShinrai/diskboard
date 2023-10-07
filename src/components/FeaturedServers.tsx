import { DiscordServer } from "~/types/DiscordServers";
import { Heading } from "./Heading";
import { Card } from "./ui/card";
import { carouselBreakpoints } from "~/utils";

// static carousel styles
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

// icons
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

export const FeaturedServers = ({
  title,
  featuredServers,
  infinity = true,
  autoPlay = false,
}: {
  title: string;
  featuredServers: DiscordServer[];
  autoPlay?: boolean;
}) => {
  return (
    <div className="px-5">
      <Heading title={title} />
      <Carousel
        arrows={false}
        autoPlay={autoPlay}
        infinite={infinity}
        responsive={carouselBreakpoints}
      >
        {featuredServers.map((featuredServer) => {
          {
            /* get actual theme from sevrer */
          }
          const finalDescription = featuredServer.description.substring(0, 70);
          return (
            <div
              key={featuredServer.name}
              className="relative mr-5 min-h-full rounded-xl p-5"
            >
              {/* Main Card */}
              <Card
                className={`${featuredServer.theme.classNameString} before:w-50 group relative h-56 rounded-xl border-none p-5 shadow-lg before:rounded-xl`}
              >
                {/* Background Img */}
                <img
                  className="absolute left-0 top-0 h-full w-full !rounded-xl bg-red-500 object-cover opacity-25"
                  src={featuredServer.imageUrl}
                  alt=""
                />
                <div className="relative z-10 flex h-full flex-col justify-between rounded-xl ">
                  {/* Name */}
                  <h4 className="text-4xl font-bold text-white">
                    {featuredServer.name}
                  </h4>
                  {/* Description */}
                  <p className="my-2 text-xl text-white">
                    {finalDescription} ...
                  </p>
                  {/* createdAt */}
                  <span className="text-white opacity-60">
                    {featuredServer.createdAt}
                  </span>
                </div>
                {/* Front Button */}
                <div>
                  <div
                    className={`${featuredServer.theme.classNameString} absolute -bottom-3 -right-5 cursor-pointer rounded-lg py-1 pl-2 pr-1 opacity-0 transition-all group-hover:pl-4 group-hover:opacity-100`}
                  >
                    <div
                      className="bg-p group-[1]: -translate-y-1 rounded-lg py-2 pl-5 pr-5 shadow-sm transition-all hover:-rotate-6 group-hover:-translate-y-3 group-hover:translate-x-2"
                      style={{ backgroundColor: "#5865F2" }}
                    >
                      <BsDiscord
                        color="white"
                        className="group-[1]-hover:rotate-45"
                        size={30}
                      />
                    </div>
                    <div className="mt-2 -translate-y-1 rounded-lg bg-white py-2 pl-5 pr-5 shadow-sm transition-transform hover:rotate-6 group-hover:-translate-y-3 group-hover:translate-x-2">
                      <AiOutlineArrowRight color="black" size={30} />
                    </div>
                  </div>
                </div>
                {/* Background Card for Animation */}
                <div
                  className={`${featuredServer.theme.classNameString} absolute bottom-0 right-0 -z-10 h-1/2 w-1/2 rounded-xl opacity-0 transition-all duration-150 group-hover:rotate-3 group-hover:scale-125 group-hover:opacity-100`}
                ></div>
                {/* Background Card for Animation */}
                <div
                  className={`${featuredServer.theme.classNameString} absolute left-0 top-0 -z-10 h-1/2 w-1/2 rounded-xl opacity-0 transition-all group-hover:rotate-3 group-hover:scale-125 group-hover:opacity-100`}
                ></div>
              </Card>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
