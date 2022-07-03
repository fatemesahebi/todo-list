import { createTheme } from '@mui/material/styles';
import  * as colors  from '@mui/material/colors';
import backImg from "assets/images/5501914.jpg"
export const palette = { ...colors,...{
        primary: colors.purple
        ,
        secondary:colors.amber




    }

}
export const theme = createTheme({

    direction: 'rtl',
    components: {
        MuiSelect: {
            styleOverrides: {
                root: {
                    " .MuiSelect-icon": {
                        right: "initial",
                        left:"7px"
                    },
                },
                ".MuiSelect-select":{
                    padding:"16px 14px 12px 14px  "
                }
            }
        },
        MuiGrid: {
            styleOverrides: {
                root: {
                    minWidth:"50px"
                },
            },

        }
        ,

        MuiButton: {
            styleOverrides: {
                root: {
                    '@media (max-width:400px)': {
                        fontSize: '10px !important',
                        padding:"8px 10px"
                    },
                    '@media (max-width:330px)': {
                        fontSize: '10px !important',
                        padding:"8px 5px"
                    },


                },
            },
        },

        MuiContainer: {
            styleOverrides: {
                root: {
                    background:"#efe2e273",
                    width:"95vw",
                    height:"90vh",
                    marginTop:"32px",
                    padding:"32px",
                    borderRadius:"12px"
                },
            },
        },

        MuiCssBaseline: {
            styleOverrides:
                {
                    body:{
                        fontWeight:"normal",
                        fontsize:14,
                        background: `url(${backImg}) no-repeat center center fixed`,
                        backgroundSize: "cover"
                    }
                }}},
    typography: {
        '@media (max-width:600px)': {
            fontSize: '10px !important',
        },
    },
    palette:palette

});