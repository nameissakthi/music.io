"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music, User } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { toast } from "react-toastify";

interface Artist {
  id?: number;
  name: string;
  profile?: string;
  popularLevel: number;
}

export default function page() {
  const [artists, setArtists] = useState<Array<Artist>>([
    {
      id: 1,
      name: "G V Prakash",
      profile:
        "https://in.bmscdn.com/iedb/artist/images/website/poster/large/g-v-prakash-kumar-3973-15-02-2022-01-57-26.jpg",
      popularLevel: 90,
    },
    {
      id: 2,
      name: "A R Rahman",
      profile:
        "https://songsall.com/wp-content/uploads/2024/08/Untitled-design-6.png",
      popularLevel: 90,
    },
    {
      id: 3,
      name: "SAM C S",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNELyItK42eqM0zCpPUj9dpK7lzhJOcP0YpA&s",
      popularLevel: 90,
    },
    {
      id: 4,
      name: "SAM C S",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNELyItK42eqM0zCpPUj9dpK7lzhJOcP0YpA&s",
      popularLevel: 70,
    },
    {
      id: 5,
      name: "SAM C S",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNELyItK42eqM0zCpPUj9dpK7lzhJOcP0YpA&s",
      popularLevel: 80,
    },
  ]);
  const [search, setSearch] = useState<string>("")

  const searchArtist = () => {
    try {
      if(search.trim()==""){
        toast.warning("Please Enter a value", { 
          autoClose: 1000,
          hideProgressBar: true,
          theme: "colored",
          position: "top-center"
         })
      }else{
        if(!artists){
          toast.error("Something went wrong. Please reload", {
            autoClose: 1000,
            hideProgressBar: true,
            theme: "colored",
            position: "top-center"
          })
        }else{
          setArtists(artists.filter(artist=>artist.name.toLowerCase().includes(search.toLowerCase())))
          setSearch("")
        }
      }
    } catch (error:any) {
      toast.error(error?error.message:"Something went wrong. Please reload", {
        autoClose: 1000,
        hideProgressBar: true,
        theme: "colored",
        position: "top-center"
      })
    }
  }


  return (
    <div>
      <div className="flex flex-col justify-between sm:flex-row items-center mb-4 sm:mb-2">
        <h1 className="text-4xl flex items-center gap-2 mb-4">
          Artists
          <Music size={"35"} color="yellow" />
        </h1>
        <div className="flex items-center h-10">
          <input
            type="text"
            className="h-full w-80 py-2 px-3 bg-transparent border border-green-600 rounded-l-xl text-foreground"
            placeholder="Search..."
            value={search}
            onChange={e=>setSearch(e.target.value)}
          />
          <Button className="rounded-r-xl rounded-l-none h-full" onClick={searchArtist}>Search</Button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[95%]">
          <div className="flex flex-wrap gap-y-4">
            {artists && artists.length > 1 ? (
              artists.map((artist, index) => (
                <div
                  className="transition-all delay-75 ease-in-out hover:scale-105 p-1 text-center w-32 sm:w-48 px-3 md:static md:left-0 md:-translate-x-0 relative left-1/2 -translate-x-1/2"
                  key={index}
                >
                  <Card className="rounded-full hover:shadow-2xl mb-2">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      {artist.profile ? (
                        <img
                          src={artist.profile}
                          alt="profile"
                          className="rounded-full aspect-square pointer-events-none select-none"
                        />
                      ) : (
                        <User />
                      )}
                    </CardContent>
                  </Card>
                  <span className="text-xs text-foreground font-semibold hidden md:block">
                    {artist.name}
                  </span>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center text-2xl w-full h-[50vh]">
                <p className="text-center">No Artists Found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
