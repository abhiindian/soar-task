
import { Card, CardContent, Typography, Box } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ChipCardWhiteIcon from './ChipCardWhiteIcon';
import ChipCardBlackIcon from './ChipCardBlackIcon';

const MaskedNumber = ({ number }: { number: string }) => {
    const visibleDigits = number.slice(-4);
    const startDigits = number.slice(0, 4);
    return `${startDigits} **** **** ${visibleDigits}`;
};

type CreditCardProps = {
    balance: number,
    cardHolder: string,
    validThru: string,
    cardNumber: string;
    type?: 'white' | 'black'
}


const CreditCard = (creditCardProps: Readonly<CreditCardProps>) => {
    const { balance, cardHolder, validThru, cardNumber, type = 'white' } = creditCardProps;
    return (
        <Card sx={{
            background: type === 'white' ? 'white' : 'linear-gradient(135deg, #3c3c4a, #2c2c38)',
            color: type === 'white' ? '#000' : '#fff',
            borderRadius: '16px',
            padding: '16px',
            width: '350px',
        }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" mb={2}><Box>
                    <Typography variant="subtitle2" color="gray">Balance</Typography>
                    <Typography variant="h5" fontWeight="bold" mb={2}>
                        ${balance}
                    </Typography>
                </Box>
                    <Typography alignContent="center">{type === 'white' ? <ChipCardBlackIcon /> : <ChipCardWhiteIcon />}</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography variant="subtitle2">CARD HOLDER</Typography>
                    <Typography variant="subtitle2">VALID THRU</Typography>
                </Box>

                <Box display="flex" justifyContent="space-between" mb={3}>
                    <Typography variant="h6" fontWeight="bold">{cardHolder}</Typography>
                    <Typography variant="h6" fontWeight="bold">{validThru}</Typography>
                </Box>

                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" fontWeight="bold">
                        <MaskedNumber number={cardNumber} />
                    </Typography>
                    <CreditCardIcon fontSize="large" />
                </Box>
            </CardContent>
        </Card>
    );
};

export default CreditCard;
