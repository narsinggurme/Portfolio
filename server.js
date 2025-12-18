const express = require('express');
const path = require('path');

const app = express();

// ✅ EXACT dist path from your screenshot
const distPath = path.join(__dirname, 'dist/my-portfolio/browser');

// Serve static Angular files
app.use(express.static(distPath));

// ✅ Express 5–safe SPA fallback
app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
