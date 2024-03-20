"use client"
import { useState, useEffect } from "react";
import SnippetList, { Snippet } from "@/components/SnippetList";

export default function Snippets() {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/snippets`);
          const data = await response.json();
          setSnippets(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4 text-primary/80">All Snippets</h1>
      <SnippetList snippets={snippets} />
    </div>
  );
}
