import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";

export default function ProductDetail() {
  return (
    <div className="relative">
      <Image
        src={
          "https://utfs.io/f/451bccfa-0eeb-4888-9ff1-db304aad8040-4f471a.jpg"
        }
        alt="Image"
        width={500}
        height={500}
        className="w-full h-[300px] object-cover"
      />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl absolute top-[30%] max-w-3xl bg-gradient-to-r from-blue-950 to-blue-500 mx-auto left-[40%] -translate-x-1/2 line-clamp-2 text-white px-3 py-1 rounded-md">
        Canon Pixma Ts3140 Deskjet All in one Printer
      </h1>
      <p className="py-4 px-4">
        This Canon Pixma Ts3140 DeskJet All in one Printer is an affordable
        all-in-one Wi-Fi printer for crisp documents, vivid and borderless
        photos.\n\nEnjoy crisp text and vivid, borderless photo printing,
        straight from your Smart device, Wi-Fi camera or the cloud, with this
        affordable PIXMA Ts3140 Deskjet All in one printer. Scan and copy with
        ease, using the intuitive 3.8cm LCD display. Stokfy
      </p>
      <div className="flex py-4 items-center justify-between px-8">
        <div className="flex gap-6 items-center justify-between">
          <p>
            <span className="text-blue-700">Brand : HP</span>
          </p>
          <p>
            <span className="text-blue-700">Stock</span> : 32 items
          </p>
        </div>
        <div className="">
          <Button>
            <Bookmark className="w-4 h-4 mr-2" />
            Bookmark
          </Button>
        </div>
      </div>
    </div>
  );
}
