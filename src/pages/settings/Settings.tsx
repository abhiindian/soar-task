import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import EditProfile from "./EditProfile";

export default function Settings() {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <div className="bg-gray-100 p-4">
            <Box className="p-4 bg-white rounded-md shadow-md max-w-6xl mx-auto">
                {/* Top Tabs */}
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    className="mb-4 mr-4"
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tab label="Edit Profile" />
                    <Tab label="Preferences" />
                    <Tab label="Security" />
                </Tabs>

                {/* Edit Profile Tab */}
                {tabValue === 0 && (
                    <EditProfile />
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
        </div>
    )
}