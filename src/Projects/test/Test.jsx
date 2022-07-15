import React, { createContext, useContext } from "react";
import styled from "styled-components";

const themeDefault = { border: "10px solid red" };
const themeContext = createContext(themeDefault);

const Test = () => {
    const theme = useContext(themeContext);
    console.log(theme.border);
    return (
        <Box border={theme.border}>
            Main
            <Sub1 />
        </Box>
    );
};
const Sub1 = () => {
    const theme = useContext(themeContext);
    console.log(theme);
    return (
        <Box border={theme.border}>
            Sub1
            <Sub2 />
        </Box>
    );
};
const Sub2 = () => {
    const theme = useContext(themeContext);
    console.log(theme);
    return (
        <themeContext.Provider value={{ border: "10px solid orange" }}>
            <Box border={theme.border}>
                Sub2
                <Sub3 />
            </Box>
        </themeContext.Provider>
    );
};
const Sub3 = () => {
    const theme = useContext(themeContext);
    console.log(theme);
    return <Box border={theme.border}>Sub3</Box>;
};

const Box = styled.div`
    border: ${(prop) => (prop.border ? prop.border : `10px solid grey`)};
    margin: 10px;
    padding: 10px;
`;

export default Test;
