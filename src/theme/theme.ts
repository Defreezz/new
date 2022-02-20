import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#c4c7d7",
        },
        secondary: {
            main: "#b83528",
        },
    },
    components: {
        MuiPaper: {
            defaultProps: {
                sx: {
                    borderRadius:"8px",
                    minHeight: "380px",
                    minWidth: "300px",
                    position: "relative",
                }
            }
        },
        MuiCardMedia: {
            styleOverrides: {
                img: {
                    opacity:0.5,
                    height: "200px",
                    position: "relative",
                },
            }
        },
        MuiCardActions: {
            defaultProps:{
                sx:{
                    position:"absolute",
                    bottom:"5px",
                }
            }
        },
        MuiTypography:{
            defaultProps:{
                sx:{
                    fontFamily:"Poppins, sans-serif;"
                }
            }
        },
        MuiButton:{
            defaultProps:{
                sx:{
                    textDecoration:"none"
                }
            }
        },

    }
})