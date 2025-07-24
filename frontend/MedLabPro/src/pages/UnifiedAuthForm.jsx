import { useState } from "react";

// 🧠 Config object for login and sign-up modes
const FORM_MODES = {
  login: {
    title: "Welcome Back ✨",
    buttonLabel: "Log In",
    fields: [
      { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
      { name: "password", label: "Password", type: "password", placeholder: "••••••••" }
    ],
    togglePrompt: "New here?",
    toggleLabel: "Sign Up"
  },
  signup: {
    title: "Create Account 🚀",
    buttonLabel: "Sign Up",
    fields: [
      { name: "name", label: "Full Name", type: "text", placeholder: "Jane Doe" },
      { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
      { name: "password", label: "Password", type: "password", placeholder: "Create a password" }
    ],
    togglePrompt: "Already have an account?",
    toggleLabel: "Log In"
  }
};

export default function UnifiedAuthForm() {
  const [mode, setMode] = useState("login");
  const config = FORM_MODES[mode];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Auth0 or context-based session logic to be added here
    console.log(`[${config.buttonLabel}] submit triggered`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-700 to-indigo-800 p-6">
      <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl shadow-2xl p-10 w-full max-w-md transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/40">
        <h2 className="text-white text-3xl font-bold text-center mb-6 tracking-wide">
          {config.title}
        </h2>

        <form className="space-y-6 text-white" onSubmit={handleSubmit}>
          {config.fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-semibold mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-2 mt-4 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 font-semibold text-white transition-all duration-300"
          >
            {config.buttonLabel}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-white/70">
          {config.togglePrompt}{" "}
          <button
            type="button"
            className="underline hover:text-white focus:outline-none transition duration-200"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
          >
            {config.toggleLabel}
          </button>
        </p>
      </div>
    </div>
  );
}
