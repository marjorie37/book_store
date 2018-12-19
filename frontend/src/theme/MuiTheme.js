import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
  primary: {
    main: "#0D47A1",
    light: "#5472d3",
    dark: "#002171",
    contrastText: "#ffffff"
  },
  secondary: {
    main: "#FFCA28",
    light: "#fffd61",
    dark: "#c79a00",
    contrastText: "#000000"
  }
};
const theme = "Flamingo";

export default createMuiTheme({ palette, theme });
