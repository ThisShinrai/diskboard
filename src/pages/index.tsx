import { BumpBot } from "~/components/BumpBot";
import { CategorieList } from "~/components/CategorieList";
import { FeaturedServers } from "~/components/FeaturedServers";
import { Header } from "~/components/Header";
import { KeywordsList } from "~/components/KeywordsList";
import { Layout } from "~/components/Layout";
import { PremiumFeaturesList } from "~/components/PremiumFeaturesList";
import { Divider } from "~/components/util/Divider";
import { GradientFromPurpleToPink } from "~/components/util/Gradients";
import { PaperBackground } from "~/components/util/PaperBackground";
import { Themes } from "~/utils";

import yoda from "../lotti/animation_ln1x3q8y.json";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import { useToast } from "~/components/ui/use-toast";

const dummyServers = [
  {
    name: "Server #1",
    imageUrl:
      "https://img.freepik.com/psd-premium/discord-server-promo-banner-mit-symbol-im-3d-stil_402554-55.jpg?w=2000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Facilis harum quae tempore consectetur obcaecati? Quiaeaque, repellendus rem nemo maiores nobis quidem deseruntharum necessitatibus ipsam rerum natus cum blanditiis.",
    lastBump: "24.04.2001",
    clicks: 12,
    createdAt: "23.04.2001",
    boosted: true,
    theme: Themes.FromBlueToPink,
  },
  {
    name: "Server #2",
    imageUrl:
      "https://img.freepik.com/psd-premium/discord-server-promo-banner-mit-symbol-im-3d-stil_402554-55.jpg?w=2000",
    description: "Lorem Ipsum",
    lastBump: "24.04.2001",
    clicks: 12,
    createdAt: "23.04.2001",
    boosted: false,
    theme: Themes.FromOrangeToRed,
  },
  {
    name: "Server #2",
    imageUrl:
      "https://img.freepik.com/psd-premium/discord-server-promo-banner-mit-symbol-im-3d-stil_402554-55.jpg?w=2000",
    description: "Lorem Ipsum",
    lastBump: "24.04.2001",
    clicks: 12,
    createdAt: "23.04.2001",
    boosted: false,
    theme: Themes.FromPinkToRed,
  },
  {
    name: "Server #2",
    imageUrl:
      "https://img.freepik.com/psd-premium/discord-server-promo-banner-mit-symbol-im-3d-stil_402554-55.jpg?w=2000",
    description: "Lorem Ipsum",
    lastBump: "24.04.2001",
    clicks: 12,
    createdAt: "23.04.2001",
    boosted: false,
    theme: Themes.FromPurpleToPink,
  },
  {
    name: "Server #2",
    imageUrl:
      "https://img.freepik.com/psd-premium/discord-server-promo-banner-mit-symbol-im-3d-stil_402554-55.jpg?w=2000",
    description: "Lorem Ipsum",
    lastBump: "24.04.2001",
    clicks: 12,
    createdAt: "23.04.2001",
    boosted: false,
    theme: Themes.Default,
  },
];

const dummyFilters = [
  {
    name: "Filter #1",
    routeName: "filter1",
    theme: Themes.FromBlueToPink,
    imageUrl:
      "https://images.pexels.com/photos/18377390/pexels-photo-18377390/free-photo-of-stadt-strasse-gebaude-muster.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Filter #2",
    routeName: "filter2",
    theme: Themes.FromPurpleToPink,
    imageUrl:
      "https://images.pexels.com/photos/18377390/pexels-photo-18377390/free-photo-of-stadt-strasse-gebaude-muster.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Filter #3",
    routeName: "filter3",
    theme: Themes.FromOrangeToRed,
    imageUrl:
      "https://images.pexels.com/photos/18377390/pexels-photo-18377390/free-photo-of-stadt-strasse-gebaude-muster.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Filter #4",
    routeName: "filter4",
    theme: Themes.Default,
    imageUrl:
      "https://images.pexels.com/photos/18377390/pexels-photo-18377390/free-photo-of-stadt-strasse-gebaude-muster.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const dummyKewords = [
  {
    name: "gaming",
    routeName: "keyw/gaming",
  },
  {
    name: "anime",
    routeName: "keyw/anime",
  },
  {
    name: "music",
    routeName: "keyw/music",
  },
  {
    name: "programming",
    routeName: "keyw/programming",
  },
  {
    name: "movies",
    routeName: "keyw/movies",
  },
  {
    name: "art",
    routeName: "keyw/art",
  },
  {
    name: "travel",
    routeName: "keyw/travel",
  },
  {
    name: "fitness",
    routeName: "keyw/fitness",
  },
  {
    name: "food",
    routeName: "keyw/food",
  },
  {
    name: "science",
    routeName: "keyw/science",
  },
  {
    name: "technology",
    routeName: "keyw/technology",
  },
  {
    name: "photography",
    routeName: "keyw/photography",
  },
  {
    name: "books",
    routeName: "keyw/books",
  },
  {
    name: "fashion",
    routeName: "keyw/fashion",
  },
  {
    name: "sports",
    routeName: "keyw/sports",
  },
  {
    name: "pets",
    routeName: "keyw/pets",
  },
  {
    name: "comics",
    routeName: "keyw/comics",
  },
  {
    name: "education",
    routeName: "keyw/education",
  },
  {
    name: "history",
    routeName: "keyw/history",
  },
  {
    name: "politics",
    routeName: "keyw/politics",
  },
];

const dummyPremiumFeatues = [
  {
    name: "Unterstützer",
    features: [
      "- 300 Zeichen in der Serverbeschreibung",
      "-1x täglich bumpen",
      "- 1 Server boosten",
    ],
    theme: Themes.FromPurpleToPink,
    rotationClass: "",
    price: "5€",
  },
  {
    name: "Unterstützer +",
    features: [
      "- 300 Zeichen in der Serverbeschreibung",
      "- 3x täglich bumpen",
      "- 3 Server boosten",
      "- bump Benachrichtigung",
      "- custom Server Info Seite",
    ],
    theme: Themes.FromPurpleToBlue,
    rotationClass: "-rotate-1",
    price: "15€",
  },
  {
    name: "Investor*",
    features: [
      "- 300 Zeichen in der Serverbeschreibung",
      "- 3x täglich bumpen",
      "- 3 Server boosten",
      "- bump Benachrichtigung",
      "- custom Server Info Seite",
      "- Investor Server Banner *klick*",
      "- custom invite link",
    ],
    theme: Themes.FromOrangeToRed,
    rotationClass: "-rotate-3",
    price: "30€",
  },
];

export default function Home() {
  const [showYoda, setShowYoda] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Launch Rabatt!",
      description:
        "Mit dem Code %neuhier% erhältst du 10% Rabatt auf alle Packete!",
    });
  }, []);

  return (
    <Layout showTitle={false}>
      {/* HEADER */}
      <section id="header">
        <PaperBackground classes="py-10 px-5">
          <Header
            title="Diskboard"
            subTitle="Finde neue Discord Server"
            headerStyles={{
              titleTextColor: "text-white",
              titleFontSize: "text-7xl",
              subTitleTextColor: "text-white",
              subTitleFontSize: "text-8xl",
              subTitleBackgroundColor: GradientFromPurpleToPink + " w-fit",
              subTitleFontWeight: "font-bold",
            }}
          />
        </PaperBackground>
      </section>
      {/* Featured Servers */}
      <section className="pb-7" id="featured servers">
        <FeaturedServers
          autoPlay={true}
          infinity={true}
          featuredServers={dummyServers}
          title="Vorgestellte Server"
        />
      </section>
      {/* New Servers */}
      <section id="new servers" className="pb-7">
        <FeaturedServers featuredServers={dummyServers} title="Neue Server" />
      </section>
      {/* Discord Bump Bot */}
      <section className="mb-7" id="bumpbot">
        <PaperBackground classes="py-10">
          <BumpBot />
        </PaperBackground>
      </section>
      {/* Divider */}
      <div className="relative pb-7">
        <div
          draggable={false}
          className={`${Themes.FromPinkToPurple.classNameString} h-5 w-full`}
        >
          <Link
            target="_blank"
            href="https://lottiefiles.com/animations/baby-yoda-sticker-4-MwYFr95yqA"
          >
            <Lottie
              animationData={yoda}
              loop={true}
              className={`${
                showYoda ? "visible" : "invisible"
              } absolute bottom-0`}
            />
          </Link>
        </div>
        <div>
          <span className="text-transparent" onClick={() => setShowYoda(true)}>
            yoda
          </span>
        </div>
      </div>
      {/* Filter */}
      <section className="pb-7" id="featured categories">
        <CategorieList title="Suche nach Kategorie" categories={dummyFilters} />
      </section>
      {/* Stichworte */}
      <section className="pb-5" id="keywords">
        <KeywordsList keywords={dummyKewords} />
      </section>
      {/* Premium */}
      <PaperBackground>
        <section className="pb-7" id="premium_features">
          <PremiumFeaturesList premiumFeatures={dummyPremiumFeatues} />
        </section>
      </PaperBackground>

      {/* Divider */}
      <Divider />
    </Layout>
  );
}
