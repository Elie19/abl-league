"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LiveNotification() {
  const [visible, setVisible] = useState(false);
  const [match, setMatch] = useState<{ home: string; away: string } | null>(
    null
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const random = Math.random();
      if (random < 0.3) {
        setMatch({ home: "Dakar Lions", away: "Lagos Titans" });
        setVisible(true);
        setTimeout(() => setVisible(false), 5000);
      }
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && match && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          className="fixed top-4 right-4 bg-orange-500 text-white px-4 py-3 rounded-lg shadow-lg z-50"
        >
          <strong>🔴 Live :</strong> {match.home} vs {match.away}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
