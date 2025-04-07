const Separator = ({ className = "", orientation = "horizontal", decorative = true, ...props }) => {
    return (
      <div
        role={decorative ? "presentation" : "separator"}
        aria-orientation={orientation}
        className={`shrink-0 bg-border ${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"} ${className}`}
        {...props}
      />
    );
  };
  
  export { Separator };
  