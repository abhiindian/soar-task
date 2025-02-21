
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const PilledTextField = styled(TextField)(({ theme }) => ({
    // Remove label transform so it doesn't shrink to the top
    '& .MuiInputLabel-root': {
        transform: 'translate(14px, 12px) scale(1)',
    },
    '& .MuiInputLabel-shrink': {
        transform: 'translate(14px, -4px) scale(0.75)',
    },

    // OutlinedInput styles
    '& .MuiOutlinedInput-root': {
        borderRadius: 9999,        // Large radius for a "pill" shape
        backgroundColor: '#F7F7F7', // Adjust if needed

        // Optional: Adjust default padding to look better with the pill shape
        '& input': {
            padding: '10px 16px',
        },

        // Outline colors
        '& fieldset': {
            borderColor: '#E0E0E0',
        },
        '&:hover fieldset': {
            borderColor: '#BEBEBE', // Slightly darker on hover
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main, // Focus color (blue by default)
        },
    },
}));

type SearchTextFieldProps = {} & TextFieldProps;

const SearchTextField = (searchTextFieldProps: SearchTextFieldProps) => {
    return <PilledTextField {...searchTextFieldProps} variant="outlined" />;
}

export default SearchTextField;
