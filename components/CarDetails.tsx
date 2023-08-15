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
                <Dialog.Panel className="w-full relative min-h-[90vh] shadow-xl flex flex-col text-left transform transition-all gap-6 max-w-lg rounded-2xl bg-slate-200 ">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-primary-blue rounded-full relative top-2 left-2 w-fit p-3 ">
                    <Image
                      src="/close.svg"
                      width={20}
                      height={20}
                      alt="Close"
                      title="Close"
                      className="object-contain"
                    />
                  </button>
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
