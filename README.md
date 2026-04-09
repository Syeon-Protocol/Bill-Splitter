# 💸 Bill Splitter Web App

A clean, responsive web application that helps users split restaurant bills or shared expenses fairly among group members, including an optional tip calculation.

---

## 📸 Preview

The application features a minimalist, centered UI with a soft color palette and responsive input fields.

## 🚀 Features

* **Real-time Calculation**: Instant results upon clicking the "Proceed" button.
* **Tip Inclusion**: Option to add a tip amount to the total before splitting.
* **Input Validation**: 
    * Ensures members and amount are positive numbers.
    * Handles empty tip fields by defaulting to ₹0.
    * Prevents calculation if required fields are invalid.
* **Clean UI**: Built with a flexbox layout for a centered, modern look.
* **Responsive Design**: Works across different screen sizes.

---

## 🛠️ Technology Stack

* **HTML5**: Semantic structure.
* **CSS3**: Custom styling with Flexbox for layout and interactive hover states.
* **JavaScript (ES6)**: DOM manipulation and arithmetic logic.

---

## 📖 How to Use

1.  **Clone the project** or copy the files to your local machine.
2.  Open `index.html` in any modern web browser.
3.  **Enter details**:
    * Number of members sharing the bill.
    * The total bill amount.
    * The tip amount (optional).
4.  Click **Proceed** to see the "Each person pays" result.

---

## 🧮 Calculation Logic

The app uses the following formula to determine the individual share:

$$\text{Individual Share} = \frac{\text{Amount} + \text{Tip}}{\text{Members}}$$

The final result is formatted to two decimal places (e.g., ₹250.50) to ensure financial precision.

---

## 📂 Project Structure

```text
├── index.html   # Main structure and UI
├── style.css    # Flexbox layout and styling
└── script.js    # Logic for calculation and validation
