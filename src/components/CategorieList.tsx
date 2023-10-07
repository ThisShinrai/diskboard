import { AiOutlineArrowRight } from "react-icons/ai";
import { DiscordCategories } from "~/types/DiscordCategories";
import { Card } from "./ui/card";
import Carousel from "react-multi-carousel";
import { Heading } from "./Heading";
import { carouselBreakpoints } from "~/utils";

export const CategorieList = ({
  title,
  categories,
}: {
  title: string;
  categories: DiscordCategories[];
}) => {
  return (
    <div className="px-5">
      <Heading title={title} />
      <Carousel responsive={carouselBreakpoints}>
        {categories.map((categorie) => {
          return (
            <div
              key={categorie.name}
              className="relative mr-5 min-h-full cursor-pointer p-5"
            >
              {/* Main Card */}
              <Card
                className={`${categorie.theme.classNameString} roundex-xl before:w-50 group relative border-none p-5 shadow-lg`}
              >
                {/* Background Img */}
                <img
                  className="absolute left-0 top-0 h-full w-full !rounded-xl object-cover opacity-25"
                  src={categorie.imageUrl}
                  alt=""
                />
                <div className="relative z-10 flex h-full flex-col justify-between ">
                  {/* Name */}
                  <h4 className="text-center text-4xl font-bold text-white">
                    {categorie.name}
                  </h4>
                </div>
                {/* Background Card for Animation */}
                <div
                  className={`${categorie.theme.classNameString} absolute bottom-0 right-0 -z-10 h-1/2 w-1/2 rounded-xl opacity-0 transition-all group-hover:rotate-3 group-hover:scale-125 group-hover:opacity-100`}
                ></div>
                {/* Background Card for Animation */}
                <div
                  className={`${categorie.theme.classNameString} absolute left-0 top-0 -z-10 h-1/2 w-1/2 rounded-xl opacity-0 transition-all group-hover:rotate-3 group-hover:scale-125 group-hover:opacity-100`}
                ></div>
              </Card>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
