import ButtonDemo from "@/components/ui/ButtonDemo";
import ModalDemo from "@/components/ui/ModalDemo";
import DataTableDemo from "@/components/ui/DataTableDemo";

export default function ComponentsPage() {
  return (
    <main className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">UI Components Showcase</h1>
      <ButtonDemo />
      <ModalDemo />
      <DataTableDemo />
    </main>
  );
}
