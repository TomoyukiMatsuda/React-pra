import React, { useCallback } from "react";

interface Props {
  onFilterChange: (filter: string) => void;
  filter: "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE";
}

export const Footer: React.VFC<Props> = (props) => {
  const renderFilter = useCallback((filter: string, name: string) => {
    if (filter === props.filter) {
      return name;
    }
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          props.onFilterChange(filter);
        }}
      >
        {name}
      </a>
    );
  }, []);

  return (
    <p>
      Show: {renderFilter("SHOW_ALL", "All")}
      {", "}
      {renderFilter("SHOW_COMPLETED", "Completed")}
      {", "}
      {renderFilter("SHOW_ACTIVE", "Active")}
    </p>
  );
};
