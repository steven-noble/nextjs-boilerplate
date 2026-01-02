"use client";

import { useUser } from "@lib/providers/authProvider";

interface PageHeadingProps {
  title?: string;
  subtitle?: string
  children?: React.ReactNode
}

export default function AccountPageHeading({ title, subtitle, children }: PageHeadingProps) {
  const { profile, loading } = useUser();

  if (loading) return <>Loading...</>;

  return (
    <>
      <div className="md:flex md:gap-4 justify-between items-center pb-4 border-b border-primary-200 mb-8">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8">
            {title ? title : `Hello ${profile ? profile.first_name + " " + profile.last_name : ""}`}
          </h1>
          {subtitle && <p className="text-sm text-gray-600">
            {subtitle}
          </p>}
        </div>

        <div className="flex flex-shrink-0 gap-4">
          {children}
        </div>
      </div>
    </>
  );
}
