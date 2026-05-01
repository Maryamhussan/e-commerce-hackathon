export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-[#252B42] mb-8">Search Results</h1>
      <div className="max-w-xl mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-12 pr-4 py-3 border border-[#E6E6E6] rounded-lg focus:outline-none focus:border-[#23A6F0]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-[#737373]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      
      <div className="text-center py-20 bg-[#FAFAFA] rounded-xl border border-dashed border-[#BDBDBD]">
        <p className="text-[#737373] text-lg">Enter a search term to find products.</p>
      </div>
    </div>
  );
}
