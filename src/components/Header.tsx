import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center h-18 text-mystic-mist px-10 py-4">
      <span className="text-xl font-semibold">Jellytaro</span>
      <nav className="text-sm font-medium flex gap-4">
        <Link to="/sessions">Sessions</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </header>
  );
}
