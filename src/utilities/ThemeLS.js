// Set Item
export const setThemeMode = (value) => {
  localStorage.setItem("data-theme", value);
};

// Get Item
export const getThemeMode = () => {
  const mode = localStorage.getItem("data-theme");
  if (!mode) {
    setThemeMode("light");
  }
  return mode;
};
