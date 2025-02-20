import { Box, Paper } from "@mui/material";
import { PropsWithChildren } from "react";

type CardWrapperProps = {
    title: string;
}

export default function CardWrapper(cardWrapperProps: PropsWithChildren<CardWrapperProps>) {
    const { title, children } = cardWrapperProps;
    return (
        <Paper>{title}
            <Box>{children}</Box>
        </Paper>
    )
}