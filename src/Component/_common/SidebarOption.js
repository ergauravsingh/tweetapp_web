import React from "react";

import "./SidebarOption.css";
export default function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebaroption ${active && "sidebaroption-active"}`}>
      <Icon className="sidebar-option-icon" />
      <h2>{text}</h2>
    </div>
  );
}
