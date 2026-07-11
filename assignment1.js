const express = require('express');
const router = express.Router();
const app= express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: "Welcome to my API! This is my first assignment for flyrank AI Backend Development Track." });
});
app.get('/user', (req, res) => {
    res.json({ 
        id: 1, 
        name: "Erfa Kashif", 
        role: "Backend AI Intern",
        track: "Backend AI Engineering",
        skills: ["Node.js", "Express.js", "MongoDB", "Python", "SQL", "Data Structures", "Algorithms","Operating Systems","OOPs","Python"]
    });
});
app.get('/tracks', (req, res) => {
    res.json({ 
        tracks: ["Backend AI Engineering", "Frontend Engineering", "Data Science"] 
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});