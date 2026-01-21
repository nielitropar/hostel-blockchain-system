# Hostel Room Allocation System — Overview

This document provides a complete overview of the Blockchain-based Hostel Room Allocation System, including setup, deployment, testing, verification, and screenshot placeholders to support academic documentation and project submissions.

---

## 1. Project Description

The Hostel Room Allocation System is a decentralized application (DApp) built on the Ethereum blockchain. It enables an administrator to add hostel rooms and students to apply and pay room fees using cryptocurrency on the Sepolia Test Network. The frontend uses MetaMask for wallet authentication, and blockchain operations are conducted via smart contracts written in Solidity.

---

## 2. Key Features

* MetaMask wallet authentication
* Blockchain-based fee payment
* Admin-controlled room creation
* Student room application workflow
* On-chain verification via Etherscan
* Deployment on PythonAnywhere

---

## 3. Architecture Overview

```mermaid
graph TD
A[Student / Admin Browser] --> B[Frontend Web3.js]
B --> C[MetaMask Wallet]
C --> D[Ethereum Sepolia Testnet]
D -->|Smart Contract| E[HostelAllocation.sol]
B --> F[Flask Backend]
F --> G[PythonAnywhere Hosting]
```

---

## 4. Technology Stack

**Blockchain Layer**

* Ethereum Sepolia
* Solidity ^0.8.20
* MetaMask
* Web3.js

**Backend Layer**

* Python 3.x
* Flask 3.0
* Flask‑CORS

**Frontend Layer**

* HTML / CSS / JS

**Deployment**

* PythonAnywhere

---

## 5. System Requirements

| Requirement    | Description                |
| -------------- | -------------------------- |
| Wallet         | MetaMask Browser Extension |
| Test ETH       | Sepolia ETH Faucet         |
| Python Version | Python 3.7+                |
| Hosting        | PythonAnywhere (Free)      |
| IDE            | VS Code / Sublime / Any    |

---

## 6. Blockchain Setup Steps

### 6.1 MetaMask Installation

1. Install MetaMask from metamask.io
2. Create wallet
3. Secure secret recovery phrase

**Screenshot:**

```
<img width="1919" height="1029" alt="image" src="https://github.com/user-attachments/assets/d40118f0-c9a6-4f3d-9809-bf5c569749db" />

```

---

### 6.2 Add Sepolia Network

Configure network:

```
Network: Sepolia Test Network
RPC: https://sepolia.infura.io/v3/
ChainID: 11155111
Symbol: SepoliaETH
Block Explorer: https://sepolia.etherscan.io
```

**Screenshot:**

```

<img width="389" height="672" alt="image" src="https://github.com/user-attachments/assets/e69ab5fd-2b16-4a1a-8756-b7db91b9a5ce" />

```

---

### 6.3 Faucet Funding

Use recommended faucet:

<img width="401" height="631" alt="image" src="https://github.com/user-attachments/assets/fb508057-8fb7-4a52-a5fb-f75bd5c16c9b" />

<img width="395" height="639" alt="image" src="https://github.com/user-attachments/assets/5307d2f7-c5e9-4144-85fa-3cc13d3369a6" />

<img width="869" height="495" alt="image" src="https://github.com/user-attachments/assets/e34ea684-6833-44f3-86c8-0d4a50139db9" />


* [https://sepolia-faucet.pk910.de/](https://sepolia-faucet.pk910.de/)

* [https://cloud.google.com/application/web3/faucet/ethereum/sepolia](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)


Fund **College** and **Student** accounts.

**Screenshot:**

```
<img width="512" height="858" alt="image" src="https://github.com/user-attachments/assets/f336f51e-423e-47f6-a710-e6d65f065072" />

<img width="509" height="742" alt="image" src="https://github.com/user-attachments/assets/97838ad4-4440-4b67-a864-6804f6d6926d" />

<img width="670" height="309" alt="image" src="https://github.com/user-attachments/assets/01d95bc9-9c67-4117-a124-9177e85e585e" />

<img width="666" height="435" alt="image" src="https://github.com/user-attachments/assets/43bd59a9-80be-4135-9149-c162594efa09" />

<img width="1395" height="804" alt="image" src="https://github.com/user-attachments/assets/f2add7fe-1d94-48a6-8092-92d399060427" />


```

---

### 6.4 Smart Contract Deployment

Steps using Remix IDE:

1. Open remix.ethereum.org
2. Create `HostelAllocation.sol`
3. Compile using v0.8.20
4. Deploy using Injected Provider (MetaMask)
5. Save contract address

**Screenshot Placeholders:**

```
<img width="1839" height="954" alt="image" src="https://github.com/user-attachments/assets/a27c696c-00c8-49e9-8857-9aef080ecc43" />
<img width="1246" height="918" alt="image" src="https://github.com/user-attachments/assets/95eb6075-986d-4013-8f2e-08b760f7b3c5" />
<img width="1470" height="921" alt="image" src="https://github.com/user-attachments/assets/f338bed1-7d6b-4425-9973-a8e33ce1868b" />
<img width="1832" height="908" alt="image" src="https://github.com/user-attachments/assets/71dad23e-3d91-4439-95cb-19c99a4ea2de" />
<img width="1793" height="878" alt="image" src="https://github.com/user-attachments/assets/e8ac04f3-fb3f-4334-af7c-5d66d8af1aab" />
<img width="771" height="906" alt="image" src="https://github.com/user-attachments/assets/ec580a8c-615a-4b24-9629-c03873ae87ad" />
<img width="1794" height="859" alt="image" src="https://github.com/user-attachments/assets/c7a1e062-ff45-4cd0-8599-00440051f245" />

![Screenshot: Transaction Confirmed](screenshots/tx-confirm.png)
![Screenshot: Contract on Etherscan](screenshots/etherscan-contract.png)
```

---

## 7. Local Development Setup

### Project Structure

```
hostel-blockchain-system/
├── app.py
├── requirements.txt
├── HostelAllocation.sol
├── templates/
│   └── index.html
├── static/
│   ├── style.css
│   └── app.js
└── README.md
```

### Running Locally

```
pip install -r requirements.txt
python app.py
```

Open: `http://127.0.0.1:5000`

**Screenshot:**

```
![Screenshot: Local Application Running](screenshots/local-run.png)
```

---

## 8. Deployment on PythonAnywhere

### 8.1 File Upload

Upload via File Browser into:

```
/home/<username>/hostel-blockchain-system
```

### 8.2 Install Dependencies

```
pip3 install --user -r requirements.txt
```

### 8.3 WSGI Configuration

Set WSGI file to:

```python
project_home='/home/<username>/hostel-blockchain-system'
sys.path.insert(0, project_home)
from app import app as application
```

### 8.4 Static Mapping

```
URL: /static/
Dir: /home/<username>/hostel-blockchain-system/static/
```

### 8.5 Reload Web App

Open final application:

```
https://<username>.pythonanywhere.com
```

**Screenshot:**

```
![Screenshot: Live Deployment](screenshots/live-app.png)
```

---

## 9. Application Workflow Testing

### 9.1 Admin Flow

1. Connect MetaMask
2. Select College account
3. Add Room (fee in ETH)

**Screenshot Placeholders:**

```
![Screenshot: Admin Adding Room](screenshots/add-room.png)
![Screenshot: Room Added](screenshots/room-added.png)
```

---

### 9.2 Student Flow

1. Switch MetaMask to Student account
2. Apply for Room
3. Confirm blockchain payment
4. Allocation visible

**Screenshot:**

```
![Screenshot: Student Applying](screenshots/apply-room.png)
![Screenshot: MetaMask Payment](screenshots/payment.png)
![Screenshot: Allocation Success](screenshots/allocated.png)
```

---

## 10. Blockchain Verification

Verify on Etherscan:

* Contract creation
* addRoom()
* applyForRoom()

**Screenshot:**

```
![Screenshot: Etherscan Transactions](screenshots/etherscan-tx.png)
```

---

## 11. Academic Reporting Sections

Includes:

* Abstract
* Introduction
* Literature Review
* System Design
* Implementation
* Testing
* Results
* Conclusion
* References

---

## 12. Future Enhancements

* Refund workflows
* Room category management
* Analytics dashboard
* Notification system
* Token reward scheme

---

## 13. Final Deliverables Summary

| Deliverable               | Status      |
| ------------------------- | ----------- |
| Smart Contract            | Completed   |
| DApp Frontend             | Completed   |
| Flask Backend             | Completed   |
| PythonAnywhere Deployment | Completed   |
| Blockchain Verification   | Completed   |
| Academic Documentation    | In Progress |
| Screenshot Placeholders   | Completed   |

---

## 14. Last Updated

20 January 2026
