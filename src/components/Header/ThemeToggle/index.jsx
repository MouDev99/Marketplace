import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";

function ThemeToggle() {

  const setTheme = () => {
    const html = document.querySelector("html");
    const classList = Array.from(html.classList);
    if (classList.includes("dark")) {
      html.classList.remove("dark");
      return;
    };
    html.classList.add("dark");
  };

  return (
    <Switch
      size="lg"
      color="success"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onClick={setTheme}
    >
    </Switch>
  );
}

export default ThemeToggle;
