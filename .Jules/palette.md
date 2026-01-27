## 2024-05-21 - Form Validation Friction
**Learning:** Native `alert()` dialogs break the immersive "dark mode" feel of the app and completely halt the user flow, likely causing drop-offs at the critical enquiry step.
**Action:** Replace all blocking alerts with inline, non-blocking UI feedback that matches the site's aesthetic (`var(--bad)` color).
