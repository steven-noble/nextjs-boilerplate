"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@lib/providers/authProvider";
import { links } from "./data";
import RoleSwitcher from "@components/role-switcher";
import Avatar from "@components/avatar";

const normalize = (p: string) => (p === "/" ? "/" : p.replace(/\/+$/,""));

function isActiveLink(href: string, pathname: string) {
  const h = normalize(href);
  const p = normalize(pathname);

  // Never let "/" match everything
  if (h === "/") return p === "/";

  // Make Dashboard exact (don't match /account/messages)
  if (h === "/account") return p === "/account";

  // Otherwise: exact or a sub-path like /messages/123
  return p === h || p.startsWith(h + "/");
}

export default function AccountNavigation() {
  const { user, profile, loading } = useUser();

  const [showUserMenu, setShowUserMenu] = useState(false);
  const router = useRouter();

  const pathname = usePathname();

  const closeUserMenu = () => setShowUserMenu(false)

  const handleLogout = () => {
    router.push("/logout");
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>No user found</p>;

  return (
    <>
      <nav className="flex h-full min-h-0 flex-col">
        {/* Top menu avatar section */}
        <div className="flex flex-col border-b border-primary-200 p-4">
          <Link href="/" className="mb-2">
            WP Killswitch
          </Link>
        </div>

        {/* Main nav links */}
        <div className="flex flex-1 flex-col overflow-y-auto p-4">
          <nav data-slot="section" className="flex flex-col gap-0.5">
            {links.map((link) => {
              if (link.role && link.role !== profile?.active_role) return
              const active = isActiveLink(link.href, pathname);
              const isMessagesLink = link.href === '/account/messages';
              return <Link
                    key={link.id}
                    href={link.href}
                    className={`${active ? 'font-bold' : 'font-medium'} relative flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6  text-zinc-950 sm:py-2 sm:text-sm/5 hover:bg-white`}
                  >
                    {link.href === pathname && (
                      <span className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950"></span>
                    )}
                    <span className="truncate flex-1">{link.id === 0 && '\u2190 '}{link.name}</span>
                  </Link>
            })}
          </nav>
        </div>

        {profile && <div className="max-lg:hidden flex flex-col border-t border-zinc-950/5 p-4">
          <span className="relative">
            <button
              type="button"
              onClick={() => setShowUserMenu((prev) => !prev)}
              className="cursor-pointer flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 *:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5 *:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-5 sm:*:last:data-[slot=icon]:size-4 *:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6 data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950 data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950 data-current:*:data-[slot=icon]:fill-zinc-950"
            >
              <span
                className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 pointer-fine:hidden"
                aria-hidden="true"
              ></span>
              <span className="flex min-w-0 items-center gap-3">
                <Avatar profile={profile} />
                <span className="min-w-0">
                  <span className="block truncate text-sm/5 font-medium text-zinc-950">
                    {profile.first_name && profile.last_name 
                      ? `${profile.first_name} ${profile.last_name}`
                      : profile.first_name || 'User'
                    }
                  </span>
                  <span className="block truncate text-xs/5 font-normal text-zinc-500">
                    {user.email}
                  </span>
                </span>
              </span>
              <svg
                className="w-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
        </div>}
      </nav>
      {showUserMenu && (
        <div
          className="absolute right-0 bottom-20 w-full isolate rounded-xl p-1 outline outline-transparent focus:outline-hidden overflow-y-auto bg-white/75 backdrop-blur-xl shadow-lg ring-1 ring-zinc-950/10 transition"
          tabIndex={0}
        >
          <RoleSwitcher onRoleChange={closeUserMenu} />
          <div
            className="col-span-full mx-3.5 my-1 h-px border-0 bg-zinc-950/5 sm:mx-3 forced-colors:bg-[CanvasText]"
            role="separator"
          ></div>
          <Link
            className="hover:underline group rounded-lg px-3.5 py-2.5 focus:outline-hidden sm:px-3 sm:py-1.5 text-left text-base/6 text-zinc-950 sm:text-sm/6 forced-colors:text-[CanvasText] data-focus:bg-blue-500 data-focus:text-white data-disabled:opacity-50 forced-color-adjust-none forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText] forced-colors:data-focus:*:data-[slot=icon]:text-[HighlightText] col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center supports-[grid-template-columns:subgrid]:grid-cols-subgrid *:data-[slot=icon]:col-start-1 *:data-[slot=icon]:row-start-1 *:data-[slot=icon]:mr-2.5 *:data-[slot=icon]:-ml-0.5 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:mr-2 sm:*:data-[slot=icon]:size-4 *:data-[slot=icon]:text-zinc-500 data-focus:*:data-[slot=icon]:text-white *:data-[slot=avatar]:mr-2.5 *:data-[slot=avatar]:-ml-1 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:mr-2 sm:*:data-[slot=avatar]:size-5"
            onClick={closeUserMenu}
            role="menuitem"
            tabIndex={-1}
            href="/account/settings"
          >
            Account settings
          </Link>
          {!profile?.is_verified &&<Link
            className="hover:underline group rounded-lg px-3.5 py-2.5 focus:outline-hidden sm:px-3 sm:py-1.5 text-left text-base/6 text-zinc-950 sm:text-sm/6 forced-colors:text-[CanvasText] data-focus:bg-blue-500 data-focus:text-white data-disabled:opacity-50 forced-color-adjust-none forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText] forced-colors:data-focus:*:data-[slot=icon]:text-[HighlightText] col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center supports-[grid-template-columns:subgrid]:grid-cols-subgrid *:data-[slot=icon]:col-start-1 *:data-[slot=icon]:row-start-1 *:data-[slot=icon]:mr-2.5 *:data-[slot=icon]:-ml-0.5 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:mr-2 sm:*:data-[slot=icon]:size-4 *:data-[slot=icon]:text-zinc-500 data-focus:*:data-[slot=icon]:text-white *:data-[slot=avatar]:mr-2.5 *:data-[slot=avatar]:-ml-1 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:mr-2 sm:*:data-[slot=avatar]:size-5"
            onClick={closeUserMenu}
            role="menuitem"
            tabIndex={-1}
            href="/account/settings/verification"
          >
            Verification
          </Link>}
          <Link
            className="hover:underline group rounded-lg px-3.5 py-2.5 focus:outline-hidden sm:px-3 sm:py-1.5 text-left text-base/6 text-zinc-950 sm:text-sm/6 forced-colors:text-[CanvasText] data-focus:bg-blue-500 data-focus:text-white data-disabled:opacity-50 forced-color-adjust-none forced-colors:data-focus:bg-[Highlight] forced-colors:data-focus:text-[HighlightText] forced-colors:data-focus:*:data-[slot=icon]:text-[HighlightText] col-span-full grid grid-cols-[auto_1fr_1.5rem_0.5rem_auto] items-center supports-[grid-template-columns:subgrid]:grid-cols-subgrid *:data-[slot=icon]:col-start-1 *:data-[slot=icon]:row-start-1 *:data-[slot=icon]:mr-2.5 *:data-[slot=icon]:-ml-0.5 *:data-[slot=icon]:size-5 sm:*:data-[slot=icon]:mr-2 sm:*:data-[slot=icon]:size-4 *:data-[slot=icon]:text-zinc-500 data-focus:*:data-[slot=icon]:text-white *:data-[slot=avatar]:mr-2.5 *:data-[slot=avatar]:-ml-1 *:data-[slot=avatar]:size-6 sm:*:data-[slot=avatar]:mr-2 sm:*:data-[slot=avatar]:size-5"
            onClick={closeUserMenu}
            role="menuitem"
            tabIndex={-1}
            href="/feedback"
          >
            Share feedback
          </Link>
          <div
            className="col-span-full mx-3.5 my-1 h-px border-0 bg-zinc-950/5 sm:mx-3 forced-colors:bg-[CanvasText]"
            role="separator"
          ></div>
          <button
            onClick={handleLogout}
            className="block w-full px-3.5 py-2.5 text-sm hover:underline text-left"
          >
            Log out
          </button>
        </div>
      )}
    </>
  );
}
