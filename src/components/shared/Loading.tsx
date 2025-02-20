import { CircularProgress, Typography } from '@mui/material';

const Loading = () => {
    return (
        <div data-testid="loading-container" className='loading'>
            <div className="loading-box">
                <CircularProgress />
                <Typography variant="h5">Loading...</Typography>
            </div>

        </div>
    )
}

export default Loading;