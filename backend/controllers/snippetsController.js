import Snippet from '../models/Snippet.js';

const createSnippet = async (req, res) => {
  try {
    const { username, codeLanguage, stdin, sourceCode } = req.body;
    const newSnippet = await Snippet.create({
      username,
      codeLanguage,
      stdin,
      sourceCode,
    });
    res.status(201).json(newSnippet);
  } catch (error) {
    console.error("Error creating snippet:", error);
    res.status(500).json({ error: "Error creating snippet" });
  }
};

const getAllSnippets = async (req, res) => {
  try {
    const snippets = await Snippet.findAll();
    res.json(snippets);
  } catch (error) {
    console.error("Error fetching snippets:", error);
    res.status(500).json({ error: "Error fetching snippets" });
  }
};

export { createSnippet, getAllSnippets };
