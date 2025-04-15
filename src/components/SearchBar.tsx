
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-3xl gap-2">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Enter your search query..."
          className="pl-4 pr-10 py-6 w-full bg-white border-2 border-irsystem-secondary focus:border-irsystem-primary focus:ring-2 focus:ring-irsystem-accent"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Button 
        type="submit"
        className="bg-irsystem-primary hover:bg-irsystem-secondary text-white py-6"
      >
        <Search className="mr-2 h-5 w-5" />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
