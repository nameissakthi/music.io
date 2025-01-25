"use client";
import * as React from "react";
import { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { User } from "lucide-react";
import Link from "next/link";

interface Artist {
  id?: number;
  name: string;
  profile?: string;
  popularLevel: number;
}

const Artists = () => {
  const [artists, setArtists] = useState<Array<Artist>>([]);

  const fetchArtists = () => {
      try {
        fetch("/api/artists")
          .then(res=>res.json())
          .then(res=>{
            if(res.success) setArtists(res.artists)
          })
          .catch(err=>console.log(err.message))
      } catch (error) {
        console.log(error)
      }
    }
  
    useEffect(()=>{
      fetchArtists()
    },[])

  return (
    <div className="lg:px-20 px-2">
        <div className="flex items-center flex-col mb-4">
            <div className="flex justify-between w-[90%] items-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl text-foreground font-semibold">Popular Artists</h1>
              <Link href="/artists">
                <Button className="p-0.5 text-xs md:text-base active:scale-95 transition-all ease-in-out text-white px-2" >
                  See More
                </Button>
              </Link>
            </div>
            <hr className="w-[90%] border-2 mt-2 border-green-600" />
        </div>
      <div className="md:flex items-center justify-center grid grid-cols-2 ">
      {artists.length>1? artists.filter(predicate=>predicate.popularLevel>70).slice(0, 4).map((artist, index) => (
                <div className="transition-all delay-75 ease-in-out hover:scale-105 p-1 text-center w-32 sm:w-48 px-3 md:static md:left-0 md:-translate-x-0 relative left-1/2 -translate-x-1/2" key={index}>
                  <Card className="rounded-full hover:shadow-2xl mb-2">
                    <CardContent className="flex aspect-square items-center justify-center p-0">
                      {artist.profile ? <img
                        src={artist.profile}
                        alt="profile"
                        className="rounded-full aspect-square pointer-events-none select-none"
                      /> : <User />}
                    </CardContent>
                  </Card>
                  <span className="text-xs text-foreground font-semibold hidden md:block">{artist.name}</span>
                </div>
            )): <div className="flex justify-center items-center text-base h-32 md:h-40 md:text-2xl col-span-2">
                    <p>No Popular Artists Found</p>
                </div>}
      </div>
    </div>
  );
};

export default Artists