"use client";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="w-screen h-screen bg-indigo-600 relative">

      {/* DASHBOARD LINK */}
      <Link
        href="/"
        className="absolute top-4 left-4 px-4 py-2 bg-emerald-600 text-white rounded"
      >
        Dashboard
      </Link>

      {/* SIGNUP BOX */}
      <div
        className="
          bg-slate-900 text-white p-8 rounded-xl w-[400px]
          absolute left-1/2 top-1/2 
          transform -translate-x-1/2 -translate-y-1/2
        "
      >
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        {/* FORM */}
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-3 rounded bg-slate-700"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded bg-slate-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 rounded bg-slate-700"
        />

        <button className="w-full bg-emerald-600 p-3 rounded">
          Sign Up
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link className="text-emerald-300 underline" href="/login">
            Login
          </Link>
        </p>
      </div>

    </div>
  );
}
