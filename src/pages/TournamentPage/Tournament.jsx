import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Format from "./components/Format";
import Brackets from "./components/Brackets";
import Prizes from "./components/Prizes";
function Tournament() {
  const [activeSection, setActiveSection] = useState("format");

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 overflow-y-auto p-8 ml-64">
        {activeSection === "format" && (
          <section>
            <Format/>
          </section>
        )}
        {activeSection === "rules" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Luật Thi Đấu</h2>
            <p>Chi tiết luật thi đấu...</p>
          </section>
        )}
        {activeSection === "prizes" && (
          <section>
            <Prizes />
          </section>
        )}
        {activeSection === "brackets" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Bảng Đấu</h2>
            <Brackets/>
          </section>
        )}
        {activeSection === "results" && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Kết Quả</h2>
            <p>Kết quả thi đấu...</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default Tournament;
