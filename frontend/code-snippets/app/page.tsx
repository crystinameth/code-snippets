import SnippetForm from "@/components/Form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="items-right">
        <Link href="/snippets">
          <Button>View All Snippets</Button>
        </Link>
      </div>

      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">Code Snippets App</h1>
        <SnippetForm />
      </div>
    </div>
  );
}
