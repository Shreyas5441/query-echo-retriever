
import React, { useState, useEffect } from "react";
import { Document, documentCollection } from "@/utils/documentData";
import { VectorSpaceModel, SearchResult } from "@/utils/vectorSpace";
import SearchBar from "@/components/SearchBar";
import DocumentCard from "@/components/DocumentCard";
import ThemeSelector from "@/components/ThemeSelector";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [vectorSpaceModel, setVectorSpaceModel] = useState<VectorSpaceModel | null>(null);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]);
  const [themes, setThemes] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Initialize vector space model with documents
    const vsm = new VectorSpaceModel(documentCollection);
    setVectorSpaceModel(vsm);
    setThemes(vsm.getThemes());
    setFilteredDocuments(documentCollection);
  }, []);

  useEffect(() => {
    if (vectorSpaceModel) {
      setFilteredDocuments(vectorSpaceModel.getDocumentsByTheme(selectedTheme));
    }
  }, [selectedTheme, vectorSpaceModel]);

  const handleSearch = (query: string) => {
    if (!vectorSpaceModel) return;

    if (query.trim() === "") {
      toast({
        title: "Empty Query",
        description: "Please enter a search term",
        variant: "destructive",
      });
      return;
    }

    try {
      const results = vectorSpaceModel.search(query, 10);
      
      // Filter results by selected theme if necessary
      const filteredResults = selectedTheme 
        ? results.filter(result => result.document.theme === selectedTheme)
        : results;

      setSearchResults(filteredResults);
      setHasSearched(true);

      if (filteredResults.length === 0) {
        toast({
          title: "No Results",
          description: `No documents found for "${query}"${selectedTheme ? ` in ${selectedTheme}` : ''}`,
        });
      } else {
        toast({
          title: "Search Complete",
          description: `Found ${filteredResults.length} results for "${query}"`,
        });
      }
    } catch (error) {
      console.error("Search error:", error);
      toast({
        title: "Search Error",
        description: "An error occurred while processing your search",
        variant: "destructive",
      });
    }
  };

  const handleThemeSelect = (theme: string | null) => {
    setSelectedTheme(theme);
    setHasSearched(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-irsystem-light to-white">
      <div className="container mx-auto py-8 px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-irsystem-primary mb-2">
            Vector Space Information Retrieval
          </h1>
          <p className="text-irsystem-secondary text-lg max-w-2xl mx-auto">
            Search through our collection of documents using TF-IDF and cosine similarity to find the most relevant results.
          </p>
        </header>

        <div className="flex flex-col items-center mb-10">
          <SearchBar onSearch={handleSearch} />
          
          <ThemeSelector 
            themes={themes} 
            selectedTheme={selectedTheme} 
            onSelectTheme={handleThemeSelect} 
          />
        </div>

        {hasSearched ? (
          <div className="results-container">
            <h2 className="text-2xl font-semibold text-irsystem-primary mb-6">
              Search Results
            </h2>
            {searchResults.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {searchResults.map((result) => (
                  <DocumentCard
                    key={result.document.id}
                    title={result.document.title}
                    content={result.document.content}
                    theme={result.document.theme}
                    similarity={result.similarity}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-irsystem-text text-xl">
                  No results found for your query.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="document-collection">
            <h2 className="text-2xl font-semibold text-irsystem-primary mb-6">
              {selectedTheme ? `${selectedTheme} Documents` : "Document Collection"}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {filteredDocuments.map((doc) => (
                <Card
                  key={doc.id}
                  className="mb-4 border border-gray-200 hover:border-irsystem-secondary transition-colors"
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold text-irsystem-primary">
                        {doc.title}
                      </CardTitle>
                      <Badge className="bg-irsystem-secondary hover:bg-irsystem-primary">
                        {doc.theme}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-irsystem-text">{doc.content}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <footer className="mt-16 pt-8 border-t border-irsystem-accent text-center text-irsystem-secondary">
          <p>Vector Space Model Information Retrieval System</p>
          <p className="text-sm mt-2">
            Implemented with TF-IDF and Cosine Similarity
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
