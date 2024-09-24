import Button from "@/components/ui/SiteButton";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <div className="h-dvh w-full flex justify-center items-center">
        <div className="w-24">
          <Button text="Start" link="/budgets" />
        </div>
      </div>
    </main>
  );
}
