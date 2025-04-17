# Finance Tracker Server 

This is the **backend** for the Finance Tracker application.  
It is built with **Node.js**, **Express**, **TypeScript**, and uses **MongoDB** for data persistence via **Mongoose**.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/lauraAlabau/finance-tracker-server.git
cd finance-tracker-server
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a .env file in the root of the project and add the following variables:
```bash
PORT=4000
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run in development mode
```bash
npm run dev
```

### 5. Build and run in production mode
```bash
npm run build
npm start
```

## Project Structure
```bash
.
├── index.ts            # Entry point
├── /src                
|     ├── /schema       # Mongoose models
|     └── /routes       # Express route handlers
├── .env                # Environment variables (not committed)
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project configuration
```
This structure is flexible and can evolve as the project grows.

## Scripts
| Script | Description |
| --- | --- |
| dev | Run app in development mode |
| build | Compile TypeScript to JS |
| start | Start compiled server |

##  Tech Stack
- Node.js + Express – Web server
- MongoDB + Mongoose – Database and schema modeling
- TypeScript – Type-safe development
- dotenv – Environment variable management
- Nodemon – Live reload during development
- ts-node – Execute TypeScript directly
