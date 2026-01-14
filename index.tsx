import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Success! Meri Website Live Hai 🚀
      </h1>
      <p className="text-xl text-slate-600">
        Ab main seekh gaya hoon ki React project kaise host karte hain.
      </p>
      <div className="mt-8 p-6 bg-white rounded-2xl shadow-xl border border-blue-100">
        <p className="font-medium">Agla step: AI features add karna!</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
