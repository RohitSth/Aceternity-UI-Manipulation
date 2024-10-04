import FloatingDockInvertedComponent from "@/components/layouts/dock/FloatingDockInverted";

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed top-5 left-5">
        <FloatingDockInvertedComponent />
      </div>
      {children}
    </>
  );
}
