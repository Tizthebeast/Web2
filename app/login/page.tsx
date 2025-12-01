"use client";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen bg-indigo-600 relative">
        <Link href="/" className=" absolute bg-emerald-600 px-4 py-2 text-white rounded-lg m-4">Dashboard</Link>
      <div className="bg-slate-900 text-white p-8 rounded-xl w-[400px]
        absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {/* FORM */}
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
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link className="text-emerald-300 underline" href="/signup">
            Sign Up
          </Link>
        </p>
      </div>

    </div>
  );
}
