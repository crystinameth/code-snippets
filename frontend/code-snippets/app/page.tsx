import SnippetForm from "@/components/Form";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-bold my-4">Code Snippets App</h1>
          <Button asChild variant="secondary">
            <Link href="/snippets">
              <Plus className="mr-2 h-4 w-4" />
              View All Snippets
            </Link>
          </Button>
        </div>
        <SnippetForm />
      </div>
    </div>
  );
}
