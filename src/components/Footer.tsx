import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex justify-between items-center h-18 px-10 py-5 bg-mystic-deep border-t">
      <span className="">Jellytaro</span>
      <nav className="text-sm flex gap-4">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/termsofservice">Terms of Service</Link>
      </nav>
    </footer>
  );
}
