"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader, Music, Search, User } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Artist {
  id?: number;
  name: string;
  profile?: string;
  popularLevel: number;
}

const ArtistsPage = () => {
  const [artists, setArtists] = useState<Array<Artist>>([]);
  const [search, setSearch] = useState<string>("");
  const [searchArtists, setSearchArtists] = useState<Array<Artist>>([]);

  const searchArtist = () => {
    try {
      if (search.trim() === "") {
        toast.warning("Please enter a value", {
          autoClose: 1000,
          hideProgressBar: true,
          theme: "colored",
          position: "top-center",
        });
      } else {
        if (!artists) {
          toast.error("Something went wrong. Please reload", {
            autoClose: 1000,
            hideProgressBar: true,
            theme: "colored",
            position: "top-center",
          });
        } else {
          setSearchArtists(
            artists.filter((artist) =>
              artist.name.toLowerCase().includes(search.toLowerCase())
            )
          );
          setSearch("");
        }
      }
    } catch (error: any) {
      toast.error(
        error?.message || "Something went wrong. Please reload",
        {
          autoClose: 1000,
          hideProgressBar: true,
          theme: "colored",
          position: "top-center",
        }
      );
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchArtist();
    }
  };

  const fetchArtists = async () => {
    try {
      const response = await fetch("/api/artists");
      const data = await response.json();
      if (data.success) setArtists(data.artists);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-between sm:flex-row items-center mb-4 sm:mb-2">
        <h1 className="text-4xl flex items-center gap-2 mb-4">
          Artists
          <Music size={35} color="yellow" />
        </h1>
        <div className="flex items-center h-10">
          <input
            type="text"
            className="h-full w-80 py-2 px-3 bg-transparent border border-green-600 rounded-l-xl text-foreground"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyPress}
            autoFocus
          />
          <Button
            className="rounded-r-xl rounded-l-none h-full"
            onClick={searchArtist}
          >
            <Search />
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[95%]">
          <div className="flex flex-wrap gap-y-4">
            {searchArtists.length === 0 ? (
              <>
                {artists && artists.length >= 1 ? (
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
                  <div className="flex justify-center w-full items-center text-2xl h-[50vh]">
                    <Loader speed={10} size={50} rotate={20} />
                  </div>
                )}
              </>
            ) : (
              <>
                {searchArtists ? (
                  searchArtists.map((artist, index) => (
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistsPage;
