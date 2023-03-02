import React from "react";

export const ScrollSnapContainer = ({ children }) => {
  return (
    <div className="SnapScroll relative overflow-y-scroll max-h-[100vh] snap-y snap-mandatory transition">
      {children}
    </div>
  );
};
