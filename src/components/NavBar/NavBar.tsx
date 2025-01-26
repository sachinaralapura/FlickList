import { memo, ReactNode } from "react";

export const NavBar = memo(({ children }: { children: ReactNode }) => {
  return <nav className="nav-bar">{children}</nav>;
});
