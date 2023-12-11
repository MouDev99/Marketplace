import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";
import './index.css';

function ThemeToggle() {

  const setTheme = () => {
    const app = document.querySelector(".app");
    const classList = Array.from(app.classList);
    if (classList.includes("dark")) {
      app.classList.remove("dark");
      return;
    };
    app.classList.add("dark");
  };

  return (
    <Switch
      defaultSelected
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
