import Sidebar from "@/components/layouts/sidebar/Sidebar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <div className="flex flex-row w-screen h-full">
        <Sidebar />
        <div className="w-full overflow-auto flex-grow">{children}</div>
      </div>
    </div>
  );
}
