"use client";

import { useEffect, useState } from "react";

function getTimeLeft() {
  const target = new Date("2028-04-01T13:05:00-07:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    secs: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      display: "inline-block",
      background: "var(--green)",
      border: "2px solid var(--gold)",
      borderRadius: "8px",
      padding: "28px 40px",
      marginBottom: "16px",
    }}>
      <div style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "0.7rem",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: "var(--gold)",
        marginBottom: "16px",
      }}>
        Countdown to 2028 Season Opener
      </div>
      <div style={{
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
        {[
          { val: time.days, label: "Days" },
          { val: time.hours, label: "Hours" },
          { val: time.mins, label: "Minutes" },
          { val: time.secs, label: "Seconds" },
        ].map(({ val, label }) => (
          <div key={label} style={{ textAlign: "center", minWidth: "60px" }}>
            <span style={{
              fontSize: "2.8rem",
              fontWeight: "bold",
              color: "var(--gold)",
              display: "block",
              lineHeight: 1,
              fontFamily: "Arial, sans-serif",
            }}>
              {String(val).padStart(2, "0")}
            </span>
            <span style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--cream)",
              opacity: 0.7,
              marginTop: "6px",
              display: "block",
            }}>
              {label}
            </span>
          </div>
        ))}
      </div>
      <div style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "0.8rem",
        color: "var(--cream)",
        opacity: 0.6,
        marginTop: "12px",
      }}>
        Target: Opening Day 2028 at the Las Vegas Ballpark
      </div>
    </div>
  );
}
