"use client";
import React from "react";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { CustomFilterProps } from "@/types";
import { useState } from "react";
function CustomFilter({ title, options }: CustomFilterProps) {
  const [selected, setSelected] = useState("");
  return (
    <div className="fit">
      <Listbox value={selected} onChange={(e) => setSelected(e)}>
        <Listbox.Button>
          <span>{title}</span>
        </Listbox.Button>
      </Listbox>
    </div>
  );
}

export default CustomFilter;
