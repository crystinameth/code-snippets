import { useState, useEffect } from "react";
import SnippetList from "@/components/SnippetList";
import { Snippet } from "@/components/SnippetList";

export default function Snippets() {
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  useEffect(() => {
    // Fetch entries from backend API (GET request) using fetch or axios
    // Update entries state with the fetched data
    const fetchData = async () => {
        try {
          const response = await fetch('/api/snippets');
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
      <h1 className="text-2xl font-bold my-4">All Snippets</h1>
      <SnippetList snippets={snippets} />
    </div>
  );
}
