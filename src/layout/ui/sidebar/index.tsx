"use client";

import home2Line from "assets/icons/home-2-line.svg";
import arrowRightSLine from "assets/icons/arrow-right-s-line.svg";
import menuFill from "assets/icons/menu-fill.svg";
import logo from "assets/icons/logo.svg";
import Image from "next/image";
import { Avatar, SidebarButton } from "layout/ui";
import type { Category } from "../../../../types";
import { API_BASE_URL, API_ENDPOINTS } from "../../../../lib/config";
import { useEffect, useState } from "react";

export const Sidebar = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose?: () => void;
}) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetched = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.CATEGORIES}`,
      ).then((res) => res.json());
      setCategories(fetched);
    };

    fetchCategories();
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 bg-grayscale-950 opacity-20 z-30 lg:hidden ${open ? "block" : "hidden"}`}
        onClick={onClose}
      />

      <div className={`${open ? "hidden md:w-13.75 lg:hidden" : "hidden"}`} />

      <nav
        className={`h-full ${open ? "fixed left-0 top-0 z-40 bg-white w-50" : "hidden md:block w-13.75 lg:w-20"} lg:static`}
      >
        {open && (
          <div className="flex gap-lg items-center lg:hidden mx-sm my-xs md:mx-lg md:my-md h-12.5">
            <button onClick={onClose} className="cursor-pointer">
              <Avatar img={menuFill} size="xs" bg={false} />
            </button>
            <Image src={logo} alt="Logo" />
          </div>
        )}

        <SidebarButton
          href="/"
          img1={home2Line}
          open={open}
          bg={false}
          rounded={false}
        >
          Início
        </SidebarButton>

        {open && (
          <>
            <div className="absolute flex-1 bg-grayscale-950 opacity-20 lg:hidden"></div>

            <hr className="absolute lg:block border-brand-indigo-500" />
            <SidebarButton
              href="/categories"
              img2={arrowRightSLine}
              open={open}
              bg={false}
              rounded={false}
            >
              Categorias
            </SidebarButton>

            {categories.map((category: Category) => (
              <SidebarButton
                href={`/categories/${category.id}`}
                img1={category.icon}
                open={open}
                key={category.id}
              >
                {category.name}
              </SidebarButton>
            ))}
          </>
        )}
      </nav>
    </>
  );
};
