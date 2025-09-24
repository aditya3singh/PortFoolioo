const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // we will handle mongoose here

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/resume', require('./routes/resumeRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Server listen
const PORT = process.env.PORT || 5000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
