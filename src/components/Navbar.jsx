
function Navbar() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-2xl font-black">
          SC<span className="text-yellow-500">.</span>
        </a>

        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-yellow-600">About</a>
          <a href="#skills" className="hover:text-yellow-600">Skills</a>
          <a href="#projects" className="hover:text-yellow-600">Projects</a>
          <a href="#experience" className="hover:text-yellow-600">Experience</a>
        </div>

        <a
          href="#contact"
          className="rounded-lg bg-[#F5E642] px-4 py-2.5 font-bold hover:bg-yellow-300"
        >
          Contact ↗
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
