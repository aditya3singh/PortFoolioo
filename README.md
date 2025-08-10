# PortFoolioo - MERN Stack Portfolio

A dynamic portfolio website built with MongoDB, Express.js, React, and Node.js featuring GitHub project auto-fetching, multiple resume management, and contact form.

## 🚀 Features

- **Dynamic GitHub Integration**: Automatically fetches and displays your latest repositories
- **Multiple Resume Management**: Upload, categorize, and manage different resume versions
- **Contact Form**: Visitors can send messages directly through the site
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Admin Features**: Upload resumes, manage content, toggle active status

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router, Axios
- **Backend**: Node.js, Express.js, Multer
- **Database**: MongoDB with Mongoose
- **APIs**: GitHub REST API integration

## 👨‍💻 Personalized for Aditya Singh Gautam

- **Backend Web Developer & QA Engineer**
- **800+ coding problems solved**
- **Contest Rating: 1510 (GFG)**
- **Multiple resume categories** (Backend, QA, Full Stack, Internship)

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm run install-all
   ```

2. **Setup environment variables**:
   - Edit `backend/.env` with your details:
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

## ⚙️ Configuration

### GitHub Integration
1. Create a GitHub personal access token
2. Add your token and username to `backend/.env`
3. Projects will automatically sync from your repositories

### Multiple Resume System
- Upload different resume versions for different roles
- Categorize resumes (Backend Developer, QA Engineer, Full Stack, etc.)
- Toggle active/inactive status
- Add custom descriptions and names

### Email Notifications
- Configure Gmail credentials in `.env` for contact form notifications
- Uses Nodemailer for email delivery

## 📁 Project Structure

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

## 🔗 API Endpoints

- `GET /api/projects` - Fetch all projects (GitHub + custom)
- `POST /api/projects` - Add custom project
- `GET /api/resume/all` - Get all resumes
- `GET /api/resume/active` - Get active resume
- `POST /api/resume/upload` - Upload new resume
- `PATCH /api/resume/:id/toggle` - Toggle resume status
- `DELETE /api/resume/:id` - Delete resume
- `POST /api/contact` - Send contact message
- `GET /api/contact` - Get all messages (admin)

## 🎨 Customization

1. **Personal Information**: Already customized for Aditya Singh Gautam
2. **Styling**: Modify Tailwind classes or add custom CSS
3. **Content**: Edit achievements, certifications, and skills
4. **Social Links**: GitHub, LinkedIn, and email links configured

## 🚀 Deployment

### Backend
- Deploy to Heroku, Railway, or similar
- Set environment variables
- Ensure MongoDB Atlas connection

### Frontend
- Build: `npm run build`
- Deploy to Netlify, Vercel, or similar
- Update API base URL for production

## 📄 License

MIT License - feel free to use this for your own portfolio!