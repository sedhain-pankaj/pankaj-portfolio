import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center">
      <div className="mb-5 px-4 text-center text-gray-500">
        <small className="mb-2 block text-xs">
          &copy; 2030 Pankaj Sedhain. All rights reserved.
        </small>
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> built with
          React & NextJS 14 (App Router & Server Actions), TypeScript, Tailwind
          CSS, Framer Motion, React Email & Resend, hosted on Vercel.
        </p>
      </div>
    </footer>
  );
}
