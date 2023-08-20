"use client";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { CustomFilterProps, OptionProps } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils";

function CustomFilter({ title, options }: CustomFilterProps) {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathname = updateSearchParams(
      title.toLowerCase(),
      e.value.toLowerCase()
    );

    router.push(newPathname, { scroll: false });
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in state
          handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
        }}>
        <div className="relative z-10 w-fit">
          <Listbox.Button className="custom-filter__btn">
            <span>{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="Chevron up down"
              width={20}
              height={20}
              className="ml-4 object-contain"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition-all ease-in duration-500"
            leaveFrom="opacity-0"
            leaveTo="opacity-100">
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `py-2 px-4 cursor-default select-none ${
                      active ? "bg-primary text-white" : "text-gray-900"
                    }`
                  }>
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-bold" : "font-medium"
                      }`}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default CustomFilter;
