import React from "react";

const groups = [
  { name: "Bảng A", teams: ["༄༂Đạί--τɧáηɧ - ´꒳`ლè❍ლáɣ", "Team A2", "Team A3", "Team A4"] },
  { name: "Bảng B", teams: ["Team B1", "Team B2", "Team B3", "Team B4"] },
  { name: "Bảng C", teams: ["Team C1", "Team C2", "Team C3", "Team C4"] },
  { name: "Bảng D", teams: ["Team D1", "Team D2", "Team D3", "Team D4"] },
];

export default function Brackets() {
  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      {groups.map((group, index) => (
        <div
          key={index}
          className="rounded-2xl shadow-lg border border-gray-300 p-4 bg-gray-400"
        >
          <h2 className="text-xl font-bold mb-4">{group.name}</h2>
          <ul className="space-y-2">
            {group.teams.map((team, i) => (
              <li
                key={i}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition text-black"
              >
                {team}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
