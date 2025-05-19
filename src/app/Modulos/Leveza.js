export default function Logo() {
  return (
    <div className="flex items-center space-x-1 text-[40px] font-semibold text-[#F15A4A]">
      <span>le</span>
      <div className="relative w-8 h-8 inline-block">
        <div className="absolute inset-0 rounded-md border border-gray-300 bg-white"></div>
        <svg
          className="absolute inset-0 w-full h-full p-1 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span>eza.</span>
    </div>
  );
}
