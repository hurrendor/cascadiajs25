# Oops, CSS Got Away From Me… Send Halp! 

## Adam Argyle
### Indie, Seattle, WA, USA 
- [Linkedin](https://www.linkedin.com/in/adamargyle/) 

- [X / Twitter](https://x.com/argyleink) 

- [Speaker's Notes](https://cascadiajs-2025.netlify.app/)
- [Post-conference YouTube Recording (Placeholder)]()
## Abstract: 

A fast paced, animated, and jam packed tik-talk on CSS features from the past ~5 years. CSS has moved so fast, don't feel bad you aren't all caught up, no one is. This talk will teach you as many things as possible while providing good examples of practical use cases. Syntax, typography, color, architecture, and more.
## Community talk notes: 

# 25 Rad features in 25 minutes
- Page transitions  with persistence
    - `@view-transition { navigation: auto }`

- Range syntax in media queries
    - `@media (100px < width < 1024px)`

- Container queries
    - `.classname { ontainer: --containerName / size }`
    - Also provides container units

- Cascade layers
- Field-sizing
  - Grow and shrink sizes
  - `field-sizing: content`
  - Needs defensive styles like min-inline-size
- Color scheme --> creates a function to toggle in identified components
- Accent colors
- @property -- type-safe interpolatable CSS variables
  - Registered custom properties
- Scroll driven animation
  - animate on scroll or on viewport intersection
    - `animation: somthing linear both;
        animationi-timeline: view`
- linear()
- horizontal rules in select elements
- search element
  - contains aria-labels and other needed properties
- validation constraint pseudo classes
  - :user-invalid and :user-valid -- lazy classes
- Exclusive accordion
  - Give elements the same name to only allow one
- Math
  - here comes radial layouts
- CSS functions down the line
- Text wrap options to pretty-ify or balance
  - `text-wrap: pretty`
  - `text-wrap: balance`
- color mix
  - `color-mix()`
- color spaces for blueray-like colors and gradiants 
- relative colors -- derive and compute colors from colors
- scrollbar customization
- @starting-style {}
- <dialog></dialog>
- <popup></popup>
- anchor positioning
- text-box: trim
