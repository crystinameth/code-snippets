"use client";
import { useState, useEffect } from "react";
import SnippetList, { Snippet } from "@/components/SnippetList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function Snippets() {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/snippets`
        );
        const data = await response.json();
        setSnippets(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto pt-10">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold my-4 text-primary/80">
          All Snippets
        </h1>
        <Button asChild variant="secondary">
          <Link href="/"><Plus className="mr-2 h-4 w-4" />Add New Snippet</Link>
        </Button>
      </div>
      <SnippetList snippets={snippets} />
    </div>
  );
}
