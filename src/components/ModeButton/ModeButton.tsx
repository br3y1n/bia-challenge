import { useThemeModeContext } from "@contexts/ThemeModeContext/ThemeModeContext";
import { Button } from "@mui/material";

const ModeButton = () => {
  const { icon, onToggleMode, text } = useThemeModeContext();

  return (
    <Button variant="outlined" startIcon={icon} onClick={onToggleMode}>
      {text}
    </Button>
  );
};

export default ModeButton;
