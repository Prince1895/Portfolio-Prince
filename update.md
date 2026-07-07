You are an expert React.js frontend developer.

I want to add an animated custom cursor to my existing React + JavaScript + Tailwind CSS portfolio.

Requirements:

- Integrate the animated cursor across the entire website.
- Keep my existing project structure unchanged.
- Do not break any existing functionality.
- The cursor should work smoothly on all pages.
- The cursor should remain visible above all components.
- It should work with Framer Motion animations.
- It should not interfere with clicking buttons, links, forms, or scrolling.
- Keep performance optimized.
- Hide the default cursor and replace it with the custom animated cursor.
- Ensure the cursor scales properly on different screen sizes.
- Disable the custom cursor on touch devices (mobile/tablet) and use the default cursor there.
- Respect accessibility and reduced motion preferences.
- Make sure there are no memory leaks by cleaning up event listeners.

Implementation:

- Create a reusable React component named `CustomCursor`.
- Import it once in the root App component.
- Use React hooks (`useEffect`, `useState`, `useRef`) where appropriate.
- If using external cursor assets, place them inside the project's `public/cursors` directory instead of relying on a third-party CDN.
- Use CSS modules or a dedicated `cursor.css` file for styling.
- Ensure the cursor has smooth movement using `requestAnimationFrame` or Framer Motion.
- Add hover effects for interactive elements (`button`, `a`, `.card`, `.project-card`) such as slight scaling or glow.
- Keep animations at 60 FPS whenever possible.

If my portfolio already contains a custom cursor implementation, improve it instead of replacing it.

Return all required React components, CSS, and integration steps.