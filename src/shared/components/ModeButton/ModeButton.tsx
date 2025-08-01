import Brightness4RoundedIcon from "@mui/icons-material/Brightness4Rounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Button } from "@mui/material";

import { useThemeMode } from "@hooks/useThemeMode";

const ModeButton = () => {
  const { isDark, toggleTheme } = useThemeMode();
  const icon = isDark ? <Brightness4RoundedIcon /> : <DarkModeOutlinedIcon />;
  const text = isDark ? "Light Mode" : "Dark Mode";

  return (
    <Button variant="outlined" startIcon={icon} onClick={toggleTheme}>
      {text}
    </Button>
  );
};

export { ModeButton };
