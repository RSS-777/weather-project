import { createContext, useState, useEffect} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme]  = useState('white')
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
           {children}
        </ThemeContext.Provider>
    )
}