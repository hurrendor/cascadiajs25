# GPT-5 for Developers 

## Kevin Whinnery
### OpenAI, Minneapolis, MN, USA 
- [X / Twitter](https://x.com/kevinwhinnery) 
- [Personal site](https://kevin.mn)
- [Speaker's Notes (Placeholder)]()
- [Post-conference YouTube Recording (Placeholder)]()
## Abstract: 

In this talk, we'll explore the capabilities of the recently released GPT-5 model family from OpenAI. Learn about new function calling techniques, prompting best practices, and more to get the most out of this model.
## Community talk notes: 

Context: Using the OpenAI library in JavaScript
## Making the most out of ChatGPT5
### Effort and verbosity
>Song pair: 'Next Level' - aespa

Play with the 'reasoning' property in the OpenAI responses model. This can affect the latency
Verbosity of the response can be edited as well with the 'text.verbosity' property

### Chain of thought / multi-turn
>Song pair: FUTW - LISA ft. Future

Provide the response reasoning returned from a first API call as context for input in ongoing requests

### Tools roundup
>Song pair:Hot Sauce - BABYMONSTER

Within the Responses API, tools can be added
Web search: `tools: [{ type: "web_search" }]`
MCP:  Add a remote MCP server `tools: [{ type:"mcp" ... }]`
Custom tools: Pass in a JSON document with expected arguments to call. This can also be used to define what kind of grammar output is provided in the response.

### Webhooks & background
>Song pair:Killin' It Girl - j-hope ft. GloRilla

In the API request, `background: true` will allow asynchronous processing
openAI platform --> Settings --> Allow Webhooks

### Instruction following & prompting
>Song pair:Your Idol - Saja Boys

#### Basic Principles
1. Avoid conflicting information
2. Precision is important, because the model follows instructions well
3. XML-like syntax helps group related information - grouping with XML tags
4. Including information on self-reflection can help for zero-to-one prompts
5. You can steer eagerness and tool calling

[Documentation tools and recommendations](https://platform.openai.com/docs/latest-model/chat/edit?models=gpt-5&optimize=true)

>Bonus song: Gnarly - KATSEYE