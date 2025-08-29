import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1); // go back to background page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here (API call, validation, etc.)
    alert("Logged in successfully!");
    navigate(-1); // close modal or go back to previous page
  };

    useEffect(() => {
    // Prevent background scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      // Restore scroll when modal is closed
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
<div className="fixed inset-0 flex items-center justify-center bg-black/30  backdrop-blur-md z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
