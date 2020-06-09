import React from 'react';
import { ThemeProvider } from 'styled-components';

const themeSketch = {
    headerFontFamily: 'Frank Ruhl Libre',
    headerFontColor: '#1E2238',
    sectionTextColor: '#525A75',
    sectionFontFamily: 'Roboto',
    buttonBgColor: '#3F52FF',
    buttonTextColor: '#fff',
    getStartedButtonColor: '#02C6F1'
}

const Sketch = () => {
    return (
        <ThemeProvider theme={themeSketch}>
            
        </ThemeProvider>
    );
};

export default Sketch;