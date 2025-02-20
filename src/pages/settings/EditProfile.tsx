import React, { useState } from "react";
import {
    Tabs,
    Tab,
    Box,
    Avatar,
    IconButton,
    TextField,
    Button
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditProfile = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box className="p-4 bg-white rounded-md shadow-md max-w-4xl mx-auto">
            {/* Top Tabs */}
            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                className="mb-4"
                textColor="primary"
                indicatorColor="primary"
            >
                <Tab label="Edit Profile" />
                <Tab label="Preferences" />
                <Tab label="Security" />
            </Tabs>

            {/* Edit Profile Tab */}
            {tabValue === 0 && (
                <Box>
                    {/* Avatar + Name Fields */}
                    <Box className="flex flex-col items-center mb-6">
                        <Box className="relative">
                            <Avatar
                                src="https://via.placeholder.com/80"
                                alt="Profile Picture"
                                sx={{ width: 80, height: 80 }}
                            />
                            <IconButton
                                className="absolute bottom-0 right-0"
                                size="small"
                                color="primary"
                            >
                                <EditIcon fontSize="small" />
                            </IconButton>
                        </Box>

                        <Box className="w-full sm:ml-6 mt-4 sm:mt-0">
                            <TextField
                                label="Your Name"
                                variant="outlined"
                                size="small"
                                fullWidth
                                className="mb-4"
                            />
                            <TextField
                                label="User Name"
                                variant="outlined"
                                size="small"
                                fullWidth
                            />
                        </Box>
                    </Box>

                    {/* Form Fields in a Responsive Grid */}
                    <Box className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <TextField label="Email" variant="outlined" size="small" fullWidth />
                        <TextField
                            label="Password"
                            variant="outlined"
                            size="small"
                            type="password"
                            fullWidth
                        />
                        <TextField
                            label="Date of Birth"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                        <TextField
                            label="Present Address"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                        <TextField
                            label="Permanent Address"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                        <TextField label="City" variant="outlined" size="small" fullWidth />
                        <TextField
                            label="Postal Code"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                        <TextField label="Country" variant="outlined" size="small" fullWidth />
                    </Box>

                    {/* Save Button */}
                    <Button variant="contained" color="primary">
                        Save
                    </Button>
                </Box>
            )}

            {/* Preferences Tab */}
            {tabValue === 1 && (
                <Box>
                    <h3 className="text-lg font-medium mb-2">Preferences</h3>
                    <p>Preferences content goes here...</p>
                </Box>
            )}

            {/* Security Tab */}
            {tabValue === 2 && (
                <Box>
                    <h3 className="text-lg font-medium mb-2">Security</h3>
                    <p>Security content goes here...</p>
                </Box>
            )}
        </Box>
    );
};

export default EditProfile;
