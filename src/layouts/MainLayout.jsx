import { Outlet } from "react-router-dom";

import { Box, Toolbar } from "@mui/material";

import Header from "./Header";

export default function MainLayout() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: "100vw",
                minHeight: "100vh",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
            }}
        >
            <Header />
            <Box
                component={"main"}
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    backgroundColor: "#1C163B",
                }}
            >
                <Toolbar /> <Outlet />
            </Box>
        </Box>
    );
}
