import { CssBaseline } from "@mui/material/";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./layouts/MainLayout";

const queryClient = new QueryClient({});

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CssBaseline>
                <MainLayout />
            </CssBaseline>
        </QueryClientProvider>
    );
}
