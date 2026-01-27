# Bolt's Journal

## 2024-05-23 - Decoupling Critical Resource Fetching
**Learning:** Monolithic `Promise.all` blocks critical UI updates (Banner, Contact Info) behind non-critical data (Quotes, Coaches). Decoupling them improves perceived performance significantly. Additionally, duplicate script tags can silently double the execution cost and network requests.
**Action:** Always check for duplicate script tags in legacy codebases and prefer progressive rendering (independent fetches) for independent data sources.
