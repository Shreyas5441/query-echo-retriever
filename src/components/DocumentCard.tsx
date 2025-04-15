
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface DocumentCardProps {
  title: string;
  content: string;
  theme: string;
  similarity: number;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  content,
  theme,
  similarity,
}) => {
  // Convert similarity to percentage
  const similarityPercentage = Math.round(similarity * 100);
  
  return (
    <Card className="mb-4 border-2 border-irsystem-accent hover:border-irsystem-secondary transition-colors">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold text-irsystem-primary">{title}</CardTitle>
          <Badge className="bg-irsystem-secondary hover:bg-irsystem-primary">{theme}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4 text-irsystem-text">{content}</div>
        <div className="mt-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-irsystem-secondary">
              Relevance
            </span>
            <span className="text-sm font-medium text-irsystem-primary">
              {similarityPercentage}%
            </span>
          </div>
          <Progress 
            value={similarityPercentage} 
            className="h-2 bg-gray-200" 
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentCard;
