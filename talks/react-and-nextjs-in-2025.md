# React & Next.js in 2025 

## Shruti Kapoor
### Content Creator, Seattle, WA, USA 
- [Linkedin](https://www.linkedin.com/in/shrutikapoor08/) 

- [X / Twitter](https://x.com/shrutikapoor08) 

- [Speaker's Notes (Placeholder)]()
- [Post-conference YouTube Recording (Placeholder)]()
## Abstract: 

Explore practical best practices for building fast, maintainable, accessible web apps in 2025. From state management myths to hybrid rendering, code splitting, caching, server actions, and accessibility.
## Community talk notes: 

Optimizing a react app from 30.00 LCP to 1.28 LCP (Largest contentful paint) using DevTools Performance tab.

### Where to start?
Use the performance tab to profile the page load.
First candidates to assess: 'resource load delay' & 'resource load duration'
#### What's the bundler size? 
  - Codesplit to break out components into individual bundles
#### Render fewer components 
  - break out lists into virtual lists to load with scroll
#### Check how many times components re-render
  - Utilize useMemo and useCallback for things that don't need to refresh every render
  - Use [React compiler](https://react.dev/learn/react-compiler) for built-in memoization
#### Look at fetch calls made
  - Is it obstructing rendering? Load the data server-side (performed with tanstack)
  - Pre-fetch relevant data as user hovers over components
#### Lazy load images where possible