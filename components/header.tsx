import { Bookmark, Pencil, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <div className="p-8 flex items-center justify-between">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={900}
          height={300}
          className="w-56"
        />
      </Link>

      {/* Search */}
      <form className="flex-1 px-8">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 ring-0 border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 border-0 dark:focus:border-blue-500 focus:border-0 focus:ring-0 shadow-md"
            placeholder="Search products..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-0 bottom-0.25 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-8 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full flex items-center space-x-3"
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </button>
        </div>
      </form>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Button variant={"ghost"}>
          <Pencil />
          Add Product
        </Button>
        <Button variant={"ghost"}>
          <Bookmark />
          Bookmarks
        </Button>
      </div>
    </div>
  );
}
