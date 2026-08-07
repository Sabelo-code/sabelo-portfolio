import { theme } from "../theme";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${theme.line}`, padding: "24px", textAlign: "center" }}>
      <span className="font-mono" style={{ fontSize: 14, color: theme.mist }}>
        © {new Date().getFullYear()} Sabelo Tshazi 
      </span>
    </footer>
  );
}
