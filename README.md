# LingPrep

[LingPrep](https://ling-prep.vercel.app/) is a sophisticated, AI-enhanced language learning platform designed to help students master English vocabulary and reading comprehension. The application offers a structured path from A1 (Beginner) to C1 (Advanced) levels, combining interactive quizzes with deep reading exercises.

## 🚀 Key Features

- **Progressive Learning Path**: Units and levels organized by proficiency (A1, A2, B1, B2, C1).
- **Interactive Quizzes**: Focused vocabulary exercises with immediate feedback and scoring.
- **AI-Enhanced Reading**: Long-form analytical texts (120-600 words) generated via specialized AI skills, featuring complex grammar structures and comprehension questions.
- **Dynamic Dashboard**: A premium UI featuring a Hero CTA, user statistics, and a clear overview of progress.
- **Real-time Persistence**: User progress, scores, and unit data are managed via Firebase Firestore and Redux Toolkit.
- **Level Locking**: Advanced levels are unlocked as users complete the foundational requirements.

## 🛠 Tech Stack

- **Frontend**: React (Vite)
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS & Framer Motion (Animations)
- **Icons**: Lucide React
- **Database**: Firebase Firestore
- **Deployment**: [Configure as needed]

## 📋 Prerequisites

- **Node.js**: 18.x or higher
- **npm** or **yarn**
- **Firebase Account**: A configured Firebase project with Firestore enabled.

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MustafaYavas/LingPrep.git
cd LingPrep
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add your Firebase configurations:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Data Generation & Upload

LingPrep uses mock data generated via AI scripts. To populate your Firestore:

```bash
# Generate JSON mock files
node scripts/generateReadingMocks.js

# Upload data to Firestore
node scripts/uploadReadingData.js
```

### 5. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## 🏗 Architecture

```
LingPrep/
├── .agent/skills/       # AI Skill definitions for content generation
├── scripts/             # Data generation and upload utilities
├── src/
│   ├── app/             # Main App entry and routing
│   ├── components/      # Reusable UI components (FeatureCard, UnitSection, etc.)
│   ├── features/        # Feature-based logic (reading, progress)
│   │   ├── progress/    # State management for scores and completed units
│   │   └── reading/     # Firestore services and thunks for reading content
│   ├── pages/           # High-level page components (HomePage, ReadingPage, etc.)
│   ├── store/           # Redux store configuration and hooks
│   ├── utils/           # Utility functions and mock data types
│   └── main.tsx         # Entry point
└── ...
```

## 🧠 AI Integration

LingPrep leverages specialized AI skills to produce level-appropriate content:

- **A1/A2**: Basic narrative and descriptive texts.
- **B1**: 320-350 word texts focusing on Passive Voice and Relative Clauses.
- **B2**: 420-450 word analytical texts focusing on Mixed Conditionals and Modal Deduction.
- **C1**: 550-600 word academic texts focusing on Cleft Sentences, Inversion, and Subjunctive.

## ✅ Available Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Compiles the application for production.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm run preview`: Previews the production build locally.

---

_Happy Learning with LingPrep!_
