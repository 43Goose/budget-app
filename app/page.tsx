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


// TODO:
// - Add updateBudget cookie function
// - Add functions for saving budget data
// - Add delete button for items and budgets
// - Checks for changing item and budget data
// - Suspense and skeletons
// - Draggable
// - Mobile accessible budget navigator
// - Totals info on items page
// - Home page
// - Profit
