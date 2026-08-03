import useReveal from "../hooks/useReveal";

export default function Reveal({ children, delay = 0, as: Tag = "div", style = {}, className = "" }) {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
