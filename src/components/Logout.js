const LogOut = () => {
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    document.location.href = "/";
  };

  return (
    <button className="logout-btn" onClick={handleLogout}>
      Log Out
    </button>
  );
};
export default LogOut;
