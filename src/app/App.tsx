// React import is not needed with modern JSX in Vite
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store";
import { HomePage } from "@/pages/HomePage";
import { QuizPage } from "@/pages/QuizPage";
import { BookA } from "lucide-react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="bg-white shadow relative z-10">
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <Link
                  to="/"
                  className="flex items-center space-x-3 text-primary hover:text-primary-dark transition-colors"
                >
                  <div className="bg-primary-dark/10 p-2 rounded-xl">
                    <BookA className="w-8 h-8" />
                  </div>
                  <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-800">
                    LingPrep
                  </h1>
                </Link>
                {/* <div className="text-sm font-semibold text-slate-400 bg-slate-100 px-4 py-2 rounded-full hidden sm:block">
                  A1 İngilizce Başlangıç
                </div> */}
              </div>
            </header>

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quiz/:unitId/:testId" element={<QuizPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
