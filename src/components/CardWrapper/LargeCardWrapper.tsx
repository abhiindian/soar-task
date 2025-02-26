import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type LargeCardWrapperProps = {
    title: string;
    subtitle?: string;
    flex: number;
}

export default function LargeCardWrapper(cardWrapperProps: PropsWithChildren<LargeCardWrapperProps>) {
    const { title, subtitle, children, flex } = cardWrapperProps;
    return (
        <Box sx={{ flex: flex }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                <Typography sx={{
                    fontWeight: 600,
                    fontSize: '22px',
                    lineHeight: '27px',
                    color: '#343C6A',
                    marginBottom: '16px'
                }}>{title}</Typography>
                <Typography sx={{
                    fontWeight: 400,
                    fontSize: '17px',
                    lineHeight: '30px',
                    color: '#343C6A',
                    cursor: 'pointer',
                    ":hover": {
                        textDecoration: 'underline'
                    }
                }}>{subtitle}</Typography></Box>
            <Box>{children}</Box>
        </Box>
    )
}