import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import { Pencil, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { useForm } from 'react-hook-form';

interface CreateProductProps {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  stock: number;
}

export default function ProductForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateProductProps>();

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
          <Button variant={'ghost'}>
            <Pencil />
            Add Product
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Create New Product
              </h3>
            </DrawerTitle>
            <DrawerDescription>
              Create a new Product in the Store
            </DrawerDescription>
          </DrawerHeader>
          <form className='p-4 md:p-5' onSubmit={handleSubmit(saveProduct)}>
            <div className='grid grid-col-12'>
              <div className='col-span-8'>
                <div className='grid gap-4 mb-4 grid-cols-2'>
                  <div className='col-span-2'>
                    <label
                      htmlFor='name'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                      placeholder='Type product name'
                    />
                  </div>
                  <div className=''>
                    <label
                      htmlFor='price'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Price
                    </label>
                    <input
                      type='number'
                      name='price'
                      id='price'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                      placeholder='$2999'
                    />
                  </div>

                  <div className=''>
                    <label
                      htmlFor='stock'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Stock Qty
                    </label>
                    <input
                      type='number'
                      name='stock'
                      id='stock'
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                      placeholder='32'
                    />
                  </div>

                  {/* Description */}
                  <div className='col-span-2'>
                    <label
                      htmlFor='description'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Product Description
                    </label>
                    <textarea
                      id='description'
                      rows={4}
                      className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='Write product description here'
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button
                type='submit'
                className='text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                <Plus className='me-1 -ms-1 w-5 h-5' />
                Add new product
              </button>
              <DrawerClose>
                <Button variant='outline'>Cancel</Button>
              </DrawerClose>
            </div>
          </form>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
