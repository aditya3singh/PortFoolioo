# MERN Stack Portfolio

A dynamic portfolio website built with MongoDB, Express.js, React, and Node.js featuring GitHub project auto-fetching, resume upload, and contact form.

## Features

- **Dynamic GitHub Integration**: Automatically fetches and displays your latest repositories
- **Resume Management**: Upload and download resume functionality
- **Contact Form**: Visitors can send messages directly through the site
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Admin Features**: Upload resumes and manage content

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router, Axios
- **Backend**: Node.js, Express.js, Multer
- **Database**: MongoDB with Mongoose
- **APIs**: GitHub REST API integration

## Quick Start

1. **Install dependencies**:
   ```bash
   npm run install-all
   ```

2. **Setup environment variables**:
   - Copy `backend/.env` and fill in your details:
     - MongoDB connection string
     - GitHub personal access token
     - GitHub username
     - Email credentials (optional)

3. **Start development servers**:
   ```bash
   npm run dev
   ```

4. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Configuration

### GitHub Integration
1. Create a GitHub personal access token
2. Add your token and username to `backend/.env`
3. Projects will automatically sync from your repositories

### Resume Upload
- Access the admin upload section on the Resume page
- Only PDF files are accepted (5MB limit)
- Files are stored in `backend/uploads/`

### Email Notifications
- Configure Gmail credentials in `.env` for contact form notifications
- Uses Nodemailer for email delivery

## Project Structure

```
portfolio-mern/
├── backend/                 # Node.js API server
│   ├── config/             # Database configuration
│   ├── controllers/        # Route handlers
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── utils/             # GitHub API integration
│   └── uploads/           # Resume storage
├── frontend/              # React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Route pages
│   │   ├── api/           # API service functions
│   │   └── styles/        # Tailwind CSS
└── package.json           # Root scripts
```

## API Endpoints

- `GET /api/projects` - Fetch all projects (GitHub + custom)
- `POST /api/projects` - Add custom project
- `GET /api/resume/active` - Get current resume
- `POST /api/resume/upload` - Upload new resume
- `POST /api/contact` - Send contact message
- `GET /api/contact` - Get all messages (admin)

## Customization

1. **Personal Information**: Update placeholders in components with your details
2. **Styling**: Modify Tailwind classes or add custom CSS
3. **Content**: Edit the About section and skills in Home.jsx
4. **Social Links**: Update GitHub, LinkedIn, and email links

## Deployment

### Backend
- Deploy to Heroku, Railway, or similar
- Set environment variables
- Ensure MongoDB Atlas connection

### Frontend
- Build: `npm run build`
- Deploy to Netlify, Vercel, or similar
- Update API base URL for production

## License

MIT License - feel free to use this for your own portfolio!