import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div
      className="
      text-emerald-500 font-semibold flex flex-col 
      items-center justify-center h-screen space-y-4"
    >
      Welcome Lingo!
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="primaryOutline">Primary Outline</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}
