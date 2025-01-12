"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Album, Loader, Search } from "lucide-react";

interface Album {
  id?: number;
  albumname: string;
  artistname: string;
  popularlevel: number;
  email: string;
}

const page = () => {
  const [search, setSearch] = useState<string>("");
  const [searchAlbums, setSearchAlbums] = useState<Array<Album>>([]);
  const [albums, setAlbums] = useState<Array<Album>>([]);

  const fetchAlbums = async () => {
    try {
      await fetch("/api/albums")
        .then(res=>res.json())
        .then(res=>{
          if(res.success) setAlbums(res.albums)
        })
        .catch(err=>console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchAlbums()
  }, [])

  useEffect(()=>{
    console.log(albums)
  }, [albums])

  const searchAlbum = () => {
    try {
      if (search.trim() == "") {
        toast.warning("Please Enter a value", {
          autoClose: 1000,
          hideProgressBar: true,
          theme: "colored",
          position: "top-center",
        });
      } else {
        if (!albums) {
          toast.error("Something went wrong. Please reload", {
            autoClose: 1000,
            hideProgressBar: true,
            theme: "colored",
            position: "top-center",
          });
        } else {
          setSearchAlbums(
            albums.filter((album) =>
              album.albumname.toLowerCase().includes(search.toLowerCase()) || album.artistname.toLowerCase().includes(search.toLowerCase())
            )
          );
          setSearch("")
        }
      }
    } catch (error: any) {
      toast.error(
        error ? error.message : "Something went wrong. Please reload",
        {
          autoClose: 1000,
          hideProgressBar: true,
          theme: "colored",
          position: "top-center",
        }
      );
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      searchAlbum();
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-between sm:flex-row items-center mb-4 sm:mb-2">
        <h1 className="text-4xl flex items-center gap-2 mb-4">Albums <Album size={"35"} color="skyblue" /></h1>
        <div className="flex items-center h-10">
          <input
            type="text"
            className="h-full w-52 sm:w-80 px-3 bg-transparent border border-green-600 rounded-l-xl text-foreground"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e: any) => handleKeyPress(e)}
            autoFocus
          />
          <Button
            className="rounded-r-xl rounded-l-none h-full"
            onClick={searchAlbum}
          >
            <Search />
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[95%]">
          <div className="flex flex-wrap gap-y-4 justify-center">
            {searchAlbums.length == 0 ? (
              <>
                {albums.length > 1 ? (
                  albums.map((album, index) => (
                    <div
                      className="p-1 text-center w-36 sm:w-60 md:w-48 px-3 md:static md:left-0 md:-translate-x-0 hover:scale-105 transition-all ease-in-out"
                      key={index}
                    >
                      <Card className="mb-2 hover:shadow-md bg-chart-3/75 shadow-inner">
                        <CardContent className="flex aspect-square items-center justify-center text-white text-xs sm:text-base sm:font-bold p-1">
                          {album.albumname}
                        </CardContent>
                      </Card>
                      <span className="text-xs text-foreground font-semibold hidden md:block">
                        {album.artistname}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="flex justify-center items-center text-2xl h-[50vh]">
                    <Loader speed={"10"} size={50} rotate={"20"} />
                  </div>
                )}
              </>
            ) : (
              <>
                {searchAlbums ? (
                  searchAlbums.map((album, index) => (
                    <div
                      className="p-1 text-center w-36 sm:w-60 md:w-48 px-3 md:static md:left-0 md:-translate-x-0 relative left-1/2 -translate-x-1/2 hover:scale-105 transition-all ease-in-out"
                      key={index}
                    >
                      <Card className="mb-2 hover:shadow-md bg-chart-3/75 shadow-inner">
                        <CardContent className="flex aspect-square items-center justify-center text-white text-xs sm:text-base sm:font-bold p-1">
                          {album.albumname}
                        </CardContent>
                      </Card>
                      <span className="text-xs text-foreground font-semibold hidden md:block">
                        {album.artistname}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="flex justify-center items-center text-2xl">
                    <p>No Album Found</p>
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

export default page;
