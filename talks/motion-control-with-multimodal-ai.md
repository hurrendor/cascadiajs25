# Motion Control With Multimodal AI 

## Charlie Gerard
### CrowdStrike, Oakland, CA, USA 
- [Linkedin](https://www.linkedin.com/in/charliegerard/) 

- [X / Twitter](https://x.com/devdevcharlie) 

- [Bluesky](https://bsky.app/profile/devdevcharlie.com) 
- [Personal Website](https://charliegerard.dev)

- [Github](https://github.com/charliegerard) 

- [Speaker's Notes (Placeholder)]()
- [Post-conference YouTube Recording (Placeholder)]()
## Abstract: 

What if you could use multimodal LLMs to interact with websites or IoT devices using motion control? As advancements in multimodal AI offer new opportunities to push the boundaries of what can be done with this technology, I started wondering how it could be leveraged from the perspective of human-computer interaction. In this talk, I will take you through my research experimenting with building motion-controlled prototypes using LLMs in JavaScript.
## Community talk notes: 

### Approaches
1. rely only on multimodal AI. Use Gemini to take screenshots and return the best guess for what hand gesture is executed
2. rely on multimodal AI. Augment with fine-grained data from Tf.js
3. IDY with images converted to vector embeddings, saved in a vector DB and use Gemini for function calling
4. Gemini with tensorflowJS
5. DIY in the browser
    - Using a vector DB

### Demos
Each demo updates on the previous build and requires updates to the prompt.
1. Recognize the hand gesture
2. Turn a light on and off based on the hand gesture
3. Turn on/off multiple lights
   - Using Multi turn function calling (AKA compositional function calling)
4. Change the color using Gemini & Tf.js
5. DIY Solution with vector db embeddings
   - Takes return value from vector reading functions and sends to Gemini vs sending entire photo

### Recommended Speaker Links
- [TfJS Pose detection](https://github.com/tensorflow/tfjs-models/tree/master/pose-detection)
- [TfJS Hand Pose Detection](https://github.com/tensorflow/tfjs-models/tree/master/) ##Fix
- [Gemini Live API Web console (repo)](https://github.com/google-gemini/live-api-web-console)