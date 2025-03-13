import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product() {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-3 hover:bg-blue-100 rounded-md px-4 py-2 transition-all hover:-translate-y-1 duration-500 shadow-md"
    >
      <Image
        src={
          "https://utfs.io/f/451bccfa-0eeb-4888-9ff1-db304aad8040-4f471a.jpg"
        }
        alt="Image"
        width={500}
        height={500}
        className="w-16 h-16 rounded-lg"
      />
      <div className="">
        <h2 className="text-blue-700">
          Canon Pixma Ts3140 Deskjet All in one Printer
        </h2>
        <div className="flex items-center justify-between">
          <p>
            <span>Brand : HP</span>
          </p>
          <p>Stock : 32 items</p>
        </div>
      </div>
    </Link>
  );
}
