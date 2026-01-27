## 2024-10-24 - Unsanitized Content Injection
**Vulnerability:** DOM-based XSS vulnerability where content from local JSON files (CMS managed) was injected directly into `innerHTML` without sanitization.
**Learning:** Even "trusted" local content (like CMS data) should be treated as untrusted because it can be modified by malicious actors with access to the CMS or the repo.
**Prevention:** Always use `textContent` when possible, or a sanitization function (like `escapeHtml` or DOMPurify) before injecting strings into `innerHTML`. Also, ensure `target="_blank"` links always have `rel="noopener noreferrer"`.
