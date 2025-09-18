# Think Fast: OnDevice Vector Features 

## Gant Laborde
### Infinite Red, New Orleans, Louisiana, USA 
- [Bluesky](https://bsky.app/profile/gantlaborde.com) 

- [Speaker's Notes (Placeholder)]()
- [Post-conference YouTube Recording (Placeholder)]()
## Abstract: 

Did you know a phone could do that? Integrate on-device AI qualities into your React Native apps. The future is real-time, offline intelligence. In this session, we'll explore providing contextual information—all without relying on the cloud. 
## Community talk notes: 

### How can we find concepts in a series of 0's and 1's?
We can map it!
Putting words into space where they're clustered by similar meaning instead of spelling. Using thousands of vectors with thousands of dimensions, it can create word clouds and clusters.

### What else can we do with this?
- Features: Data can be ordered by features, like recommendation engines
- Sound - Fingerprint and place songs in a DB then Shazam it!
- Images - Photos of people, products, places can be stored

### Do we need a server for this?
Faster, better UX and cheaper to place a DB on the edge device and do a quick vector search.

## Demo: Product Search from App
Objective: Searching a store for the aisle based on product image. The demo is mobile app vector search using Infinite Red and React Native
Dimensional embeddings are stored on the phone's local SQL database using CouchBaseDB.

### AI Subject Segmentation
Calculate the prominent object in a particular photo and throw away the rest of the data.

### Demo steps:
1. Feed the database by adding products
2. Search the products
3. Success!

### Low Cost Mobile Vector Success
- Semantic search
- Recommendations
- Product curation

## Other Speaker Links:
[Infinite Red](https://infinite.red)