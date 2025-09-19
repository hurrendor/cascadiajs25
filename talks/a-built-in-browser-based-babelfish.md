# A Built-in Browser-based Babelfish 

## Phil Nash
### IBM, Melbourne, Australia 
- [Bluesky](https://bsky.app/profile/philna.sh) 
- [LinkedIn](https://linkedin.com/in/philnash)
- [Links](https://philna.sh/links)

- [Speaker's Notes (Placeholder)]()
- [Post-conference YouTube Recording (Placeholder)]()
## Abstract: 

AI is thriving on the server side, but the web is catching up! Let's explore how to build browser AI apps, like an offline speech-to-speech translator, leveraging current and future Web APIs.
## Community talk notes: 

*Disclaimer: Some items may not run in regular browsers, Phil uses Chrome Canary

### The AI revolution is happening on the web

## Demo: Can you build a speech translator in browser without internet?
Application Needs:
- Speech-to-text
- Translation
- Text-to-speech

### Browsers traditionally include a Web Speech API
- Speech Recognition
- Speech Synthesis (`SpeechSynthesisUtterance`)
  - Built-in voice packages available
### Translation API through AI
The Prompt API - uses Gemini Nano
```
const model = await LanguageModel.create(); //first time will download a model
const result = await model.prompt('Write me a poem about cats');`
```
This API has hardware requirements of at least 22GB storage and 4GB of VRAM. After usage, the Chrome team updated with smaller, more focused models to solve common problems.
### Specialized AI APIs
- Translator
- Language Detector
- Summarizer
- Writer
- Rewriter
- Proofreader

### Multimodal Prompt API
Announced at Google I/O, works behind a flag in Chrome Canary

### AI in browser use-cases
- Translation of user generated content
- Personalized summarization of user reviews
- Suggesting alt text for image uploads
- Transcribing and translating videos
- Privacy

### Speaker Recommended Links
- [Built in AI](https://developer.chrome.com/docs/ai/built-in-apis)
- [Web AI demos](https://github.com/GoogleChromeLabs/web-ai-demos)
- [Langflow](https://langflow.org)