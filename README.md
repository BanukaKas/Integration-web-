# Gamage Recruiters Integration

A full-stack web application for job recruitment and application management.

## Features

- User authentication and authorization
- Job posting and management
- Job application submission and tracking
- Interactive chatbot for company information
- File upload functionality
- Database integration with MySQL

## Tech Stack

- Frontend: React.js
- Backend: Node.js with Express
- Database: MySQL
- Authentication: JWT
- File Upload: Multer
- AI Integration: Hugging Face API

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/yourusername/gamage_recruiters_integration.git
cd gamage_recruiters_integration
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables
- Create `.env` file in backend directory
- Create `.env` file in frontend directory
- Add necessary environment variables as per the example files

4. Start the application
```bash
# Start backend server
cd backend
npm start

# Start frontend application
cd frontend
npm start
```

## Environment Variables

### Backend
- PORT
- DB_HOST
- DB_USER
- DB_PASSWORD
- DB_NAME
- JWT_SECRET
- HUGGING_FACE_ACCESS_TOKEN_KEY

### Frontend
- REACT_APP_API_URL

## API Endpoints

- `/api/users` - User management
- `/api/jobs` - Job posting and retrieval
- `/api/apply` - Job application handling
- `/api/chat` - Chatbot integration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 