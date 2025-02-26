import { Box, Container } from "@mui/material";
import { FallbackProps } from "react-error-boundary";

export default function ErrorPage({ error }: FallbackProps) {

    return (
        <Box sx={{ flexGrow: 1, margin: 0 }}>
            <Box sx={{ height: { sm: '80px', xs: '120px' } }} />
            <Container maxWidth={false} sx={{
                backgroundColor: '#F5F7FA',
                display: 'flex',
                justifyContent: 'center',
                py: 3
            }}>
                <div role="alert">
                    <p>Something went wrong:</p>
                    <pre className="text-red-700">{error.message}</pre>
                </div>
            </Container>
        </Box>
    );
}