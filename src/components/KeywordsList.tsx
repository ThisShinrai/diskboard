import { Keywords } from "~/types/Keywords";
import { Badge } from "./ui/badge";
import { Heading } from "./Heading";
import { Themes } from "~/utils";

export const KeywordsList = ({ keywords }: { keywords: Keywords[] }) => {
  return (
    <div className="px-5 py-5">
      <Heading title="Beliebte Stichwörter" />
      <div className="flex flex-wrap justify-center gap-5 lg:px-20">
        {keywords.map((keyword) => {
          let keywordName = keyword.name;
          return (
            <div className="group cursor-pointer" key={keyword.name}>
              <Badge
                onClick={() => {
                  alert(keyword.name);
                }}
                onMouseEnter={() =>
                  keyword.name === "comics" ? (keywordName = "marvel") : null
                }
                onMouseLeave={() => {
                  keywordName = keyword.name;
                }}
                className={`${Themes.FromPurpleToPink.classNameString} rounded-lg border-black p-1 text-lg transition-transform group-hover:-rotate-180 group-hover:scale-125`}
              >
                <div className="h-full w-full rounded-lg bg-black px-5 py-2 transition-colors group-hover:bg-transparent">
                  {keywordName}
                </div>
              </Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
};
