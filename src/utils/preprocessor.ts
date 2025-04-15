
// Common English stopwords
export const stopwords = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'if', 'because', 'as', 'what',
  'which', 'this', 'that', 'these', 'those', 'then', 'just', 'so', 'than',
  'such', 'both', 'through', 'about', 'for', 'is', 'of', 'while', 'during',
  'to', 'from', 'in', 'on', 'at', 'by', 'with', 'about', 'against', 'between',
  'into', 'through', 'during', 'before', 'after', 'above', 'below', 'up',
  'down', 'out', 'off', 'over', 'under', 'again', 'further', 'then', 'once',
  'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both',
  'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor',
  'not', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't',
  'can', 'will', 'just', 'don', 'should', 'now', 'was', 'were', 'be', 'been', 'have', 'it', 'its'
]);

// Function to tokenize and preprocess text
export const preprocessText = (text: string): string[] => {
  // Convert to lowercase
  const lowercasedText = text.toLowerCase();

  // Tokenization (splitting by non-alphanumeric characters)
  const tokens = lowercasedText.split(/[^\w]+/).filter(token => token.length > 0);

  // Remove stopwords
  const filteredTokens = tokens.filter(token => !stopwords.has(token));

  return filteredTokens;
};
