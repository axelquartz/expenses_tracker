const express = require('express');
const cors = require('cors'); // Import the cors package
const { OpenAI } = require('openai');
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: 'sk-5cc5169a3a7d4115affb67f599b4b440' // Replace with your OpenAI API key
});

// Define a POST endpoint
app.post('/api/recommendations', async (req, res) => {
    try {
        // Send the request data to OpenAI
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: JSON.stringify(req.body) }
            ]
        });

        // Send the OpenAI response back to the frontend
        res.json(completion.choices[0].message.content);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});