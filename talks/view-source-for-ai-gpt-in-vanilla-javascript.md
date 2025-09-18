# View Source for AI: GPT in Vanilla JavaScript 

## Ishan Anand
### Freelance, Seattle, WA, USA 
- [Linkedin](https://www.linkedin.com/in/ishananand/) 
- [Spreadsheets-are-all-you-need](https://spreadsheets-are-all-you-need.ai)

- [Speaker's Notes (Placeholder)]()
- [Post-conference YouTube Recording (Placeholder)]()
## Abstract: 

We'll demystify LLM internals for web developers using a real LLM implemented entirely in vanilla JavaScript that runs in the browser. No Ph.D. needed!
## Community talk notes:

### Open Source is available.. View Source is alive!
View source allows for exploring without needing to install dependencies to learn. Wouldn't it be great to add that for 

### Demo
https://spreadsheets-are-all-you-need.ai/gpt2
Using GPT2
After downloading the zip file and dragging it onto the page, everything is handled in the browser and offline.
Using dev tools, we're able to go in and debug the code blocks.

### Types of Transformer LLMs
GPT2 is the granddaddy of many LLMs, and is relatively small with how many lines of code.

### A gentle but quick guide to LLM Internals
- An LLM is like a large auto-complete

### GPT2 Phases
- Tokenization: text into tokens
- Text and position embeddings: convert tokens to numbers
- Multi-head Attention: number crunching
- Multilayer Perceptron: number crunching
- Language Head

#### Tokenization
- Input text is broken up into pieces, AKA tokens
  - A word can match to several tokens
  - Subword tokenization is between Character Tokenization and Word Tokenizataion
    - Balanced

#### Text and position embeddings: convert tokens to numbers
  - Maps out multiple-dimensions for words by context
  - Good clustering uses consistent vector relationships
    - Example: The "Golden Gate Bridge" vector
##### Learning from Word Statistics
Embeddings are formed by aggregating other words commonly associated with the word in question. This increases the vocab and embeddings

#### Multi-head Attention
There can be multiple contexts. Tokens 'talking to each other' use the context of other languages to shift the position of where the token is search for in the map.
Ex: Block step 7 in the demo. Each row adds up to '1', and the break down shows the percentage of contextual clustering

#### Multilayer Perceptron (MLP)
Make a prediction based on the context given. Identifies a number to look up in the token mapping
Ex: Block steps 13-15

#### Language Head
Logits ("Token Scores") are used to compare the predictions to find the highest probability.

### Takeaways
- Don't expect full mastery
- Expect that full mastery is within your grasp

#### Final demo
"Spreadsheets-are-all-you-need" as notebooks to provide debuggable vanilla JS code blocks that are shareable