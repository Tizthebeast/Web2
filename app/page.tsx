import Link from "next/link"

export default function Home() {
  return (
    <div className="w-screen h-screen bg-indigo-600 overflow-hidden">
      
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full h-12 bg-white z-10 text-center">
        topbar
      </div>

      {/* SIDEBAR */}
      <div className="fixed top-16 left-1 w-[20%] h-[calc(100vh-4rem)]
        bg-slate-900 rounded-lg text-white p-4 overflow-y-auto"
      >
        sidebar<br /><br />
        <Link href="/calculator" className="p-4 bg-emerald-600">Calculator</Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="fixed top-16 left-[23%] w-[75%] h-[calc(100vh-4rem)]
        bg-slate-800 rounded-lg text-white p-6 overflow-y-auto"
      >

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Main Content</h1>
          <p>
            Write your entire long article here.
            This section will scroll independently while the sidebar + topbar stay fixed.
          </p>
          
          
          {[...Array(50)].map((_, i) => (
            <p key={i}>This is long content line {i + 1}</p>
          ))}
        </div>
      </div>

    </div>
  );
}
