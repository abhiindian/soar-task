import { Avatar, Button, FormLabel, InputAdornment, OutlinedInput } from "@mui/material";
import VectorIcon from "../../assets/icons/VectorIcon";
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
        <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md" style={{ height: '265px' }}>
            <div className="flex items-center justify-around h-40 overflow-x-auto space-x-4">
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

            </div>

            {/* Amount Input and Send Button */}
            <div className="flex items-center justify-around mt-4 absolute">
                <FormLabel htmlFor="amount" className="flex-1 text-[#718EBF]">Write Amount</FormLabel>
                <OutlinedInput
                    size="small"
                    defaultValue={defaultAmount}
                    sx={{ borderRadius: '16px', height: '36px' }}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    className="flex-2"
                />
                <Button
                    className="border-radius-16"
                    sx={{ position: 'absolute', right: '0', borderRadius: '16px', backgroundColor: 'black' }}
                    variant="contained"
                    color="primary"
                    endIcon={<VectorIcon />}
                    onClick={() => onSend(defaultAmount)}
                >
                    Send
                </Button>
            </div>
        </div>
    );
};

export default QuickTransfer;
