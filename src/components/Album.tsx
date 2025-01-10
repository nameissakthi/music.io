"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Album {
  albumName: string;
  artist: string;
  popularLevel : number
}

const Album = () => {
  const [albums, setAlbums] = useState<Array<Album>>([
    {
      albumName: "En Thottu",
      artist: "S. P. Balasubrahmanyam and Swarnalatha",
      popularLevel: 80
    },
    {
      albumName: "Nooraandukku Oru Murai",
      artist: "Devi and Pandit Gopal Sharma",
      popularLevel: 70
    },
    {
      albumName: "Sindhiya Venmani",
      artist: "K. J. Yesudas and P. Susheela",
      popularLevel: 50
    },
    {
      albumName: "En Thottu",
      artist: "S. P. Balasubrahmanyam and Swarnalatha",
      popularLevel: 80
    },
    {
      albumName: "Nooraandukku Oru Murai",
      artist: "Devi and Pandit Gopal Sharma",
      popularLevel: 70
    },
    {
      albumName: "Sindhiya Venmani",
      artist: "K. J. Yesudas and P. Susheela",
      popularLevel: 50
    },
    {
      albumName: "En Thottu",
      artist: "S. P. Balasubrahmanyam and Swarnalatha",
      popularLevel: 80
    },
    {
      albumName: "Nooraandukku Oru Murai",
      artist: "Devi and Pandit Gopal Sharma",
      popularLevel: 70
    },
    {
      albumName: "Sindhiya Venmani",
      artist: "K. J. Yesudas and P. Susheela",
      popularLevel: 50
    },
  ]);

  return (
    <div className="lg:px-20 px-2">
      <div className="flex items-center flex-col mb-4">
        <h1 className="text-4xl text-foreground font-semibold">
          Popular Albums
        </h1>
        <hr className="w-[90%] border-2 mt-2 border-green-600" />
      </div>
      <div className="md:flex items-center justify-center grid grid-cols-2 ">
        {albums.length > 1 ? (
          albums
            .filter((predicate) => predicate.popularLevel > 60)
            .slice(0, 4)
            .map((album, index) => (
              <div
                className="p-1 text-center w-32 sm:w-48 px-3 md:static md:left-0 md:-translate-x-0 relative left-1/2 -translate-x-1/2 hover:scale-105 transition-all ease-in-out"
                key={index}
              >
                <Card className="mb-2 hover:shadow-md bg-chart-3/75 shadow-inner">
                  <CardContent className="flex aspect-square items-center justify-center text-white text-lg font-bold p-1">
                    {album.albumName}
                  </CardContent>
                </Card>
                <span className="text-xs text-foreground font-semibold hidden md:block">
                  {album.artist}
                </span>
              </div>
            ))
        ) : (
          <div className="flex justify-center items-center text-2xl">
            <p>No Popular Album Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Album;
