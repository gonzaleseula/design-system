# Frontend Interview - Design System


## Install and run

```bash
# Install dependencies
# This project use `pnpm` as package manager, but you can use also `npm` or `yarn`.
pnpm install

# And run the project
pnpm dev

# Optional: Run Storybook
pnpm storybook
```

## Figma file


The figma file of the home test is available [here](https://www.figma.com/design/OclakAGLSXDoMKLFvwLNMP/%F0%9F%92%BB-Design-System-Home-Test---Tabs-Component?node-id=0-1&t=4pG7NN6HKxgxroDz-1).

---

## Planned Improvements

If given more time, I would further improve the following areas:

- **Accessibility:**
	- Enhance ARIA attributes and keyboard navigation for full WAI-ARIA compliance
	- Improve focus management and screen reader support
	- Add more robust accessibility tests
- **Testing:**
	- Add comprehensive unit and integration tests for keyboard navigation (Arrow, Home, End, skipping disabled tabs)
	- Increase test coverage for edge cases and accessibility
- **CSS & Responsiveness:**
	- Refine responsive styles for better mobile/tablet support
	- Polish visual details for pixel-perfect Figma alignment
	- Add more theme/variant support and CSS variables for easier customization
- **Documentation:**
	- Expand Storybook stories to cover more use cases and edge cases
	- Add usage examples and best practices to the documentation
- **Performance & Code Quality:**
	- Optimize component rendering and memoization
	- Refactor code for even better readability and maintainability
- **Component API:**
	- Add support for icons or custom content in tabs
	- Expose more customization options via props
