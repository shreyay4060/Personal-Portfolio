import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-blue-100 text-center py-3 shadow-md z-50">
      <p className="text-md ">
        © <a href="mailto:shreyay4060@gmail.com" className="text-violet-600 underline">Shreya</a> {year}
      </p>
    </footer>
  );
}
