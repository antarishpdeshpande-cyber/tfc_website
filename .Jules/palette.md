## 2024-05-23 - Accessibility of Toggle Chips
**Learning:** Toggleable chips implemented as divs are inaccessible to screen readers and keyboard users. Using `<button>` with `aria-pressed` is the semantic and accessible way to implement this pattern.
**Action:** Always use semantic buttons for interactive elements and leverage ARIA states for custom controls.
