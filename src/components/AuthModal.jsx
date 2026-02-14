// AuthModal.jsx
import { useState } from "react";

export default function AuthModal({ type = "login", onClose }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =
      type === "login"
        ? "http://localhost:5000/login"
        : "http://localhost:5000/register";
    const body =
      type === "login"
        ? { email, password }
        : { name, lastName, email, phone, password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setMessage(data.message);
      if (res.ok && type === "login") {
        localStorage.setItem("user", JSON.stringify(data.user));
        onClose();
      }
    } catch (err) {
      setMessage("Server error");
      console.error(err);
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail }),
      });
      const data = await res.json();
      setResetMessage(data.message);
    } catch (err) {
      setResetMessage("Server error");
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 min-h-screen">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-[90%] max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 text-xl font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        {!showReset ? (
          <>
            <h2 className="text-xl font-bold mb-4">
              {type === "login" ? "Login" : "Register"}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              {type === "register" && (
                <>
                  <input
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="p-2 border rounded"
                  />
                  <input
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="p-2 border rounded"
                  />
                  <input
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="p-2 border rounded"
                  />
                </>
              )}
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 border rounded"
              />
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-2 border rounded"
              />
              <button
                type="submit"
                className="mt-2 bg-blue-500 text-white py-2 rounded"
              >
                {type === "login" ? "Login" : "Register"}
              </button>
            </form>

            {type === "login" && (
              <p
                className="mt-2 text-sm text-blue-500 cursor-pointer hover:underline"
                onClick={() => setShowReset(true)}
              >
                Forgot Password?
              </p>
            )}

            {message && <p className="mt-2 text-red-500">{message}</p>}
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4">Reset Password</h2>
            <form onSubmit={handleReset} className="flex flex-col gap-2">
              <input
                placeholder="Enter your email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                type="email"
                required
                className="p-2 border rounded"
              />
              <button
                type="submit"
                className="mt-2 bg-blue-500 text-white py-2 rounded"
              >
                Send Reset Link
              </button>
            </form>
            {resetMessage && <p className="mt-2 text-green-500">{resetMessage}</p>}
            <p
              className="mt-2 text-sm text-blue-500 cursor-pointer hover:underline"
              onClick={() => setShowReset(false)}
            >
              Back to Login
            </p>
          </>
        )}
      </div>
    </div>
  );
}
