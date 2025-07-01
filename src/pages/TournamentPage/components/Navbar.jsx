import React from "react";

function Navbar({ activeSection, setActiveSection }) {
  const navItems = [
    { label: "Thể Thức", section: "format" },
    { label: "Luật Thi Đấu", section: "rules" },
    { label: "Giải Thưởng", section: "prizes" },
    { label: "Bảng Đấu", section: "brackets" },
    { label: "Kết Quả", section: "results" },
  ];

  return (
    <nav className="w-64 h-full bg-gray-800 p-6 flex flex-col fixed text-white">
      <h1 className="text-xl font-bold mb-8">Meo Home</h1>
      {navItems.map((item) => (
        <button
          key={item.section}
          onClick={() => setActiveSection(item.section)}
          className={`mb-4 text-left transition ${
            activeSection === item.section
              ? "text-yellow-400 font-bold"
              : "hover:text-yellow-400"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
