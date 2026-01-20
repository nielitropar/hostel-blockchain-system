# 🏢 Hostel Room Allocation System - Blockchain DApp

A complete blockchain-based hostel room allocation system built with Ethereum Smart Contracts (Solidity), Flask, and Web3.js. This decentralized application runs on the Sepolia testnet and allows administrators to add rooms and students to apply for and pay room fees securely on the blockchain.

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Part 1: Blockchain Setup (Sepolia Testnet)](#part-1-blockchain-setup-sepolia-testnet)
- [Part 2: Local Development Setup](#part-2-local-development-setup)
- [Part 3: PythonAnywhere Deployment](#part-3-pythonanywhere-deployment)
- [Testing the Application](#testing-the-application)
- [Troubleshooting](#troubleshooting)
- [Screenshots Guide](#screenshots-guide)

---

## ✨ Features

- 🔐 **MetaMask Integration** - Secure wallet connection
- 🏠 **Room Management** - Admin can add rooms with custom fees
- 💰 **Blockchain Payments** - Secure ETH payments on Sepolia testnet
- 👨‍🎓 **Student Portal** - Students can browse and apply for rooms
- 📊 **Real-time Updates** - Live room availability status
- 🔍 **Transparent** - All transactions verifiable on Etherscan
- 📱 **Responsive Design** - Works on desktop and mobile

---

## 🛠 Technology Stack

**Blockchain:**
- Solidity ^0.8.20 (Smart Contract)
- Ethereum Sepolia Testnet
- Web3.js (Blockchain interaction)
- MetaMask (Wallet)

**Backend:**
- Python 3.x
- Flask 3.0.0
- Flask-CORS 4.0.0

**Frontend:**
- HTML5
- CSS3
- Vanilla JavaScript

---

## 📁 Project Structure

```
hostel-blockchain-system/
│
├── app.py                      # Flask application
├── requirements.txt            # Python dependencies
├── HostelAllocation.sol        # Smart contract
│
├── templates/
│   └── index.html             # Main HTML template
│
├── static/
│   ├── style.css              # CSS styles
│   └── app.js                 # Frontend JavaScript
│
└── README.md                  # This file
```

---

## 📦 Prerequisites

Before starting, make sure you have:

1. **MetaMask Wallet** - Browser extension installed
2. **Sepolia Test ETH** - Free from faucets (we'll get this)
3. **Python 3.7+** - For local testing
4. **PythonAnywhere Account** - Free account for deployment
5. **Text Editor** - VS Code, Sublime, or any editor

---

## 🚀 Part 1: Blockchain Setup (Sepolia Testnet)

### Step 1.1: Install and Setup MetaMask

1. **Install MetaMask:**
   - Go to [https://metamask.io](https://metamask.io)
   - Click "Download" and install the browser extension
   - Follow setup wizard to create a new wallet
   - **IMPORTANT:** Save your Secret Recovery Phrase securely!

2. **Add Sepolia Network:**
   - Open MetaMask
   - Click network dropdown (top left)
   - Click "Add network" → "Add a network manually"
   - Enter these details:
     ```
     Network Name: Sepolia Test Network
     RPC URL: https://sepolia.infura.io/v3/
     Chain ID: 11155111
     Currency Symbol: SepoliaETH
     Block Explorer: https://sepolia.etherscan.io
     ```
   - Click "Save"
   - Switch to Sepolia Test Network

3. **Create Two Accounts:**
   - **Account 1 - College/Admin:**
     - Click your profile icon → "Add account"
     - Name it "College"
     - Copy and save the wallet address
   
   - **Account 2 - Student:**
     - Add another account
     - Name it "Student"
     - Copy and save the wallet address

### Step 1.2: Get Free Sepolia ETH

You need test ETH for both accounts:

**Option 1: Alchemy Faucet (Recommended)**
1. Go to [https://sepoliafaucet.com](https://sepoliafaucet.com)
2. Sign in with Alchemy (free account)
3. Paste your **College** address
4. Click "Send Me ETH"
5. Wait 30-60 seconds
6. Repeat for **Student** address

**Option 2: Alternative Faucets**
- [Google Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)
- [Sepolia PoW Faucet](https://sepolia-faucet.pk910.de/)
- [Infura Faucet](https://www.infura.io/faucet/sepolia)
- [QuickNode Faucet](https://faucet.quicknode.com/ethereum/sepolia)
- [Chainlink Faucet](https://faucets.chain.link/sepolia)

**Verify:** Check MetaMask - both accounts should have ~0.5 SepoliaETH

### Step 1.3: Deploy Smart Contract

1. **Open Remix IDE:**
   - Go to [https://remix.ethereum.org](https://remix.ethereum.org)
   - Wait for it to load

2. **Create Contract File:**
   - Click "File Explorer" icon (left sidebar)
   - Right-click on "contracts" folder
   - Click "New File"
   - Name it: `HostelAllocation.sol`
   - Copy the entire content from `HostelAllocation.sol` file and paste it

3. **Compile Contract:**
   - Click "Solidity Compiler" icon (left sidebar)
   - Select compiler version: **0.8.20**
   - Click "Compile HostelAllocation.sol"
   - Green checkmark = Success ✅

4. **Deploy to Sepolia:**
   - Click "Deploy & Run Transactions" icon (left sidebar)
   - Environment: Select **"Injected Provider - MetaMask"**
   - MetaMask will popup → Click "Connect"
   - Make sure **College account** is selected in MetaMask
   - In the "Deploy" section, enter your College wallet address in quotes:
     ```
     "0xYourCollegeAddressHere"
     ```
   - Click orange "Deploy" button
   - MetaMask popup → Review gas → Click "Confirm"
   - Wait 10-30 seconds

5. **Save Contract Address:**
   - In Remix, under "Deployed Contracts" section
   - Copy the contract address (starts with 0x...)
   - **SAVE THIS - YOU'LL NEED IT!**

6. **Add Some Rooms (Optional - for testing):**
   - Expand your deployed contract in Remix
   - Find `addRoom` function
   - Enter fee in Wei: `10000000000000000` (0.01 ETH)
   - Click "transact"
   - Confirm in MetaMask
   - Repeat to add 2-3 rooms with different fees

---

## 💻 Part 2: Local Development Setup

### Step 2.1: Download Project Files

1. Create a new folder on your computer:
   ```
   mkdir hostel-blockchain-system
   cd hostel-blockchain-system
   ```

2. Create the following files and paste the respective code:
   - `app.py` - Flask application
   - `requirements.txt` - Dependencies
   - Create `templates` folder with `index.html`
   - Create `static` folder with `style.css` and `app.js`

### Step 2.2: Configure Contract Address

1. Open `app.py`
2. Find this line:
   ```python
   'contractAddress': 'YOUR_CONTRACT_ADDRESS_HERE',
   ```
3. Replace with your actual contract address from Remix:
   ```python
   'contractAddress': '0xYourActualContractAddress',
   ```

### Step 2.3: Install Dependencies

**On Windows:**
```bash
python -m pip install -r requirements.txt
```

**On Mac/Linux:**
```bash
pip3 install -r requirements.txt
```

### Step 2.4: Run Locally

**On Windows:**
```bash
python app.py
```

**On Mac/Linux:**
```bash
python3 app.py
```

Open browser and go to: `http://127.0.0.1:5000`

**Test locally before deploying!**

---

## 🌐 Part 3: PythonAnywhere Deployment

### Step 3.1: Create PythonAnywhere Account

1. Go to [https://www.pythonanywhere.com](https://www.pythonanywhere.com)
2. Click "Pricing & signup"
3. Choose "Create a Beginner account" (FREE)
4. Enter username, email, password
5. Verify your email

### Step 3.2: Upload Files

**Method 1: Using File Browser (Recommended for beginners)**

1. **Login to PythonAnywhere**
2. **Go to Files tab**
3. **Navigate to:** `/home/yourusername/`
4. **Create project folder:**
   - Click "New directory"
   - Name it: `hostel-blockchain-system`
   - Click into the folder

5. **Upload files one by one:**
   - Click "Upload a file"
   - Upload `app.py`
   - Upload `requirements.txt`

6. **Create templates folder:**
   - Click "New directory"
   - Name it: `templates`
   - Click into it
   - Upload `index.html`
   - Go back to main folder

7. **Create static folder:**
   - Click "New directory"
   - Name it: `static`
   - Click into it
   - Upload `style.css`
   - Upload `app.js`

**Method 2: Using Git (If you know Git)**

1. Open "Consoles" tab
2. Click "Bash"
3. Run:
   ```bash
   git clone YOUR_GITHUB_REPO_URL
   cd hostel-blockchain-system
   ```

### Step 3.3: Install Dependencies

1. **Go to Consoles tab**
2. **Click "Bash"** to open a new console
3. **Navigate to your project:**
   ```bash
   cd hostel-blockchain-system
   ```

4. **Install requirements:**
   ```bash
   pip3 install --user -r requirements.txt
   ```

5. **Wait for installation to complete** (1-2 minutes)

### Step 3.4: Configure Web App

1. **Go to Web tab**
2. **Click "Add a new web app"**
3. **Choose:** "Manual configuration"
4. **Select:** Python 3.10 (or latest available)
5. **Click "Next"**

### Step 3.5: Configure WSGI File

1. **In Web tab, find "Code" section**
2. **Click on WSGI configuration file link**
   - It will be something like: `/var/www/yourusername_pythonanywhere_com_wsgi.py`

3. **Delete all existing code**

4. **Paste this code:**
   ```python
   import sys
   import os

   # Add your project directory to the sys.path
   project_home = '/home/yourusername/hostel-blockchain-system'
   if project_home not in sys.path:
       sys.path.insert(0, project_home)

   # Import your Flask app
   from app import app as application
   ```

5. **Replace `yourusername` with your actual PythonAnywhere username**

6. **Click "Save"** (top right)

### Step 3.6: Set Static Files

1. **In Web tab, find "Static files" section**
2. **Click "Enter URL" for first entry:**
   - URL: `/static/`
   - Directory: `/home/yourusername/hostel-blockchain-system/static/`

3. **Click the checkmark to save**

### Step 3.7: Update Contract Address

1. **Go to Files tab**
2. **Navigate to:** `/home/yourusername/hostel-blockchain-system/`
3. **Click on `app.py`** to edit
4. **Find line:**
   ```python
   'contractAddress': 'YOUR_CONTRACT_ADDRESS_HERE',
   ```
5. **Replace with your Sepolia contract address:**
   ```python
   'contractAddress': '0xYourActualSepoliaContractAddress',
   ```
6. **Click "Save"**

### Step 3.8: Reload Web App

1. **Go back to Web tab**
2. **Scroll to top**
3. **Click green "Reload" button**
4. **Wait 10-20 seconds**

### Step 3.9: Access Your Live App!

Your app is now live at:
```
https://yourusername.pythonanywhere.com
```

**Example:** If your username is `john123`, your URL is:
```
https://john123.pythonanywhere.com
```

---

## 🧪 Testing the Application

### Test 1: Admin Login (College Account)

1. Open your PythonAnywhere URL
2. Click "Connect MetaMask"
3. Make sure **College account** is selected in MetaMask
4. Approve connection
5. You should see "🔑 Admin" badge

### Test 2: Add Rooms

1. In Admin Panel, enter room fee: `0.01`
2. Click "Add Room"
3. Confirm transaction in MetaMask
4. Wait for confirmation
5. Room should appear in "Available Rooms" section
6. Add 2-3 more rooms with different fees

### Test 3: Student Application

1. In MetaMask, **switch to Student account**
2. Refresh the webpage
3. You should see "🎓 Student" badge
4. Click "Apply for Room" on any available room
5. MetaMask will popup with payment amount
6. Click "Confirm"
7. Wait for transaction confirmation
8. Room status should change to "Allocated"
9. Check "My Room Allocation" panel

### Test 4: Verify on Blockchain

1. Go to [https://sepolia.etherscan.io](https://sepolia.etherscan.io)
2. Paste your contract address
3. You should see:
   - Contract creation transaction
   - AddRoom transactions
   - ApplyForRoom transactions
4. Click on any transaction to see details

---

## 🔧 Troubleshooting

### Issue: "MetaMask not installed"
**Solution:** 
- Install MetaMask extension from [metamask.io](https://metamask.io)
- Refresh the page

### Issue: "Please switch to Sepolia testnet"
**Solution:**
- Open MetaMask
- Click network dropdown
- Select "Sepolia Test Network"
- If not listed, add it manually (see Step 1.1)

### Issue: "Insufficient funds for gas"
**Solution:**
- Get more Sepolia ETH from faucets
- Wait 24 hours if you've already used faucets recently

### Issue: "Only admin allowed"
**Solution:**
- Make sure College account is active in MetaMask
- Verify you deployed contract with this account

### Issue: "Internal Server Error" on PythonAnywhere
**Solution:**
1. Check error logs in PythonAnywhere Web tab
2. Go to Files tab → Navigate to `/var/log/`
3. Check latest error log
4. Common fixes:
   - Make sure all files are uploaded
   - Check WSGI file paths
   - Verify requirements are installed

### Issue: "Room already allocated"
**Solution:**
- This room is taken
- Choose a different room
- Or add more rooms as admin

### Issue: Contract address not showing
**Solution:**
1. Make sure you updated `app.py` with your contract address
2. Reload the web app
3. Clear browser cache

---

## 📸 Screenshots Guide

For academic submissions, take these screenshots:

### 1. MetaMask Setup
- Screenshot of Sepolia network added
- Screenshot of both accounts (College & Student)
- Screenshot showing Sepolia ETH balance

### 2. Smart Contract Deployment
- Screenshot of Remix compilation success
- Screenshot of deployment transaction
- Screenshot of deployed contract in Remix
- Screenshot of contract on Sepolia Etherscan

### 3. Admin Functions
- Screenshot of admin panel
- Screenshot of adding room transaction
- Screenshot of rooms list in admin view

### 4. Student Application
- Screenshot of student view
- Screenshot of room selection
- Screenshot of MetaMask payment confirmation
- Screenshot of successful allocation

### 5. Blockchain Verification
- Screenshot of contract on Etherscan
- Screenshot of transactions list
- Screenshot of specific transaction details

### 6. Live Application
- Screenshot of your PythonAnywhere URL
- Screenshot of full application interface
- Screenshot of mobile responsive view

---

## 📝 Project Report Sections

### Abstract
A brief summary of the blockchain-based hostel allocation system, its purpose, and key features.

### Introduction
- Problem statement
- Objectives
- Scope of the project

### Literature Review
- Study of existing hostel allocation systems
- Benefits of blockchain technology
- Ethereum and smart contracts overview

### System Design
- Architecture diagram
- Flowcharts for admin and student workflows
- Database schema (blockchain state)

### Implementation
- Technologies used
- Smart contract code explanation
- Frontend and backend integration
- Deployment process

### Testing
- Test cases
- Results with screenshots
- Transaction verification

### Results
- Application screenshots
- Blockchain transactions
- Performance analysis

### Conclusion
- Summary of achievements
- Limitations
- Future enhancements

### References
- Ethereum documentation
- Solidity documentation
- Web3.js documentation
- Flask documentation

---

## 🚀 Future Enhancements

- ✅ Room cancellation and refund system
- ✅ Multiple room types (AC/Non-AC, Single/Double)
- ✅ Student profile management
- ✅ Room availability calendar
- ✅ Payment history
- ✅ Email notifications
- ✅ Admin dashboard with analytics
- ✅ QR code for room verification
- ✅ Multi-signature admin approval
- ✅ Token-based rewards system

---

## 📚 Useful Resources

**Blockchain:**
- [Ethereum Official Docs](https://ethereum.org/en/developers/docs/)
- [Solidity Documentation](https://docs.soliditylang.org/)
- [Web3.js Documentation](https://web3js.readthedocs.io/)
- [Remix IDE Guide](https://remix-ide.readthedocs.io/)

**Testnet:**
- [Sepolia Etherscan](https://sepolia.etherscan.io)
- [Sepolia Faucet](https://sepoliafaucet.com)
- [Chainlink Faucet](https://faucets.chain.link/sepolia)

**Development:**
- [Flask Documentation](https://flask.palletsprojects.com/)
- [MetaMask Docs](https://docs.metamask.io/)
- [PythonAnywhere Help](https://help.pythonanywhere.com/)

**Converters:**
- [ETH to Wei Converter](https://eth-converter.com/)
- [Unit Converter](https://etherscan.io/unitconverter)

---

## 👨‍💻 Support

If you encounter issues:

1. **Check troubleshooting section** above
2. **Review error logs** in PythonAnywhere
3. **Verify MetaMask connection** and network
4. **Check contract address** is correct
5. **Ensure Sepolia ETH** balance is sufficient

---

## 📄 License

This project is created for educational purposes.

---

## 🎉 Congratulations!

You've successfully built and deployed a blockchain-based hostel allocation system!

**Achievement:**
- ✅ Deployed Ethereum smart contract
- ✅ Created full-stack DApp
- ✅ Integrated Web3 and MetaMask
- ✅ Deployed on PythonAnywhere
- ✅ Verified on blockchain explorer

---

**Project Created By:** Dr. Sarwan Singh 

**Date:** 20/01/2026  

**Institution:**  National Institute of Electronics & Information Technology, Ropar 

**Fields:** AIML/ IoT/ Blockchain Technology / Web Development

---

## Quick Links Summary

| Resource | URL |
|----------|-----|
| Live App | `https://yourusername.pythonanywhere.com` |
| Contract on Etherscan | `https://sepolia.etherscan.io/address/YOUR_CONTRACT` |
| MetaMask | https://metamask.io |
| Remix IDE | https://remix.ethereum.org |
| Sepolia Faucet | https://sepoliafaucet.com |
| PythonAnywhere | https://www.pythonanywhere.com |

---


**Last Updated:** 20 January 2026


