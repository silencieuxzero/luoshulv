import { c as DEFAULT_THEME, A as AUTO_MODE, D as DARK_MODE, L as LIGHT_MODE } from './MainGridLayout_Ch6OJi5I.mjs';
import { j as expressiveCodeConfig } from './content-utils_C8ZdinW7.mjs';

function getDefaultHue() {
  const fallback = "250";
  const configCarrier = document.getElementById("config-carrier");
  return Number.parseInt(configCarrier?.dataset.hue || fallback, 10);
}
function getHue() {
  const stored = localStorage.getItem("hue");
  return stored ? Number.parseInt(stored, 10) : getDefaultHue();
}
function setHue(hue) {
  localStorage.setItem("hue", String(hue));
  const r = document.querySelector(":root");
  if (!r) {
    return;
  }
  r.style.setProperty("--hue", String(hue));
}
function applyThemeToDocument(theme) {
  switch (theme) {
    case LIGHT_MODE:
      document.documentElement.classList.remove("dark");
      break;
    case DARK_MODE:
      document.documentElement.classList.add("dark");
      break;
    case AUTO_MODE:
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      break;
  }
  document.documentElement.setAttribute(
    "data-theme",
    expressiveCodeConfig.theme
  );
}
function getStoredTheme() {
  return localStorage.getItem("theme") || DEFAULT_THEME;
}

export { applyThemeToDocument, getDefaultHue, getHue, getStoredTheme, setHue };
