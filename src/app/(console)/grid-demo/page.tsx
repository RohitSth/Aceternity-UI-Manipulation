import BentoGridThirdDemo from "@/components/layouts/grid/bento-grid-3";

export default function Grid() {
  return (
    <div className="flex flex-col h-screen overflow-hidden ">
      <h1 className="text-3xl font-bold text-center mt-20 mb-4">Grid Demo</h1>
      <div className="relative flex-grow overflow-y-auto p-8">
        <BentoGridThirdDemo />
      </div>
    </div>
  );
}
