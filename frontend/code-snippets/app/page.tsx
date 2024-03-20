import SnippetForm from "@/components/SnippetForm";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">Code Snippets App</h1>
        <SnippetForm />
      </div>
    </main>
  );
}
