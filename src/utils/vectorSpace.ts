
import { Document } from './documentData';
import { preprocessText } from './preprocessor';

// Interface for corpus vocabulary
interface Vocabulary {
  [term: string]: number; // term -> index in vector
}

// Interface for document vectors
export interface DocumentVector {
  docId: number;
  vector: number[];
}

// Interface for search results
export interface SearchResult {
  document: Document;
  similarity: number;
}

// Class for Vector Space Model implementation
export class VectorSpaceModel {
  private documents: Document[];
  private vocabulary: Vocabulary = {};
  private documentVectors: DocumentVector[] = [];
  private idfValues: { [term: string]: number } = {};
  private vocabularySize = 0;

  constructor(documents: Document[]) {
    this.documents = documents;
    this.buildVocabulary();
    this.computeIDF();
    this.createDocumentVectors();
  }

  // Build vocabulary from all documents
  private buildVocabulary(): void {
    const termSet = new Set<string>();

    // Collect all unique terms
    this.documents.forEach(doc => {
      const tokens = preprocessText(doc.title + ' ' + doc.content);
      tokens.forEach(token => termSet.add(token));
    });

    // Assign indices to each term
    Array.from(termSet).forEach((term, index) => {
      this.vocabulary[term] = index;
    });

    this.vocabularySize = termSet.size;
  }

  // Compute Term Frequency for a document
  private computeTF(tokens: string[]): { [term: string]: number } {
    const tf: { [term: string]: number } = {};
    
    // Count occurrences of each token
    tokens.forEach(token => {
      tf[token] = (tf[token] || 0) + 1;
    });
    
    // Normalize by document length
    const docLength = tokens.length;
    Object.keys(tf).forEach(term => {
      tf[term] = tf[term] / docLength;
    });
    
    return tf;
  }

  // Compute Inverse Document Frequency for all terms
  private computeIDF(): void {
    const N = this.documents.length;
    const documentFrequency: { [term: string]: number } = {};
    
    // Count documents containing each term
    Object.keys(this.vocabulary).forEach(term => {
      documentFrequency[term] = 0;
    });

    this.documents.forEach(doc => {
      const tokens = new Set(preprocessText(doc.title + ' ' + doc.content));
      tokens.forEach(token => {
        if (token in documentFrequency) {
          documentFrequency[token]++;
        }
      });
    });
    
    // Compute IDF
    Object.keys(this.vocabulary).forEach(term => {
      // Add 1 smoothing to avoid zero division
      this.idfValues[term] = Math.log(N / (documentFrequency[term] + 1)) + 1;
    });
  }

  // Create document vectors
  private createDocumentVectors(): void {
    this.documents.forEach(doc => {
      const tokens = preprocessText(doc.title + ' ' + doc.content);
      const tf = this.computeTF(tokens);
      const vector = new Array(this.vocabularySize).fill(0);

      // Compute TF-IDF for each term in the document
      Object.keys(tf).forEach(term => {
        if (term in this.vocabulary) {
          const index = this.vocabulary[term];
          vector[index] = tf[term] * this.idfValues[term];
        }
      });

      this.documentVectors.push({
        docId: doc.id,
        vector
      });
    });
  }

  // Process a query and convert it to a vector
  public processQuery(query: string): number[] {
    const tokens = preprocessText(query);
    const tf = this.computeTF(tokens);
    const queryVector = new Array(this.vocabularySize).fill(0);

    Object.keys(tf).forEach(term => {
      if (term in this.vocabulary) {
        const index = this.vocabulary[term];
        queryVector[index] = tf[term] * (this.idfValues[term] || 0);
      }
    });

    return queryVector;
  }

  // Calculate cosine similarity between two vectors
  private cosineSimilarity(vec1: number[], vec2: number[]): number {
    let dotProduct = 0;
    let vec1Magnitude = 0;
    let vec2Magnitude = 0;

    for (let i = 0; i < vec1.length; i++) {
      dotProduct += vec1[i] * vec2[i];
      vec1Magnitude += Math.pow(vec1[i], 2);
      vec2Magnitude += Math.pow(vec2[i], 2);
    }

    vec1Magnitude = Math.sqrt(vec1Magnitude);
    vec2Magnitude = Math.sqrt(vec2Magnitude);

    if (vec1Magnitude === 0 || vec2Magnitude === 0) {
      return 0;
    }

    return dotProduct / (vec1Magnitude * vec2Magnitude);
  }

  // Search for documents similar to the query
  public search(query: string, topN: number = 5): SearchResult[] {
    const queryVector = this.processQuery(query);
    const results: SearchResult[] = [];

    this.documentVectors.forEach(docVec => {
      const similarity = this.cosineSimilarity(queryVector, docVec.vector);
      
      const document = this.documents.find(doc => doc.id === docVec.docId)!;
      
      results.push({
        document,
        similarity
      });
    });

    // Sort by similarity (descending)
    return results
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topN);
  }

  // Get documents by theme
  public getDocumentsByTheme(theme: string | null): Document[] {
    if (!theme) return this.documents;
    return this.documents.filter(doc => doc.theme === theme);
  }

  // Get all unique themes
  public getThemes(): string[] {
    const themes = new Set<string>();
    this.documents.forEach(doc => themes.add(doc.theme));
    return Array.from(themes);
  }
}
