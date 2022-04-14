import React, {useEffect, useState} from 'react';
import { MuiThemeProvider, useMediaQuery, CssBaseline } from '@material-ui/core';
import {darkTheme, lightTheme} from "../themes";


function MyApp({ Component, pageProps }) {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const [theme, setTheme] = useState(
        prefersDarkMode ? darkTheme : lightTheme
    )

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>


  )
}

export default MyApp
