import React, { useState } from 'react';

interface User {
    name: string;
    role: string;
}

interface QuickTransferProps {
    users: User[];
    onSend: (amount: number) => void;
    initialAmount?: number;
}

const QuickTransfer: React.FC<QuickTransferProps> = ({
    users,
    onSend,
    initialAmount = 0
}) => {
    const [amount, setAmount] = useState<number>(initialAmount);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSend(amount);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Quick Transfer</h2>

            <div style={styles.usersContainer}>
                {users.map((user, index) => (
                    <div key={index} style={styles.userCard}>
                        <div style={styles.userInfo}>
                            <span style={styles.userName}>{user.name}</span>
                            <span style={styles.userRole}>{user.role}</span>
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.amountLabel}>
                    Write Amount
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(parseFloat(e.target.value))}
                        style={styles.amountInput}
                        step="0.01"
                    />
                </label>

                <button type="submit" style={styles.sendButton}>
                    Send
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '400px',
        margin: '20px auto',
        padding: '25px',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
    },
    title: {
        color: '#2d3436',
        marginBottom: '25px',
        fontSize: '1.5rem',
        textAlign: 'center' as const
    },
    usersContainer: {
        marginBottom: '25px',
        flexDirection: 'row'
    },
    userCard: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px',
        marginBottom: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        transition: '0.2s ease'
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column' as const,
        marginLeft: '15px'
    },
    userName: {
        fontWeight: '600',
        color: '#2d3436',
        fontSize: '0.95rem'
    },
    userRole: {
        color: '#636e72',
        fontSize: '0.85rem'
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '15px'
    },
    amountLabel: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '5px',
        color: '#2d3436',
        fontSize: '0.9rem'
    },
    amountInput: {
        padding: '12px',
        border: '1px solid #dfe6e9',
        borderRadius: '6px',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.2s ease',
    },
    sendButton: {
        padding: '12px',
        backgroundColor: '#0984e3',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease'
    }
};

export default QuickTransfer;