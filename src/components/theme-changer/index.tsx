import { useTheme } from "next-themes";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

const LightTheme = () => {
  return <Sun size={20} />;
};

const DarkTheme = () => {
  return <Moon size={20} />;
};

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4">
      <Popover>
        <PopoverTrigger>
          <Button
            size="default"
            className="flex justify-center w-10 h-10"
            variant={"outline"}>
            {theme === "light" ? <LightTheme /> : <DarkTheme />}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-3 max-w-16">
          <Button
            variant={"outline"}
            disabled={theme === "light"}
            onClick={() => setTheme("light")}>
            <LightTheme />
          </Button>
          <Button
            variant={"outline"}
            disabled={theme === "dark"}
            onClick={() => setTheme("dark")}>
            <DarkTheme />
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};
