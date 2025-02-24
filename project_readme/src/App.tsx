import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-8">
      <div className="max-w-4xl mx-auto relative">
        {/* Profile Image in Top Right */}
        <div className="absolute top-0 right-0">
          <img 
            src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=300&h=300&fit=crop" 
            alt="Profile" 
            className="w-32 h-32 rounded-full border-4 border-[#30363d]"
          />
        </div>

        {/* Main Content */}
        <div className="pr-40">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
            Hi there <span className="wave">👋</span>
          </h1>

          <h2 className="text-3xl font-bold mb-6 text-[#58a6ff]">
            I'm Atul Deshmukh
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            I'm a software engineer with expertise in backend development...
          </p>
        </div>
      </div>

      {/* CSS for wave animation */}
      <style>{`
        .wave {
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        
        @keyframes wave {
          0% { transform: rotate( 0.0deg) }
          10% { transform: rotate(14.0deg) }
          20% { transform: rotate(-8.0deg) }
          30% { transform: rotate(14.0deg) }
          40% { transform: rotate(-4.0deg) }
          50% { transform: rotate(10.0deg) }
          60% { transform: rotate( 0.0deg) }
          100% { transform: rotate( 0.0deg) }
        }
      `}</style>
    </div>
  );
}

export default App;