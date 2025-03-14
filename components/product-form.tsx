"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { UploadButton } from "@/lib/uploadthing";
import { Pencil, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import TextInput from "./form-inputs/text-input";
import TextareaInput from "./form-inputs/textarea-input";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";

interface CreateProductProps {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  stock: number;
}

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductProps>();

  const [imageUrl, setImageUrl] = useState("/placeholder.png");

  async function saveProduct(data: CreateProductProps) {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant={"ghost"}>
            <Pencil />
            Add Product
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Product
              </h3>
            </DrawerTitle>
            <DrawerDescription>
              Create a new Product in the Store
            </DrawerDescription>
          </DrawerHeader>
          <form className="p-4 md:p-5" onSubmit={handleSubmit(saveProduct)}>
            <div className="grid grid-cols-12">
              <div className="md:col-span-8 col-span-full">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <TextInput
                    label="Product Name"
                    register={register}
                    name="name"
                    errors={errors}
                    type="text"
                    placeholder="Type product name"
                  />
                  <TextInput
                    label="Product Price"
                    register={register}
                    name="price"
                    errors={errors}
                    className="col-span-1"
                    type="number"
                    placeholder="Enter product price"
                  />
                  <TextInput
                    label="Product Stock"
                    register={register}
                    name="stock"
                    errors={errors}
                    className="col-span-1"
                    type="number"
                    placeholder="Type qty stock products"
                  />

                  {/* Description */}
                  <TextareaInput
                    label="Product Description"
                    register={register}
                    name="description"
                    errors={errors}
                    className="col-span-2"
                    placeholder="Write product description here"
                  />
                </div>
              </div>
              <div className="md:col-span-4 col-span-full p-8">
                <div className="shadow-md border rounded-md py-8">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={512}
                    height={512}
                    className="h-36 object-contain rounded-lg"
                  />
                  <UploadButton
                    endpoint="productImageUploader"
                    onClientUploadComplete={(res) => {
                      // Do something with the response
                      console.log("Files: ", res);
                      alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Plus className="me-1 -ms-1 w-5 h-5" />
                Add new product
              </button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </div>
          </form>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
