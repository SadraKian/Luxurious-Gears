"use client";
import { Fragment } from "react";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";
import { CarProps } from "@/types";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  const carEntries = Object.entries(car);

  return (
    <>
      <Transition as={Fragment} appear show={isOpen}>
        <Dialog as="div" onClose={closeModal} className="relative z-10">
          <Transition.Child
            as={Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed bg-black bg-opacity-25 inset-0" />
          </Transition.Child>
          <div className="fixed overflow-y-auto inset-0">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="duration-300 ease-out"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="duration-200 ease-in "
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90">
                <Dialog.Panel className="w-full relative min-h-[90vh] shadow-xl flex flex-col text-left transform transition-all p-6 gap-6 max-w-lg rounded-2xl bg-slate-200 ">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-white rounded-full absolute z-10 top-2 right-2 w-fit p-3 ">
                    <Image
                      src="/close.svg"
                      width={20}
                      height={20}
                      alt="Close"
                      title="Close"
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src="/hero.png"
                        className="object-contain"
                        fill
                        alt="Car"
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-primary-blue-100 flex-1 relative rounded-lg w-full h-24">
                        <Image
                          src="/car-placeholder.png"
                          className="object-contain"
                          fill
                          alt="Car"
                        />
                      </div>
                      <div className="bg-primary-blue-100 flex-1 relative rounded-lg w-full h-24">
                        <Image
                          src="/car-placeholder.png"
                          className="object-contain"
                          fill
                          alt="Car"
                        />
                      </div>
                      <div className="bg-primary-blue-100 flex-1 relative rounded-lg w-full h-24">
                        <Image
                          src="/car-placeholder.png"
                          className="object-contain"
                          fill
                          alt="Car"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="flex flex-wrap mt-3 gap-4  ">
                      {carEntries.map(([key, value]) => (
                        <div className="flex justify-between w-full gap-5 text-right text-gray-700">
                          <h4 className="text-gray capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
