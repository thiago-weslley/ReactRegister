import { createGlobalStyle } from "styled-components";
import BackgroundNoise from "../assets/background/noise.png";

export default createGlobalStyle`

    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-family: 'Poppins', sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body {
        background: radial-gradient(circle, #ececec, #ebebeb, #ebebeb, #eaeaea, #e9e9e9);
        font-size: 1.6rem;
    }

    body::after {
        content: '';
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        opacity: .2;
        mix-blend-mode: darken;
        pointer-events: none;
        background-image: url('${BackgroundNoise}');
    }

    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    appearance: none;
}
`;
