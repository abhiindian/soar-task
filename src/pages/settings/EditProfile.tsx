import {
    Box,
    Avatar,
    IconButton,
    TextField,
    Button
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import './EditProfile.css';

const EditProfile = () => {

    return (
        <>
            <Box className="flex mt-4" sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
                <Box className="flex flex-col items-center mb-6 flex-1">
                    <Box className="relative">
                        <Avatar

                            alt="Profile Picture"
                            sx={{ width: 98, height: 98 }}
                        />
                        <IconButton
                            sx={{
                                position: 'absolute',
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'black',
                                color: 'white'
                            }}
                            size="small"
                            color="primary"
                            disableRipple={true}
                        >
                            <EditIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
                {/* Form Fields in a Responsive Grid */}
                <Box className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 flex-3">
                    <Box className="mb-2">
                        <span className="text-label-form">Your Name</span>
                        <TextField
                            InputProps={{
                                style: {
                                    background: '#ffffff',
                                    border: '1px solid #dfeaf2',
                                    borderRadius: '15px'
                                }
                            }}
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </Box>
                    <Box className="mb-2">
                        <span className="text-label-form">User Name</span>
                        <TextField
                            InputProps={{
                                style: {
                                    background: '#ffffff',
                                    border: '1px solid #dfeaf2',
                                    borderRadius: '15px'
                                }
                            }}
                            className="input-form"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <span className="text-label-form">Email</span>
                        <TextField
                            InputProps={{
                                style: {
                                    background: '#ffffff',
                                    border: '1px solid #dfeaf2',
                                    borderRadius: '15px'
                                }
                            }}
                            className="input-form"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <span className="text-label-form">Password</span>
                        <TextField
                            InputProps={{
                                style: {
                                    background: '#ffffff',
                                    border: '1px solid #dfeaf2',
                                    borderRadius: '15px'
                                }
                            }}
                            className="input-form"
                            variant="outlined"
                            size="small"
                            type="password"
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <span className="text-label-form">Date of Birth</span>
                        <TextField
                            InputProps={{
                                style: {
                                    background: '#ffffff',
                                    border: '1px solid #dfeaf2',
                                    borderRadius: '15px'
                                }
                            }}
                            className="input-form"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <span className="text-label-form">Present Address</span>
                        <TextField
                            InputProps={{
                                style: {
                                    background: '#ffffff',
                                    border: '1px solid #dfeaf2',
                                    borderRadius: '15px'
                                }
                            }}
                            className="input-form"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <span className="text-label-form">Permanent Address</span>
                        <TextField
                            InputProps={{
                                style: {
                                    background: '#ffffff',
                                    border: '1px solid #dfeaf2',
                                    borderRadius: '15px'
                                }
                            }}
                            className="input-form"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <span className="text-label-form">City</span>
                        <TextField
                            InputProps={{
                                style: {
                                    background: '#ffffff',
                                    border: '1px solid #dfeaf2',
                                    borderRadius: '15px'
                                }
                            }}
                            className="input-form"
                            variant="outlined"
                            size="small"
                            fullWidth />
                    </Box>
                    <Box>
                        <span className="text-label-form">Postal Code</span>
                        <TextField
                            InputProps={{
                                style: {
                                    background: '#ffffff',
                                    border: '1px solid #dfeaf2',
                                    borderRadius: '15px'
                                }
                            }}
                            className="input-form"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <span className="text-label-form">Country</span>
                        <TextField
                            InputProps={{
                                style: {
                                    background: '#ffffff',
                                    border: '1px solid #dfeaf2',
                                    borderRadius: '15px'
                                }
                            }}
                            className="input-form"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </Box>
                </Box>


            </Box>
            <Box className="flex flex-row justify-end">

                <Button
                    variant="contained"
                    color="primary"
                    className="mr-2 w-32"
                    sx={{
                        borderRadius: '16px',
                        backgroundColor: 'black',
                        width: { xs: '100%', sm: '190px' }
                    }}
                >
                    Save
                </Button>
            </Box >
        </>
    );
};

export default EditProfile;
