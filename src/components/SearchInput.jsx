import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export function SearchInput({ className }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [q, setQ] = useState("");

  const goToSearch = (preserveQuery = true) => {
    const params = new URLSearchParams();
    if (preserveQuery && q) params.set("q", q);
    params.set("focus", "1");
    const to = `/Mainsearch?${params.toString()}`;

    if (location.pathname === "/companies") {
      navigate(to, { replace: true });
    } else {
      navigate(to);
    }
  };

  const handleFocus = () => {
    goToSearch(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      goToSearch(true);
    }
  };

  return (
    <div className={className}>
      <input
        dir="rtl"
        type="text"
        placeholder="جست‌وجو کسب‌وکار..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none"
        aria-label="جست‌وجو"
      />
    </div>
  );
}
