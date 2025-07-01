import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Format() {
  const [step, setStep] = useState(-1);

  useEffect(() => {
    let timer;
    if (step < 5) {
      timer = setTimeout(() => setStep(step + 1), 1500);
    } else {
      // Auto-replay after 3 seconds
      timer = setTimeout(() => setStep(-1), 4000);
    }
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="p-8 text-gray-100">
      <h2 className="text-3xl font-bold mb-6">📋 Thể Thức</h2>
      <p className="mb-4">32 thành viên chia thành 16 đội dựa trên kĩ năng và mục tiêu đến với giải đấu. </p>
       <p className="mb-4">16 đội được chia làm 4 bảng đấu, mỗi bảng gồm 4 đội thi đấu thể thức Thuỵ Sĩ (Swiss Model) để tìm ra top 1, 2, 3, và 4</p>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Vòng Bảng</h3>

        <div className="flex flex-col items-center space-y-6">
          <AnimatePresence>
            {step >= 0 && (
              <motion.div
                key="match1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center space-x-4 w-3xl"
              >
                <div> Match 1: </div>
                <div className="bg-gray-700 px-4 py-2 rounded">Team A</div>
                <span>vs</span>
                <div className="bg-gray-700 px-4 py-2 rounded">Team B</div>
                {step >= 1 && (
                  <div className="flex flex-row items-center space-x-2 ml-5">
                    <span className="text-white">⇒</span>
                    <motion.div
                      key="winner1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-green-600 px-4 py-2 rounded"
                    >
                      Team A Win
                    </motion.div>

                    <motion.div
                      key="loser1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-red-600 px-4 py-2 rounded"
                    >
                      Team B Lose
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )}

            {step >= 0 && (
              <motion.div
                key="match2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center space-x-4 w-3xl"
              >
                <div> Match 2: </div>
                <div className="bg-gray-700 px-4 py-2 rounded">Team C</div>
                <span>vs</span>
                <div className="bg-gray-700 px-4 py-2 rounded">Team D</div>
                {step >= 1 && (
                  <div className="flex flex-row items-center space-x-2 ml-4">
                    <span className="text-white">⇒</span>
                    <motion.div
                      key="winner2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-green-600 px-4 py-2 rounded"
                    >
                      Team C Win
                    </motion.div>

                    <motion.div
                      key="loser2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-red-600 px-4 py-2 rounded"
                    >
                      Team D Lose
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )}

            {step >= 2 && (
              <motion.div
                key="match3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center space-x-4 w-3xl"
              >
                <div> Match 3: </div>
                <div className="bg-green-600 px-4 py-2 rounded">Team A</div>
                <span>vs</span>
                <div className="bg-green-600 px-4 py-2 rounded">Team C</div>
                {step >= 3 && (
                  <div className="flex flex-row items-center space-x-2 ml-4">
                    <span className="text-white">⇒</span>
                    <motion.div
                      key="winner3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-blue-700 px-4 py-2 rounded"
                    >
                      Top 1: Team A
                    </motion.div>

                    <motion.div
                      key="loser3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-yellow-600 px-4 py-2 rounded"
                    >
                      Team C Lose
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )}

            {step >= 2 && (
              <motion.div
                key="match4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center space-x-4 w-3xl"
              >
                <div> Match 4: </div>
                <div className="bg-red-600 px-4 py-2 rounded">Team B</div>
                <span>vs</span>
                <div className="bg-red-600 px-4 py-2 rounded">Team D</div>
                {step >= 3 && (
                  <div className="flex flex-row items-center space-x-2 ml-4">
                    <span className="text-white">⇒</span>
                    <motion.div
                      key="loser4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-red-700 px-4 py-2 rounded"
                    >
                      Top 4: Team D
                    </motion.div>

                    <motion.div
                      key="winner4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-yellow-600 px-4 py-2 rounded"
                    >
                      Team B Win
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )}

            {step >= 4 && (
              <motion.div
                key="match5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center space-x-4 w-3xl"
              >
                <div> Match 5: </div>
                <div className="bg-yellow-600 px-4 py-2 rounded">Team C</div>
                <span>vs</span>
                <div className="bg-yellow-600 px-4 py-2 rounded">Team B</div>
                {step >= 5 && (
                  <div className="flex flex-row items-center space-x-2 ml-4">
                    <span className="text-white">⇒</span>
                    <motion.div
                      key="winner5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-blue-500 px-4 py-2 rounded"
                    >
                      Top 2: Team B
                    </motion.div>

                    <motion.div
                      key="loser5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-yellow-600 px-4 py-2 rounded"
                    >
                      Top 3: Team C
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Format;
