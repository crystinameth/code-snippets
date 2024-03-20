export interface Snippet {
    id: number;
    username: string;
    codeLanguage: string;
    stdin: string;
    sourceCode: string;
    timestamp: string;
}

interface SnippetListProps {
    snippets: Snippet[];
}

const SnippetList = ({ snippets }: SnippetListProps) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Code Language</th>
            <th>Standard Input</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {snippets.map((snippet) => (
            <tr key={snippet.id}>
              <td>{snippet.username}</td>
              <td>{snippet.codeLanguage}</td>
              <td>{snippet.stdin}</td>
              <td>{new Date(snippet.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default SnippetList;
  