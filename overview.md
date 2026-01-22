# 🏢 Hostel Room Allocation System: Project Overview

**Institution:** National Institute of Electronics & Information Technology, Ropar

**Project Type:** Blockchain DApp (Decentralized Application)

**Network:** Ethereum Sepolia Testnet

---

## 📖 1. Project Abstract

This project is a decentralized application (DApp) designed to automate the allocation of hostel rooms. Built on the **Ethereum Blockchain**, it eliminates the need for manual record-keeping by using **Smart Contracts** to handle room availability and fee payments securely.

**Core Functionality:**

* **Admins** can add rooms to the blockchain.
* **Students** can view available rooms and book them by paying ETH.
* **Transparency:** All transactions are immutable and verifiable on Etherscan.

---

## 🏗️ 2. System Architecture

The system connects a standard web frontend to the Ethereum blockchain via Web3.js.

```mermaid
graph TD
    User["User (Student/Admin)"] -->|Browser| Frontend["HTML/CSS/JS Interface"]
    Frontend -->|Web3.js| Wallet["MetaMask Wallet"]
    Wallet -->|Sign Transaction| Blockchain["Ethereum Sepolia Network"]
    Blockchain -->|Execute Code| Contract["HostelAllocation.sol"]
    Frontend -->|Fetch Config| Backend["Flask Python App"]
    Backend -->|Hosted On| Server["PythonAnywhere"]

```

---

## 🛠️ 3. Technology Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| **Blockchain** | Solidity ^0.8.20 | Writing the Smart Contract logic. |
| **Network** | Sepolia Testnet | Testing environment for free ETH transactions. |
| **Wallet** | MetaMask | Browser extension to sign transactions. |
| **Backend** | Python Flask | Serving the web app and configuration. |
| **Frontend** | HTML5, CSS3, JS | User interface for Admins and Students. |
| **Hosting** | PythonAnywhere | Live deployment of the web application. |

---

## 🚀 4. Step-by-Step Implementation Guide

Follow these phases to set up, deploy, and test the system.

### 📍 Phase 1: Wallet & Network Setup

**Goal:** Prepare your browser to interact with the Blockchain.

1. **Install MetaMask:** Download the extension from [metamask.io](https://metamask.io).
2. **Create Two Accounts:**
* **Account 1:** Name it "College Admin"
* **Account 2:** Name it "Student"


3. **Add Sepolia Network:** If not visible, add it manually via Settings > Networks.

#### 📸 Screenshot: MetaMask Installation

<img width="1919" height="1029" alt="MetaMask Installation" src="https://github.com/user-attachments/assets/d40118f0-c9a6-4f3d-9809-bf5c569749db" />

#### 📸 Screenshot: Configuring Sepolia Network

<img width="389" height="672" alt="Sepolia Configuration" src="https://github.com/user-attachments/assets/e69ab5fd-2b16-4a1a-8756-b7db91b9a5ce" />

---

### 📍 Phase 2: Funding Your Wallet (Faucets)

**Goal:** Get free "Test ETH" to pay for gas fees. You cannot run the app without this.

1. Visit a faucet (e.g., [Google Web3 Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia) or [Sepolia PoW Faucet](https://sepolia-faucet.pk910.de/)).
2. Enter your **College Admin** address and request funds.
3. Repeat for your **Student** address.

#### 📸 Screenshot: Faucet Interfaces

<img width="401" height="631" alt="Faucet 1" src="https://github.com/user-attachments/assets/fb508057-8fb7-4a52-a5fb-f75bd5c16c9b](https://github.com/user-attachments/assets/fb508057-8fb7-4a52-a5fb-f75bd5c16c9b" />
<img width="395" height="639" alt="Faucet 2" src="https://github.com/user-attachments/assets/5307d2f7-c5e9-4144-85fa-3cc13d3369a6](https://github.com/user-attachments/assets/5307d2f7-c5e9-4144-85fa-3cc13d3369a6)" />
<img width="869" height="495" alt="Faucet 3" src="https://github.com/user-attachments/assets/e34ea684-6833-44f3-86c8-0d4a50139db9](https://github.com/user-attachments/assets/e34ea684-6833-44f3-86c8-0d4a50139db9" />

#### 📸 Screenshot: Successful Funding Verification

<img width="512" height="858" alt="Wallet Balance 1" src="https://github.com/user-attachments/assets/f336f51e-423e-47f6-a710-e6d65f065072](https://github.com/user-attachments/assets/f336f51e-423e-47f6-a710-e6d65f065072" />
<img width="509" height="742" alt="Wallet Balance 2" src="https://github.com/user-attachments/assets/97838ad4-4440-4b67-a864-6804f6d6926d](https://github.com/user-attachments/assets/97838ad4-4440-4b67-a864-6804f6d6926d" />

---

### 📍 Phase 3: Smart Contract Deployment

**Goal:** Upload the `HostelAllocation.sol` code to the Blockchain using Remix IDE.

1. Open [Remix IDE](https://remix.ethereum.org).
2. Create a new file `HostelAllocation.sol` and paste the code.
3. Compile using version `0.8.20`.
4. **Deploy:**
* Environment: Select **Injected Provider - MetaMask**.
* Make sure you are on the **College Admin** account.
* Click **Deploy**.


5. **Copy Address:** Copy the deployed contract address (starts with `0x...`) for the next phase.

#### 📸 Screenshot: Remix IDE - Creating the File

<img width="1839" height="954" alt="Create File" src="https://github.com/user-attachments/assets/a27c696c-00c8-49e9-8857-9aef080ecc43](https://github.com/user-attachments/assets/a27c696c-00c8-49e9-8857-9aef080ecc43" />

#### 📸 Screenshot: Compiling the Code

<img width="1246" height="918" alt="Compile Code" src="https://github.com/user-attachments/assets/95eb6075-986d-4013-8f2e-08b760f7b3c5](https://github.com/user-attachments/assets/95eb6075-986d-4013-8f2e-08b760f7b3c5" />

#### 📸 Screenshot: Selecting Injected Provider (MetaMask)

<img width="1470" height="921" alt="Injected Provider" src="https://github.com/user-attachments/assets/f338bed1-7d6b-4425-9973-a8e33ce1868b](https://github.com/user-attachments/assets/f338bed1-7d6b-4425-9973-a8e33ce1868b" />

#### 📸 Screenshot: Deployment Transaction

<img width="1832" height="908" alt="Deploy Transaction" src="https://github.com/user-attachments/assets/71dad23e-3d91-4439-95cb-19c99a4ea2de](https://github.com/user-attachments/assets/71dad23e-3d91-4439-95cb-19c99a4ea2de" />
<img width="1793" height="878" alt="Confirm Deploy" src="https://github.com/user-attachments/assets/e8ac04f3-fb3f-4334-af7c-5d66d8af1aab](https://github.com/user-attachments/assets/e8ac04f3-fb3f-4334-af7c-5d66d8af1aab" />

#### 📸 Screenshot: Copying the Contract Address

<img width="771" height="906" alt="Copy Address" src="https://github.com/user-attachments/assets/ec580a8c-615a-4b24-9629-c03873ae87ad](https://github.com/user-attachments/assets/ec580a8c-615a-4b24-9629-c03873ae87ad" />

---

### 📍 Phase 4: Local Application Setup

**Goal:** Connect the Python Flask frontend to your deployed contract.

1. Update `app.py`: Replace `contractAddress` with the address you copied from Remix.
2. Install requirements: `pip install -r requirements.txt`.
3. Run the app: `python app.py`.
4. Open `http://127.0.0.1:5000` in your browser.

#### 📸 Screenshot: Application Running Locally

<img width="1642" height="877" alt="Localhost Running" src="https://github.com/user-attachments/assets/319f8ca4-025a-4c4c-93cf-ded60c54acc2](https://github.com/user-attachments/assets/319f8ca4-025a-4c4c-93cf-ded60c54acc2" />

---

### 📍 Phase 5: Testing the Workflow

#### A. Admin Workflow (College Account)

Only the wallet that deployed the contract can see the "Add Room" panel.

1. Connect Wallet -> Select "College Admin".
2. Enter Fee (e.g., 0.01 ETH) -> Click **Add Room**.
3. Confirm transaction in MetaMask.

**📸 Screenshot: Admin Dashboard (Authorized View)**
<img width="1243" height="755" alt="Admin View" src="https://github.com/user-attachments/assets/82e04457-cbdb-485a-9a6e-5d66952fe6cd](https://github.com/user-attachments/assets/82e04457-cbdb-485a-9a6e-5d66952fe6cd" />

**📸 Screenshot: Admin Adding a Room**
<img width="1585" height="890" alt="Adding Room" src="https://github.com/user-attachments/assets/ccb446da-152c-4886-b78d-86f75efc0d02](https://github.com/user-attachments/assets/ccb446da-152c-4886-b78d-86f75efc0d02" />

**📸 Screenshot: Room Successfully Listed**
<img width="1246" height="766" alt="Room Added" src="https://github.com/user-attachments/assets/2a112e64-9154-4300-b99a-cdf10c6c0f39](https://github.com/user-attachments/assets/2a112e64-9154-4300-b99a-cdf10c6c0f39" />

---

#### B. Student Workflow (Public Account)

Any other wallet connects as a Student. They cannot add rooms; they can only apply.

1. Switch MetaMask to "Student Account".
2. Refresh page -> Admin panel disappears.
3. Click **Apply for Room**.
4. Pay the fee via MetaMask.

**📸 Screenshot: Student Dashboard (Restricted View)**
<img width="1422" height="830" alt="Student View" src="https://github.com/user-attachments/assets/d67a0769-0b2d-4a4b-872d-ba6da2165eeb](https://github.com/user-attachments/assets/d67a0769-0b2d-4a4b-872d-ba6da2165eeb" />

**📸 Screenshot: Student Applying for Room**
<img width="1609" height="886" alt="Apply Button" src="https://github.com/user-attachments/assets/c63ba60d-32bb-4152-962c-4a11116570ef](https://github.com/user-attachments/assets/c63ba60d-32bb-4152-962c-4a11116570ef" />

**📸 Screenshot: Successful Allocation**
<img width="1222" height="850" alt="Success Message" src="https://github.com/user-attachments/assets/69eadac5-bf4d-430d-89c9-e15f053ee1d8](https://github.com/user-attachments/assets/69eadac5-bf4d-430d-89c9-e15f053ee1d8" />

---

### 📍 Phase 6: Live Deployment (PythonAnywhere)

**Goal:** Host the application on the public internet.

1. Upload project files to PythonAnywhere.
2. Install dependencies in the Bash console.
3. Configure WSGI file to point to your `app.py`.
4. Disable CORS in `app.py` (as per code comments).
5. Reload the web app.

#### 📸 Screenshot: Live Site on PythonAnywhere

<img width="1632" height="933" alt="PythonAnywhere Deployment" src="https://github.com/user-attachments/assets/6016b510-b9c0-43c1-b398-384fa2c9c448](https://github.com/user-attachments/assets/6016b510-b9c0-43c1-b398-384fa2c9c448" />

---

## 🔍 5. Blockchain Verification

Every action taken in the app is permanently recorded on the blockchain. You can verify this using the Etherscan Block Explorer.

**What to look for:**

* **Contract Creation:** The first transaction deploying the code.
* **Method `addRoom`:** Transactions where Admin added inventory.
* **Method `applyForRoom`:** Transactions where Students paid fees.

#### 📸 Screenshot: Etherscan Transaction Log

<img width="1818" height="1021" alt="Etherscan Logs" src="https://github.com/user-attachments/assets/099b88a2-ab34-431f-b786-82ba2524fd54](https://github.com/user-attachments/assets/099b88a2-ab34-431f-b786-82ba2524fd54" />

---

## 🔮 6. Future Enhancements

To further improve this system, the following features are proposed:

1. **Refund System:** Allow students to cancel bookings and receive partial refunds.
2. **Room Categories:** Distinguish between AC and Non-AC rooms with different fees.
3. **Waitlists:** Allow students to queue for fully booked rooms.
4. **Token Rewards:** Issue utility tokens to students for timely payments.

---

## 📜 7. License & Credits

**Developed By:** Dr. Sarwan Singh
**Institution:** National Institute of Electronics & Information Technology, Ropar
**License:** MIT License
**Date:** January 2026
