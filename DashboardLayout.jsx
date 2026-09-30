import Header from "./Header.jsx";

export default function DashboardLayout({ children }) {
  return (
    <div className="app">
      <Header />
      {children}
    </div>
  );
}