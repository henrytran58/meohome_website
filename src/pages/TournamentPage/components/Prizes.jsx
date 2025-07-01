import React from "react";

function Prizes() {
  return (
    <div className="p-8 text-gray-100">
      <h2 className="text-3xl font-bold mb-6">🏆 Giải Thưởng</h2>

      <div className="mb-6">
        <h3 className="text-2xl mb-2">🥇 Top 1:</h3>
        <ul className="list-disc ml-8">
          <li>200 coin/người</li>
          <li>1000 KC khoá/người</li>
          <li>1 blindbox nhân vật/người</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl mb-2">🥈 Top 2:</h3>
        <ul className="list-disc ml-8">
          <li>100 coin/người</li>
          <li>750 KC khoá/người</li>
          <li>1 blindbox nhân vật/người</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl mb-2">🥉 Top 3:</h3>
        <ul className="list-disc ml-8">
          <li>50 coin/người</li>
          <li>500 KC khoá/người</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl mb-2">🎖️ Top 4-10:</h3>
        <ul className="list-disc ml-8">
          <li>250 KC khoá/người</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl mb-2">🎉 Tất cả thành viên tham gia thi đấu:</h3>
        <ul className="list-disc ml-8">
          <li>10 vé blindbox khoá/người</li>
          <li>20 coin/người (Nếu không trong top 3)</li>
        </ul>
      </div>
    </div>
  );
}

export default Prizes;