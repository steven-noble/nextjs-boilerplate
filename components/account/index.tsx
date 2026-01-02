import AccountNavigation from "@components/layouts/account/navigation";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative isolate flex min-h-screen h-full w-full bg-white max-lg:flex-col lg:bg-zinc-100">
      <div className="lg:fixed lg:inset-y-0 lg:left-0 lg:w-64">
        <AccountNavigation />
      </div>
      <main className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64">
        <div className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-xs lg:ring-1 lg:ring-zinc-950/5">
          {children}
        </div>
      </main>
    </div>
  );
}
