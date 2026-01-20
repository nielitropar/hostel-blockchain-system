# STEP-BY-STEP GUIDE

## ⏱️ Total Time: 30-45 minutes

---

## 📍 PHASE 1: SETUP METAMASK (10 minutes)

### Step 1: Install MetaMask
1. Go to **https://metamask.io**
2. Click **"Download"**
3. Install browser extension
4. Click **"Create a new wallet"**
5. **WRITE DOWN** your secret phrase (keep it safe!)
6. Set a password

### Step 2: Add Sepolia Network
1. Open MetaMask
2. Click network dropdown (says "Ethereum Mainnet")
3. Click **"Add network"**
4. Click **"Add a network manually"**
5. Fill in:
   - Network Name: `Sepolia`
   - RPC URL: `https://sepolia.infura.io/v3/`
   - Chain ID: `11155111`
   - Currency: `ETH`
6. Click **"Save"**
7. Switch to Sepolia network

### Step 3: Create 2 Accounts
1. Click your profile icon (top right)
2. Click **"Add account"**
3. Name it: `College`
4. Copy address (starts with 0x...)
5. Save it in notepad
6. Repeat: Add another account named `Student`
7. Save student address too

### Step 4: Get Free Test ETH
1. Go to **https://cloud.google.com/application/web3/faucet/ethereum/sepolia or https://sepoliafaucet.com**
2. Login with Google (free)
3. Paste your **College address**
4. Click **"Send Me ETH"**
5. Wait 1 minute
6. Repeat for **Student address**
7. Check MetaMask - both should have 0.5 ETH

---

## 📍 PHASE 2: DEPLOY SMART CONTRACT (10 minutes)

### Step 5: Open Remix
1. Go to **https://remix.ethereum.org**
2. Wait for it to load

### Step 6: Create Contract File
1. Left sidebar → Click **"contracts"** folder
2. Click **📄 icon** (create new file)
3. Name it: `HostelAllocation.sol`
4. **Copy-paste** the entire contract code (from the HostelAllocation.sol file I provided)

### Step 7: Compile Contract
1. Left sidebar → Click **🔨 icon** (Solidity Compiler)
2. Select version: **0.8.20**
3. Click **"Compile HostelAllocation.sol"**
4. Wait for ✅ green checkmark

### Step 8: Deploy Contract
1. Left sidebar → Click **🚀 icon** (Deploy & Run)
2. Environment: Select **"Injected Provider - MetaMask"**
3. MetaMask popup → Click **"Connect"**
4. Make sure **College account** is selected in MetaMask
5. In deploy box, type: `"0xYourCollegeAddress"` (with quotes!)
6. Click orange **"Deploy"** button
7. MetaMask popup → Click **"Confirm"**
8. Wait 20 seconds


<img width="1910" height="977" alt="image" src="https://github.com/user-attachments/assets/5ad8f96b-72bf-4a42-a4fe-0bd2c9d505e3" />


### Step 9: Save Contract Address
1. Look at **"Deployed Contracts"** section (bottom left)
2. You'll see your contract (with copy icon)
3. Click copy icon
4. **SAVE THIS ADDRESS** in notepad - you'll need it!




<img width="1917" height="865" alt="image" src="https://github.com/user-attachments/assets/453e9819-c8fe-4f86-a79e-76afdbe2ad1d" />



---

## 📍 PHASE 3: DOWNLOAD & SETUP PROJECT (5 minutes)

### Step 10: Create Project Folder
1. Create a folder on Desktop named: `hostel-app`
2. Inside it, create 2 folders: `templates` and `static`

### Step 11: Create Files
Copy the code I provided into these files:

**Main folder (`hostel-app/`):**
- Create `app.py` - paste the Flask code
- Create `requirements.txt` - paste dependencies

**templates folder (`hostel-app/templates/`):**
- Create `index.html` - paste HTML code

**static folder (`hostel-app/static/`):**
- Create `style.css` - paste CSS code
- Create `app.js` - paste JavaScript code

### Step 12: Update Contract Address
1. Open `app.py` in any text editor
2. Find line: `'contractAddress': 'YOUR_CONTRACT_ADDRESS_HERE',`
3. Replace with: `'contractAddress': '0xYourActualAddress',`
4. **Save** the file

---

## 📍 PHASE 4: TEST LOCALLY (5 minutes)

### Step 13: Install Python (if not installed)
1. Go to **https://python.org**
2. Download Python 3.10 or higher
3. **Important:** Check "Add Python to PATH" during installation

### Step 14: Install Dependencies
Open Command Prompt (Windows) or Terminal (Mac):

**Windows:**
```bash
cd Desktop\hostel-app
python -m pip install Flask flask-cors
```

**Mac/Linux:**
```bash
cd Desktop/hostel-app
pip3 install Flask flask-cors
```

### Step 15: Run App Locally
**Windows:**
```bash
python app.py
```

**Mac/Linux:**
```bash
python3 app.py
```

You should see:
```
* Running on http://127.0.0.1:5000
```

### Step 16: Test in Browser
1. Open browser
2. Go to: `http://127.0.0.1:5000`
3. Click **"Connect MetaMask"**
4. You should see your College address
5. **Test adding a room:**
   - Enter fee: `0.01`
   - Click "Add Room"
   - Confirm in MetaMask
6. Works? ✅ Great! Stop the server (Ctrl+C)

---

# Screenshots

College Admin View (only visible if metamask account is set to admin)


<img width="1212" height="705" alt="image" src="https://github.com/user-attachments/assets/b83880ec-c70f-41fe-8d48-29b5680fdf02" />


Student View (any other metamask account)


<img width="1208" height="688" alt="image" src="https://github.com/user-attachments/assets/a7096f53-a030-434a-9120-6d234a990000" />



## 📍 PHASE 5: DEPLOY TO PYTHONANYWHERE (10 minutes)

### Step 17: Create Account
1. Go to **https://www.pythonanywhere.com**
2. Click **"Pricing & signup"**
3. Click **"Create a Beginner account"** (FREE)
4. Enter username (remember this!)
5. Enter email & password
6. Verify email

### Step 18: Upload Files
1. Login to PythonAnywhere
2. Click **"Files"** tab
3. Click **"New directory"** → Name it: `hostel-app`
4. Click into `hostel-app` folder
5. Upload files **one by one**:
   - Click "Upload a file"
   - Upload `app.py`
   - Upload `requirements.txt`

### Step 19: Upload Templates
1. Still in `hostel-app` folder
2. Click **"New directory"** → Name it: `templates`
3. Click into `templates`
4. Upload `index.html`
5. Go back (click "hostel-app" at top)

### Step 20: Upload Static Files
1. Click **"New directory"** → Name it: `static`
2. Click into `static`
3. Upload `style.css`
4. Upload `app.js`

### Step 21: Install Dependencies
1. Click **"Consoles"** tab
2. Click **"Bash"**
3. Type:
```bash
cd hostel-app
pip3 install --user Flask flask-cors
```
4. Wait 1-2 minutes for installation

### Step 22: Create Web App
1. Click **"Web"** tab
2. Click **"Add a new web app"**
3. Click **"Next"**
4. Select **"Manual configuration"**
5. Choose **"Python 3.10"**
6. Click **"Next"**

### Step 23: Configure WSGI
1. In Web tab, find **"Code"** section
2. Click on WSGI file link (blue link)
3. **Delete everything**
4. Paste this (replace `yourusername` with YOUR username):

```python
import sys
import os

project_home = '/home/yourusername/hostel-app'
if project_home not in sys.path:
    sys.path.insert(0, project_home)

from app import app as application
```

5. Click **"Save"** (top right)

### Step 24: Set Static Files
1. Back to **"Web"** tab
2. Find **"Static files"** section
3. Click **"Enter URL"**
4. Enter: `/static/`
5. Click **"Enter path"**
6. Enter: `/home/yourusername/hostel-app/static/`
7. Click ✅

### Step 25: Reload Web App
1. Scroll to top of Web tab
2. Click big green **"Reload"** button
3. Wait 10 seconds

### Step 26: GO LIVE! 🎉
Your app is now live at:
```
https://yourusername.pythonanywhere.com
```

Open it in browser!

---

## 📍 PHASE 6: TEST YOUR LIVE APP (5 minutes)

### Step 27: Test as Admin (College)
1. Open your PythonAnywhere URL
2. Make sure **College account** selected in MetaMask
3. Click **"Connect MetaMask"**
4. You should see "🔑 Admin"
5. Add a room:
   - Fee: `0.01`
   - Click "Add Room"
   - Confirm in MetaMask
   - Wait 20 seconds
6. Room appears? ✅

### Step 28: Test as Student
1. In MetaMask, **switch to Student account**
2. Refresh webpage
3. You should see "🎓 Student"
4. Click **"Apply for Room"** on any room
5. MetaMask popup → Click **"Confirm"**
6. Wait 30 seconds
7. Check "My Room Allocation" - should show your room! ✅

### Step 29: Verify on Blockchain
1. Go to **https://sepolia.etherscan.io**
2. Paste your contract address
3. You should see all transactions!

---

## ✅ DONE! YOU'VE SUCCESSFULLY:

- ✅ Created a blockchain DApp
- ✅ Deployed smart contract on Ethereum
- ✅ Built a web application
- ✅ Deployed to internet (PythonAnywhere)
- ✅ Tested with real blockchain transactions

---

## 🆘 QUICK TROUBLESHOOTING

**Problem: Can't connect MetaMask**
- Solution: Make sure Sepolia network is selected

**Problem: "Insufficient funds"**
- Solution: Get more Sepolia ETH from faucet

**Problem: "Only admin allowed"**
- Solution: Switch to College account in MetaMask

**Problem: PythonAnywhere shows error**
- Solution: Check you replaced `yourusername` in WSGI file

**Problem: Can't see rooms**
- Solution: Make sure you added contract address in app.py

---

## 📸 TAKE SCREENSHOTS FOR SUBMISSION

1. MetaMask with both accounts
2. Remix contract deployment
3. Sepolia Etherscan transactions
4. Your live PythonAnywhere URL
5. Admin panel adding room
6. Student applying for room
7. Successful allocation

---

## 🎓 YOUR LINKS (Save These!)

```
Your Live App: https://yourusername.pythonanywhere.com
Contract Address: 0xYourContractAddress
Etherscan Link: https://sepolia.etherscan.io/address/0xYourContractAddress
```

---

**That's it! You're done! 🎉**

Need help? Check which step failed and try again from there.
