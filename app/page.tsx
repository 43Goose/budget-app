import Button from "@/components/ui/SiteButton";
import Image from "next/image";
import logo from "@/public/budget-goose-logo.png";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <div className="h-dvh w-full flex flex-col justify-center items-center">
        <Image src={logo} alt="site logo" className="w-64 h-64" />
        <h1 className="text-4xl text-emerald-500 font-bold mb-4">Budget Goose</h1>
        <div className="w-52">
          <Button link="/budgets" >{'Start Budgeting'}</Button>
        </div>
      </div>
    </main>
  );
}
