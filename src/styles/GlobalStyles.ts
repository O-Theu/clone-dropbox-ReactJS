import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    *, button, input {
        font-family: 'Roboto', sans-serif;
    }

    :root {
        --color-primary: #0d2f81;
        --color-secondary: #ffe7aa;
        --color-tertiary: #fff;
        --color-quaternary: #000;

        --color-blue: #0061ff;
        --color-border: #bdc4c9;
    }
`;