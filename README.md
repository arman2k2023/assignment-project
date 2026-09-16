# 🚀 Dev Stack

A simple and modern **Technology Stack Manager** built with **React and TypeScript**.

This project allows users to explore different technologies and add their favorite technologies to their personal stack.

## 🛠️ Technologies Used

* ⚛️ React
* 🔷 TypeScript
* 🎨 Tailwind CSS
* ⚡ Vite
* 📄 JSON Data
* 🪝 React Hooks (`useState`, `useEffect`)

## ✨ Features

### 1. Browse Technologies

Users can see a list of different technologies with their names and information.

### 2. Add to My Stack

Users can add technologies they want to use to their personal technology stack.

### 3. Remove from My Stack

Users can remove technologies from their personal stack whenever they want.

---

# ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It makes React UI code easier to read and write.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data inside a React component.

I used it to store and manage the technologies added to **My Stack**.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs some code after the component renders.

I used it to load the technology JSON data when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list.

It helps React efficiently update, add, or remove list items.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, when the stack is empty, I show an empty stack message.

```tsx
{stack.length === 0 && (
  <p>Your stack is empty.</p>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

A child can send data back to the parent by calling a **callback function** that the parent passes as a prop.
