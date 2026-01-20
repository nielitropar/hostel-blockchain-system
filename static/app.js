// Global Variables
let web3;
let contract;
let userAccount;
let contractConfig;

// DOM Elements
const connectButton = document.getElementById('connectWallet');
const walletInfo = document.getElementById('walletInfo');
const userAddressSpan = document.getElementById('userAddress');
const userRoleSpan = document.getElementById('userRole');
const adminPanel = document.getElementById('adminPanel');
const studentPanel = document.getElementById('studentPanel');
const roomsGrid = document.getElementById('roomsGrid');
const loadingRooms = document.getElementById('loadingRooms');
const noRooms = document.getElementById('noRooms');
const contractAddressSpan = document.getElementById('contractAddress');
const alertContainer = document.getElementById('alertContainer');

// Initialize on Load
window.addEventListener('load', async () => {
    try {
        // 1. Fetch Configuration from Flask Backend
        const response = await fetch('/api/config');
        contractConfig = await response.json();

        // Display Contract Address in Footer
        contractAddressSpan.innerText = contractConfig.contractAddress;

        // 2. Check if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            web3 = new Web3(window.ethereum);

            // Check if already connected
            const accounts = await web3.eth.getAccounts();
            if (accounts.length > 0) {
                handleLogin(accounts[0]);
            }
        } else {
            showAlert('MetaMask is not installed. Please install it to use this DApp.', 'error');
        }
    } catch (error) {
        console.error("Initialization Error:", error);
        showAlert('Failed to load configuration.', 'error');
    }
});

// Connect Wallet Button
connectButton.addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            handleLogin(accounts[0]);
        } catch (error) {
            console.error(error);
            showAlert('Connection rejected by user.', 'warning');
        }
    } else {
        showAlert('Please install MetaMask!', 'error');
    }
});

// Handle Login State
async function handleLogin(address) {
    userAccount = address;

    // Update UI
    connectButton.style.display = 'none';
    walletInfo.style.display = 'block';
    userAddressSpan.innerText = `${address.substring(0, 6)}...${address.substring(38)}`;

    // Initialize Contract
    contract = new web3.eth.Contract(contractConfig.contractABI, contractConfig.contractAddress);

    // Check Role (Admin vs Student)
    await checkRole();

    // Load Data
    loadRooms();
    loadMyAllocation();
}

// Check User Role
async function checkRole() {
    try {
        const adminAddress = await contract.methods.admin().call();
        if (userAccount.toLowerCase() === adminAddress.toLowerCase()) {
            userRoleSpan.innerText = '🔑 Admin';
            userRoleSpan.className = 'role-badge admin';
            adminPanel.style.display = 'block';
        } else {
            userRoleSpan.innerText = '🎓 Student';
            userRoleSpan.className = 'role-badge student';
            studentPanel.style.display = 'block';
        }
    } catch (error) {
        console.error("Role Check Error:", error);
    }
}

// Load Rooms
async function loadRooms() {
    loadingRooms.style.display = 'block';
    roomsGrid.innerHTML = '';
    noRooms.style.display = 'none';

    try {
        const roomCount = await contract.methods.roomCount().call();

        if (roomCount == 0) {
            loadingRooms.style.display = 'none';
            noRooms.style.display = 'block';
            return;
        }

        for (let i = 1; i <= roomCount; i++) {
            const room = await contract.methods.getRoom(i).call();
            // room[0] = id, room[1] = fee, room[2] = isAllocated

            const roomId = room[0];
            const feeWei = room[1];
            const isAllocated = room[2];
            const feeEth = web3.utils.fromWei(feeWei, 'ether');

            createRoomCard(roomId, feeEth, isAllocated, feeWei);
        }
        loadingRooms.style.display = 'none';
    } catch (error) {
        console.error("Load Rooms Error:", error);
        loadingRooms.style.display = 'none';
    }
}

// Create Room Card HTML
function createRoomCard(id, fee, isAllocated, feeWei) {
    const card = document.createElement('div');
    card.className = `room-card ${isAllocated ? 'allocated' : ''}`;

    const statusClass = isAllocated ? 'allocated' : 'available';
    const statusText = isAllocated ? 'Occupied' : 'Available';
    const btnDisabled = isAllocated ? 'disabled' : '';
    const btnText = isAllocated ? 'Taken' : 'Apply for Room';

    card.innerHTML = `
        <div class="room-header">
            <span class="room-number">Room #${id}</span>
            <span class="room-status ${statusClass}">${statusText}</span>
        </div>
        <div class="room-fee">${fee} ETH</div>
        <div class="room-fee-label">Per Semester</div>
        <button class="btn btn-primary" onclick="applyForRoom(${id}, '${feeWei}')" ${btnDisabled}>
            ${btnText}
        </button>
    `;
    roomsGrid.appendChild(card);
}

// Admin: Add Room
document.getElementById('addRoomForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const feeEth = document.getElementById('roomFee').value;

    if (!feeEth || feeEth <= 0) {
        showAlert("Please enter a valid fee.", "warning");
        return;
    }

    const feeWei = web3.utils.toWei(feeEth.toString(), 'ether');

    try {
        showAlert("Please confirm transaction in MetaMask...", "info");
        await contract.methods.addRoom(feeWei).send({ from: userAccount });
        showAlert("Room added successfully!", "success");
        document.getElementById('addRoomForm').reset();
        loadRooms(); // Refresh list
    } catch (error) {
        console.error(error);
        showAlert("Transaction failed!", "error");
    }
});

// Student: Apply for Room
window.applyForRoom = async (roomId, feeWei) => {
    try {
        showAlert("Please confirm payment in MetaMask...", "info");
        await contract.methods.applyForRoom(roomId).send({
            from: userAccount,
            value: feeWei
        });
        showAlert(`Successfully allocated Room #${roomId}!`, "success");
        loadRooms();
        loadMyAllocation();
    } catch (error) {
        console.error(error);
        showAlert("Transaction failed or rejected.", "error");
    }
};

// Student: Load My Allocation
async function loadMyAllocation() {
    try {
        const result = await contract.methods.getMyAllocation().call({ from: userAccount });
        const myRoomId = result[0];
        const isAllocated = result[1];

        const container = document.getElementById('myAllocation');

        if (isAllocated) {
            container.innerHTML = `
                <h3>🎉 You have a room!</h3>
                <p>Your allocated room number is:</p>
                <div class="allocation-room">#${myRoomId}</div>
            `;
            container.className = 'allocation-info allocated';
        } else {
            container.innerHTML = `
                <h3>Not Allocated Yet</h3>
                <p>Browse the available rooms above and apply.</p>
            `;
            container.className = 'allocation-info';
        }
    } catch (error) {
        console.error("Allocation Load Error:", error);
    }
}

// UI Helper: Show Alerts
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerText = message;

    alertContainer.appendChild(alertDiv);

    // Remove after 3 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Refresh Button
document.getElementById('refreshRooms').addEventListener('click', loadRooms);

// MetaMask Account Change Listener
if (window.ethereum) {
    window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
            window.location.reload();
        } else {
            window.location.reload();
        }
    });
}
