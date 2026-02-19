# Canva Clone React Port

**Reference Website:** Canva (Clone based on provided HTML/CSS assets)

## A) Component Structure
The application is structured into modular, reusable components located in `src/components/`.

**Components Implemented:**
- **`Navbar.jsx`**: Handles the top navigation, including the logo, links, sticky behavior, and authentication buttons.
- **`Hero.jsx`**: Displays the landing page hero section with a gradient background and video loop.
- **`Explore.jsx`**: Contains the interactive features grid and tabbed navigation.
- **`ImageGenerator.jsx`**: Features the interactive AI image style picker.
- **`BusinessFeatures.jsx`**: Displays business-related offerings in a responsive grid.
- **`Templates.jsx`**: Shows a gallery of design templates.
- **`Footer.jsx`**: Manages site links, social media icons, and the developer dropdown menu.
- **`LoginModal.jsx`**: A dedicated modal component for user authentication.

## B) Props Usage
Data and event handlers are passed between components to maintain a unidirectional data flow.

**`LoginModal.jsx` receives:**
- `isOpen` (Boolean): Controls visibility.
- `onClose` (Function): Callback to close the modal.
- `onLoginSuccess` (Function): Callback to update parent state upon successful login.

**`Navbar.jsx` receives:**
- `user` (Object/Null): Current user state to toggle between "Log in" and "User Profile".
- `onLoginClick` (Function): Trigger to open the login modal.
- `onLogout` (Function): Trigger to clear user session.

## C) State + Events
The application relies entirely on React Hooks (`useState`, `useEffect`) for interactivity, avoiding direct DOM manipulation.

**Implemented Features (Ref: Activity 2):**

1.  **Show/Hide Section (Conditional Rendering)**
    -   *Implementation:* `Navbar.jsx` uses the `isMobileMenuOpen` state to toggle the `.active` class on the mobile dropdown menu.
    -   *Implementation:* `Footer.jsx` uses `isDevMenuOpen` to show/hide the "Canva Developers" submenu.
    -   *Implementation:* `App.jsx` controls the conditional rendering of the `LoginModal` based on `isLoginModalOpen`.

2.  **Form Validation using State**
    -   *Implementation:* `LoginModal.jsx` manages `email`, `password`, and `errors` states. It validates inputs (e.g., regex for email, minimum length for password) on form submission and displays dynamic error messages without reloading the page.

3.  **Theme Toggle / Content Change (State-Driven)**
    -   *Implementation:* `ImageGenerator.jsx` uses the `mainImage` state to dynamically update the preview image when a user clicks on a thumbnail in the style picker.

4.  **Navigation Highlight (Active State)**
    -   *Implementation:* `Navbar.jsx` uses `useEffect` to listen to scroll events and updates the `isSticky` state to apply a shadow/background change to the header when scrolling.
    -   *Implementation:* `Explore.jsx` uses `activeTab` state to highlight the currently selected filter button.

5.  **Bonus: LocalStorage**
    -   *Implementation:* `App.jsx` uses `useEffect` to check for a persisted session in `localStorage` on load and updates it upon login/logout, ensuring the user remains logged in across page refreshes.

---

## Assets Placement

To ensure your video, logo, and images appear correctly on the website, place them in the **`public/`** folder at the root of your project.

### 1. Video
-   **File Name:** `canva_jadu_dadu_hin_16_9.mp4`
-   **Location:** `public/canva_jadu_dadu_hin_16_9.mp4`
-   **Used in:** `src/components/Hero.jsx`

### 2. Images
-   **File Name:** `image.png` (or any other image you want to use)
-   **Location:** `public/image.png`
-   **Used in:** `src/components/Explore.jsx`

### 3. Logo
-   **File Name:** `logo.svg` (if you want to switch back to an image logo)
-   **Location:** `public/logo.svg`
-   **Usage:** Currently, the Navbar uses text. To use the image, update `src/components/Navbar.jsx`:
    ```jsx
    <div className="nav-logo">
      <img src="/logo.svg" alt="Canva" className="logo" />
    </div>
    ```

**Note:** Files in the `public/` directory are served at the root path (`/`). For example, `public/video.mp4` is accessible at `http://localhost:5173/video.mp4`.
