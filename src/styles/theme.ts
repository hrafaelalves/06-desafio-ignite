import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#000000",
            "600": "#47585B",
            "500": "#999999",
            "400": "rgba(153, 153, 153, 0.5)",
            "300": "#DADADA",
            "200": "#F5F8FA",
            "100": "#FFFFFF"
        },
        yellow: {
            "100": "rgba(255, 186, 8, 0.5);",
            "500": "#FFBA08",
        }
    },
    fonts: {
        heading: "Poppins",
        body: "Poppins",
    },
    styles: {
        global: {
            body: {
                bg: 'gray.200',
                color: 'gray.600'
            }
        }
    }
})