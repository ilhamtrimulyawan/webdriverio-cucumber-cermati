# WebdriverIO Cucumber Automation for Cermati Registration

## 📌 Project Overview
This project automates the registration process on [Cermati](https://www.cermati.com/gabung) using **WebdriverIO** and **Cucumber**.

### ✅ Test Scenario:
- Open the registration page.
- Fill in all required fields (positive test cases only).
- Submit the registration form.
- Verify successful navigation to the OTP verification page.

## 🛠 Technology Stack
- **WebdriverIO** - Test Automation Framework
- **Cucumber.js** - Behavior-Driven Development
- **Node.js** - JavaScript Runtime

---

## 🚀 Setup Instructions

### 1️⃣ Install Dependencies
Ensure you have **Node.js** installed, then run:
```sh
npm install
```

### 2️⃣ Run the Tests
To execute the test cases, use:
```sh
npx wdio run wdio.conf.js
```

To run tests by tag:
```sh
npx wdio run wdio.conf.js --cucumberOpts.tagExpression='@register'
```


---

## 🔐 Handling OTP & reCAPTCHA
- **OTP Verification:** The test ensures the user lands on the OTP page and verifies the correct phone number is displayed.
- **Bypassing reCAPTCHA:** 
  - Use predefined test credentials to avoid reCAPTCHA triggers.
  - If required, use **mocking or session cookies** to bypass manual interaction.

---

## 🔄 Future Improvements
- Add more test cases for edge cases and negative scenarios.
- Integrate with CI/CD for automated execution.
- Implement API testing for backend validation.

---

## 📜 License
This project is for educational purposes and should not be used for malicious activities.

---

## 📷 Screenshots
https://docs.google.com/document/d/1tMfMjn4jRUL6j4ahgSetyOl4uCV_6ve6a5v5GrSAfBQ/edit?tab=t.0
