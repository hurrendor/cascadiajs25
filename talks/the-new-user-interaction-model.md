# The New User Interaction Model 

## Kent C. Dodds
### EpicAI.pro, Salt Lake City, UT, USA 
- [Linkedin](https://www.linkedin.com/in/kentcdodds) 

- [X / Twitter](https://x.com/kentcdodds) 

- [Speaker's Notes](https://slides.com/kentcdodds/user-interaction-future)
- [Post-conference YouTube Recording (Placeholder)]()
## Abstract: 

For decades, users have interacted with our applications using links and forms, but that's not enough for users anymore. They want to use natural language. Let's talk about how that changes what we build.
## Community talk notes: 

### JARVIS
Just A Rather Very Intelligent System

#### What's a Jarvis experience?
- Using natural language
- Multi-modal - using text, voice, video and gestures
- Immediate response - respond immediately even if the task takes time to complete
- Proactive - monitors and anticipates needs
- No configuration - manages integrations automatically & dynamically
- Everywhere - Same assistant no matter the location

#### Paradigm Shift
From today's Browsers and websites to the Future "Jarvis" clients and MCP services

#### What can we not do that Jarvis can do?
Nothing.. except holographic stuff probably
#### So why don't we each already have a Jarvis?
Integrations!
APIs are built but need to be integrated --> time and effort
What if.. we had a standard protocol to allow AI to integrate with everything. We do now, MCP!
## MCP (Model Context Protocol)
### Phase 1
Wrapping an LLM in a host application. Can do stuff.. wrongly.
### Phase 2 (we are here) 
Same LLM wrapped that integrates with individual tools, but CAN do stuff, right! Can't do enough though due to integration problems.
### Phase 3
Same LLM wrapped that integrates with an MCP as a proxy for handling indvidual tools. The problem is that clients aren't all ready for this, yet!
Each of the individual services are 'glued' together by the LLM.

### Next phase?
A handful of LLM clients with trillions of server MCPs.
[MCP-UI](mcpui.dev)
Interactive UI components for MCP -- build user interfaces for your MCP applications with SDKs that bring UI to AI interactions.

## Other speaker mentioned links:
- [Goose MCP (repo)](https://github.com/block/goose)
- [MCP Specs](modelcontextprotocol.io/specification)
- [AI and MCP posts from KentCDodds](https://EpicAI.pro/posts)