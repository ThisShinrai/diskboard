import { Themes, ThemesArray } from "~/utils";
import { GradientButton } from "./GradientButton";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

import { HiMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { HiPlus } from "react-icons/hi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { Session } from "next-auth";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";

import catAnimation from "../lotti/animation_ln1w07uh.json";
import Lottie from "lottie-react";
import { useToast } from "./ui/use-toast";

export const Navigation = ({ showTitle }: { showTitle: boolean }) => {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  if (sessionStatus === "loading") return null;

  console.log(sessionStatus);

  if (!session?.user)
    return (
      <div className="relative">
        <div className="fixed z-50 flex w-full justify-between p-10">
          <div className="text-white">
            {showTitle ? (
              <span className="text-4xl font-bold">Diskboard</span>
            ) : null}
          </div>
          <div className="z-50">
            <Sheet>
              <SheetTrigger>
                <HiMenuAlt1
                  className="transition-transform hover:rotate-12 hover:scale-125"
                  color="white"
                  size={30}
                />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetDescription>
                    <div className="mt-24 flex h-full flex-col justify-between">
                      <div
                        className={`${Themes.FromPurpleToPink.classNameString} mb-10 bg-clip-text text-center text-2xl font-bold`}
                      >
                        <span className="text-transparent">Diskboard</span>
                      </div>

                      <div className="mx-5 text-center lg:mx-0">
                        <GradientButton
                          classes="w-full lg:w-fit text-center mb-14"
                          theme={Themes.FromPurpleToPink}
                          onClick={() => signIn("discord")}
                        >
                          Anmelden
                        </GradientButton>
                      </div>

                      <div className="flex flex-col items-center justify-center gap-10">
                        <Link href="" className="text-xl">
                          Startseite
                        </Link>
                        <Link href="" className="text-xl">
                          Entdecken
                        </Link>
                        <Link href="" className="text-xl">
                          Partner
                        </Link>
                      </div>

                      <span className="pt-20 text-center">
                        &copy; 2023 by appdeliverd
                      </span>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    );

  return <SessionNavbar showTitle={showTitle} session={session} />;
};

const SessionNavbar = ({
  showTitle,
  session,
}: {
  showTitle: boolean;
  session: Session;
}) => {
  const router = useRouter();
  const { data } = api.discordapi.getOwnedGuilds.useQuery({
    userId: session.user.id,
  });

  const { toast } = useToast();

  const [server, setServer] = useState();
  const [boost, setBoost] = useState(false);
  const [description, setDescription] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");

  const [showCat, setShowCat] = useState(false);
  const [catCounter, setCatCounter] = useState(0);

  return (
    <div className="relative">
      <div className="fixed z-50 flex w-full justify-between p-10">
        <div className="text-white">
          {showTitle ? (
            <Link href="/" className="text-4xl font-bold">
              Diskboard
            </Link>
          ) : null}
        </div>
        <div className="z-50 flex h-28 flex-col gap-3 overflow-hidden rounded-full p-5 backdrop-blur-xl transition-all hover:h-96">
          {router.asPath.includes("create") ? null : (
            <Dialog>
              <DialogTrigger>
                <div className="text-white">
                  <HiPlus
                    color="white"
                    size={30}
                    className={`${Themes.FromPurpleToPink.classNameString} cursor-pointer bg-clip-text transition-transform hover:-rotate-12 hover:scale-125`}
                  />
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Server hinzufügen</DialogTitle>
                  <DialogDescription>
                    <div className="mt-4 pb-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Server wählen" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none">
                          <div
                            className={`${Themes.FromPinkToPurple.classNameString} pb-1 pl-1 pr-1`}
                          >
                            <ScrollArea
                              className={`mt-10 h-20 rounded-md border bg-black`}
                            >
                              {data?.map((server) => (
                                <SelectItem value={server.id} className="">
                                  <div className="flex items-center justify-center gap-3">
                                    <Avatar>
                                      <AvatarImage
                                        src={`https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png`}
                                      />
                                      <AvatarFallback>
                                        Discord Server IMG
                                      </AvatarFallback>
                                    </Avatar>
                                    {server.name}
                                  </div>
                                </SelectItem>
                              ))}
                            </ScrollArea>
                          </div>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Textarea
                        rows={7}
                        maxLength={70}
                        placeholder="Beschreibung"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <div className="px-2 text-right">
                        {description.length} / {boost ? 300 : 70}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 px-2 py-5">
                      <Switch
                        onCheckedChange={(e) => setBoost(!boost)}
                        id="airplane-mode"
                      />
                      <Label htmlFor="airplane-mode">Server boosten</Label>
                    </div>
                    {boost ? (
                      <div className="px-2">
                        Farbverlauf
                        <div className="flex flex-wrap items-center justify-start gap-3 py-5">
                          {ThemesArray.map((theme, idx) => (
                            <div
                              onClick={() => setSelectedTheme(theme.name)}
                              className={`${
                                theme.classNameString
                              } h-4 w-10 rounded-xl border transition-transform  ${
                                selectedTheme === theme.name
                                  ? "scale-125"
                                  : null
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    <div className="my-5 text-right">
                      <GradientButton
                        onClick={() => {}}
                        theme={Themes.FromPinkToPurple}
                      >
                        veröffentlichen
                      </GradientButton>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
          <Sheet>
            <SheetTrigger>
              <HiMenuAlt1
                className="transition-transform hover:rotate-12 hover:scale-125"
                color="white"
                size={30}
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                  <div className="mt-12 flex h-full flex-col justify-between ">
                    <div className="mb-10">
                      <div
                        className={`${Themes.FromPurpleToPink.classNameString} bg-clip-text text-center text-2xl font-bold`}
                      >
                        <span className="text-transparent">Diskboard</span>
                      </div>
                      <div className="text-center">angemeldet als</div>
                      <div className="mt-5 flex items-center justify-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={session.user.image ? session.user.image : ""}
                            alt="Discord Profile Img"
                          />
                          <AvatarFallback>
                            {session.user.name?.slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-lg">{session.user.name}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-10">
                      <Link href="/" className="text-xl">
                        Startseite
                      </Link>
                      <Link href="/explore" className="text-xl">
                        Entdecken
                      </Link>
                      <Link href="/partners" className="text-xl">
                        Partner
                      </Link>
                      <Link
                        href=""
                        onClick={() => signOut()}
                        className="text-xl"
                      >
                        Abmelden
                      </Link>
                    </div>

                    <Link
                      target="_blank"
                      href="https://lottiefiles.com/de/animations/lovely-cats-pC7tXBvH8V"
                    >
                      <Lottie
                        animationData={catAnimation}
                        loop={true}
                        className={`${
                          showCat ? "visible" : "invisible"
                        } absolute bottom-0`}
                      />
                    </Link>

                    <span
                      className="pt-20 text-center"
                      onClick={() => {
                        if (catCounter === 0) {
                          setCatCounter(catCounter + 1);

                          toast({
                            title: "Der Anfag?",
                          });
                        } else if (catCounter === 1) {
                          setCatCounter(catCounter + 1);

                          toast({
                            title: "Der Ende?",
                          });
                        } else {
                          setCatCounter(catCounter + 1);

                          toast({
                            title: "Eine Katze?",
                          });

                          setShowCat(true);
                        }
                      }}
                    >
                      &copy; 2023 by appdeliverd
                    </span>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div
            className="text-md mt-4 font-bold uppercase text-white/60"
            style={{
              textOrientation: "upright",
              writingMode: "vertical-rl",
              letterSpacing: 10,
            }}
          >
            Diskboard
          </div>
        </div>
      </div>
    </div>
  );
};
