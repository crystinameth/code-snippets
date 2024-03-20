import React, { useState } from 'react';
import axios from 'axios';

const SnippetForm = () => {
  const [username, setUsername] = useState('');
  const [codeLanguage, setCodeLanguage] = useState('');
  const [stdin, setStdin] = useState('');
  const [sourceCode, setSourceCode] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/snippets', {
        username,
        codeLanguage,
        stdin,
        sourceCode,
      });
      console.log('Snippet created:', response.data);
      // Reset form fields or show success message
    } catch (error) {
      console.error('Error creating snippet:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SnippetForm;
