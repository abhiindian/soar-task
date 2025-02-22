import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type LargeCardWrapperProps = {
    title: string;
    flex: number;
}

export default function LargeCardWrapper(cardWrapperProps: PropsWithChildren<LargeCardWrapperProps>) {
    const { title, children, flex } = cardWrapperProps;
    return (
        <Box sx={{ flex: flex, overflowX: 'auto' }}>
            <Typography sx={{
                fontWeight: 600,
                fontSize: '22px',
                lineHeight: '27px',
                color: '#343C6A',
                marginBottom: '16px'
            }}>{title}</Typography>
            <Box>{children}</Box>
        </Box>
    )
}