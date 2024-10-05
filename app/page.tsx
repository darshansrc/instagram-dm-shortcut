"use client";
// import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   // Automatically redirect to Instagram DM page
  //   window.location.href = "https://www.instagram.com/direct/inbox/";
  // }, []);

  return (
    <div className="flex flex-col w-full items-center justify-center h-screen">
      <h1>Redirecting to Instagram DMs...</h1>
      <p>
        If you are not redirected,{" "}
        <a
          className="underline text-blue-600"
          href="https://www.instagram.com/direct/inbox/"
        >
          click here
        </a>
        .
      </p>
    </div>
  );
}
