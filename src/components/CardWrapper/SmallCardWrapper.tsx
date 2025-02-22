import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

type SmallCardWrapperProps = {
    title: string;
    flex: number;
}

export default function SmallCardWrapper(cardWrapperProps: PropsWithChildren<SmallCardWrapperProps>) {
    const { title, children, flex } = cardWrapperProps;
    return (
        <Box sx={{ flex: flex }}>
            <Box>
                <Typography sx={{
                    fontWeight: 600,
                    fontSize: '22px',
                    lineHeight: '27px',
                    color: '#343C6A',
                    marginBottom: '16px'
                }}>{title}</Typography>
                <Box>{children}</Box>
            </Box>
        </Box>
    )
}