import { ReactNode, useState } from "react";

export function Main({ children }: { children: ReactNode }) {
  return <main className="main">{children}</main>;
}

export function Box({ children }: { children: ReactNode }) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && children}
    </div>
  );
}
