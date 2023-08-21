"use client";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { CustomFilterProps, OptionProps } from "@/types";
import { useState } from "react";

function CustomFilter({ title, options, setFilter }: CustomFilterProps) {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          setFilter(selected.value);
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
