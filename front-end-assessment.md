# **React JS Front-End Developer Coding Assessment**

---

## **Task 1: Build a Todo List App**

**Objective**: Create a simple todo list application that allows users to add, edit, delete, and mark items as completed.

**Requirements**:

- Users can add new todo items (with a title and optional description).
- Users can mark items as completed (toggle between completed and not completed).
- Users can edit the title and description of any todo.
- Users can delete todo items.
- Display a list of todos with their status (completed or not).
- Use React hooks (`useState`, `useEffect`, etc.) and functional components.
- Bonus: Implement local storage to save todos, so that data persists after page reload.

**Skills Tested**:

- React basics (useState, useEffect)
- Event handling
- Dynamic rendering with conditionals
- Component structure and reusability
- Optional: Handling side effects and persisting data

---

## **Task 2: Build a Search Filter Component**

**Objective**: Create a reusable search filter component that can be used to filter through a list of items.

**Requirements**:

- Create a `SearchFilter` component that receives an array of items (e.g., list of products, users, or books) as a prop.
- The component should allow users to type a search term, and filter the list based on the term.
- The component should update and display the filtered list dynamically as the user types.
- The component should be case-insensitive.
- Bonus: Implement debounce to optimize the search input for performance.

**Skills Tested**:

- React state management with hooks
- Working with lists and rendering dynamic content
- Handling input events and implementing search functionality
- (Bonus) Performance optimization techniques like debounce

---

### **Task 3: Create a Responsive Navbar with Dynamic Links**

**Objective**: Create a responsive navigation bar that adapts based on screen size.

**Requirements**:

- Create a navigation bar (`Navbar`) with a list of links (e.g., Home, About, Services, Contact).
- On desktop screens, display the links in a horizontal row.
- On mobile screens, collapse the links into a hamburger menu.
- Clicking the hamburger icon should toggle the display of the links.
- Use CSS Flexbox or Grid to structure the layout.
- Bonus: Use a CSS-in-JS library (like `styled-components` or `emotion`) to style the component.

**Skills Tested**:

- CSS for responsiveness (media queries, Flexbox/Grid)
- React state management (e.g., toggling the hamburger menu)
- Understanding of mobile-first design
- Bonus: Use of CSS-in-JS libraries

---

### **Task 4: API Integration with Error Handling and Loading States**

**Objective**: Fetch and display data from an external API with proper error handling and loading states.

**Requirements**:

- Fetch a list of items from a public API (e.g., JSONPlaceholder, OpenWeatherMap, or similar).
- Display the list of items (e.g., users, posts, etc.) in a well-structured format.
- Show a loading spinner while the data is being fetched.
- If the API request fails, display an error message.
- Bonus: Allow users to click on an item to view more details in a separate modal or detail page.

**Skills Tested**:

- Fetching data with `useEffect` and `fetch` or `axios`
- Error handling and displaying loading states
- Component design for dynamic data rendering
- Bonus: Modal implementation and state management

---

### **Task 5: Build a Counter Component with Custom Hook**

**Objective**: Build a counter component that has functionality for increment, decrement, and reset. Use a custom hook to handle the logic.

**Requirements**:

- Create a `Counter` component that has buttons for "Increment", "Decrement", and "Reset".
- Implement the logic of the counter in a custom hook (e.g., `useCounter`).
- The hook should manage the counter state and expose functions to increment, decrement, and reset the value.
- The counter should be initialized at 0.
- Bonus: Persist the counter value in local storage so that it remembers the last value after a page reload.

**Skills Tested**:

- Custom React hooks (`useState`, `useCallback`)
- Functional component structure
- Code organization and separation of concerns
- Bonus: Local storage integration

---

### **Task 6: Design a Card Component with Props**

**Objective**: Create a reusable card component that can accept different props for customizing its content.

**Requirements**:

- Create a `Card` component that displays:
  - A title
  - An image
  - A description
  - A "Read More" button (optional)
- The component should accept these values as props, and dynamically render them.
- Bonus: Style the card with a hover effect (like changing the background color on hover).

**Skills Tested**:

- Component reusability and props
- Dynamic rendering based on props
- Basic CSS styling (hover effects)

---

### **Task 7: Build a Simple Form with Validation**

**Objective**: Create a form component that includes basic form validation.

**Requirements**:

- Create a form with fields: `Name`, `Email`, and `Password`.
- Validate the form fields:
  - Name should be required.
  - Email should be a valid email format.
  - Password should be at least 8 characters long.
- Display error messages when validation fails.
- Bonus: Use a state management library like `Formik` or `React Hook Form` to handle the form logic.

**Skills Tested**:

- Form handling in React
- Conditional rendering for error messages
- Validation techniques (manual or with libraries)
- Bonus: Integration with form libraries

---

### **Bonus Tasks (Optional but Recommended)**

1. **State Management**: Use **Redux** or **Context API** for managing a global state, e.g., a shopping cart where items can be added or removed globally across multiple components.
2. **Routing**: Implement routing with **React Router** to handle multiple pages/views in a single-page application.
3. **Testing**: Write unit tests for one of the components using **Jest** and **React Testing Library**.
4. **Performance Optimization**: Implement **React.memo** or **useMemo** to optimize re-renders in a component that displays a large list of items.

---

### **Submission Instructions**

- Please fork this repository and submit the code as a pull request.
- Include a `README.md` file with clear instructions on how to run the application locally.
- If possible, deploy the app using a platform like **Netlify**, **Vercel**, or **GitHub Pages**, and include the live demo link in the submission.

---

### **Evaluation Criteria**:

- **Code Quality**: Is the code clean, modular, and maintainable?
- **Functionality**: Does the app meet the requirements and work as expected?
- **Design**: Is the UI intuitive and responsive?
- **Performance**: Are the app and components performant (e.g., avoiding unnecessary re-renders)?
- **Creativity**: Bonus points for creativity, smooth animations, or extra features (e.g., accessibility, advanced error handling).
- **Testing**: (Bonus) Are there any tests written? How robust are they?

---

### **Time Limit**: 3-4 hours (This should be enough time for most candidates to complete the core tasks and optionally the bonus features.)

---

This assessment covers a broad range of important skills for a React JS front-end developer, including UI design, component structure, state management, API integration, and performance optimization. The bonus tasks add opportunities to demonstrate expertise in more advanced topics. 

Let me know if you'd like more details or adjustments!