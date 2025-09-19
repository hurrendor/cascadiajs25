# Escaping Reactivity Hell: Why State Feels Hard (and What to Do About It) 

## Kristen Hewell Garrett
### Phantom, Arlington, VA, USA 
- [Bluesky](https://bsky.app/profile/pzuraq.bsky.social) 
- [Personal Site](https://pzuraq.com)
- [Speaker's Notes (Placeholder)]()
- [Post-conference YouTube Recording (Placeholder)]()
## Abstract: 

Promises freed us from callback hell. But reactivity hell—debug loops, messy effects, brittle state—still haunts us. Signalium is a library inspired by Hooks, powered by Signals, that reimagines state to break the cycle.
## Community talk notes: 

Reactivity Hell --> Successor to Callback Hell
To move forward, let's learn from the past
#### C Callbacks
#### Callbacks in Scope
#### Promises
#### Async/Await


### Lessons learned
1. Narrow the problem space
2. Use a monad for capturing context
3. Layer naturally on top of existing patterns

With *async*, we want to resume the function at the next step after aysnc work is done
*Reactivity* resumes the function from its children

Reactivity Hell --> Solve with [Signals](https://github.com/tc39/proposal-signals)

Signalium can be used to create reactive functions and async functions

### Asymmetric Async (N requests, M responses)
example: managing subscriptions
Great for effect as data-source type constructs

Signalium Relays are a managed effect with state. Relaying information in and out of the data flow graph.

### What's the impact of reactive functions?
- Bugs avoided
- Less code written
- Spaghetti not formed

### Speaker Recommended Links:
[Signalium](https://signalium.dev/)