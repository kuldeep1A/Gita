export function isDark() {
  const currentTime = new Date();
  const currHours = currentTime.getHours();
  const body = document.body;

  if (currHours > 19) {
    body.classList.add("dark-mode");
    return true;
  } else if (currHours < 7) {
    body.classList.add("dark-mode");
    return true;
  } else {
    body.classList.remove("dark-mode");
    return false;
  }
}
