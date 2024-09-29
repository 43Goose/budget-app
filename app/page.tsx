import Button from "@/components/ui/SiteButton";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <div className="h-dvh w-full flex justify-center items-center">
        <div className="w-24">
          <Button link="/budgets" >{'Start'}</Button>
        </div>
      </div>
    </main>
  );
}


// TODO:
// - Draggable
// - Mobile accessible budget navigator
// - Totals info on items page
// - Home page
// - Profit
