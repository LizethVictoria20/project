import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './Home.css';
import Cylinder from '../../assets/cylinder.svg';
import HalfTorus from '../../assets/halftorus.svg';


const navigation = [
  { name: 'Sobre Nosotros', href: '#' },
  { name: 'Servicios', href: '#' },
  { name: 'Planes', href: '#' },
  { name: 'Contáctanos', href: '#' },
]

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  return (
    <div className="container-header">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center p-6 lg:px-8 md:justify-end lg:justify-center">

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="button-little_menu -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="sm:pt-56 sm:pb-44 m-auto">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="relative">
            <img src={HalfTorus} alt="" className="absolute bottom-[-9rem] top-torus" />
          </div>
          <div className="text-center">
            <h1 className="font-bold tracking-tight text-gray-900 title-header relative z-10">
              Soluciones y Eficiencia
            </h1>
            <div className="relative">
              <img src={Cylinder} alt="" className="absolute left-[72rem] bottom-[3rem]" />
            </div>
            <p className="mt-6 leading-8 text-gray-600 w-[32rem] m-auto text-2xl">
            Brindamos soluciones tecnológicas y sistemas para llevar al máximo la eficiencia en tu empresa.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-black px-3.5 py-2.5 text-sm text-white shadow-sm hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contáctanos
              </a>
              <a href="#" className="text-sm leading-6 text-gray-900">
                Sobre Nosotros <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={HalfTorus} alt="" className="absolute left-[60rem] bottom-[-9rem]" />
      </div>
    </div>
  )
}

export default Home;
