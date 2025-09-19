# Scaling Collaboration in the Most Challenging Environments 

## Andy Luly
### Onebrief, Seattle, WA, USA 
- [Linkedin](https://www.linkedin.com/in/andrewluly/) 

- [Speaker's Notes (Placeholder)]()
- [Post-conference YouTube Recording (Placeholder)]()
## Abstract: 

What does real-time collaboration look like in one of the world's most constrained, high-stakes environments: the US military? Spoiler: it's not all compliance checklists and Hollywood-style bureaucracy.

The real hurdles are deeply technical, shaped by wildly diverse hardware and unpredictable conditions. Collaboration gets tricky when a submarine disappears underwater, or when your production server is less powerful than your kid's Fortnite rig. And yet the software still has to be alive, ready, and performant — especially when it matters most.

In this talk, Andy Luly, VP of Engineering at Onebrief, pulls back the curtain on what it's like to bring startup velocity and next-gen engineering into defense. You'll hear how the team scaled by more than 60x in record time, enabled real-time collaboration across secure and fragmented networks, and solved problems faster than legacy systems ever could — all while keeping users in the loop when it counts.
## Community talk notes: 
Client Side Performance
Typical users have 5-15 tabs open, each with ~120mb of data and its own websocket.

Utilized shared websockets through Dark Fiber to reduce memory usage
### DDIL (Disconnected, Degraded, Intermittent and Limited/Low bandwidth) environments
DDIL creates a lot of conflicts in keeping consistant data between sources.