import { Avatar, Button, TextField, IconButton, FormLabel } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SendIcon from "@mui/icons-material/Send";
import { Label } from "@mui/icons-material";

/**
 * QuickTransfer Component
 *
 * @param {Array}  users         - Array of user objects: [{ name, role, avatar }, ...]
 * @param {String} defaultAmount - Default amount to show in the input
 * @param {Function} onSend      - Callback when Send button is clicked
 */

type QuickTransferProps = {
    users: { name: string; role: string; avatar: string }[];
    onSend: (amount: number) => void;
    defaultAmount: number;
}

const QuickTransfer = ({
    users = [],
    defaultAmount = 525.50,
    onSend = () => { }
}: QuickTransferProps) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md">
            {/* Title */}
            <h2 className="text-gray-800 font-semibold text-lg mb-4">Quick Transfer</h2>

            {/* User Avatars */}
            <div className="flex items-center space-x-4 mb-4">
                {users.map((user, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Avatar
                            alt={user.name}
                            src={user.avatar}
                            sx={{ width: 48, height: 48 }}
                        />
                        <span className="text-sm font-medium mt-1">{user.name}</span>
                        <span className="text-xs text-gray-500">{user.role}</span>
                    </div>
                ))}

                {/* Arrow Button */}
                {/* <IconButton className="border border-gray-300 rounded-full" size="small">
                    <ArrowForwardIosIcon fontSize="small" />
                </IconButton> */}
            </div>

            {/* Amount Input and Send Button */}
            <div className="flex items-center space-x-2">
                <FormLabel htmlFor="amount">Write Amount</FormLabel>
                <TextField
                    variant="outlined"
                    size="small"
                    defaultValue={defaultAmount}
                    className="flex-1"
                />
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                    onClick={() => onSend(defaultAmount)}
                >
                    Send
                </Button>
            </div>
        </div>
    );
};

export default QuickTransfer;
