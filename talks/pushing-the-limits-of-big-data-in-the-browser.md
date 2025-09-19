# Pushing the Limits of Big Data in the Browser 

## Kenny Daniel
### Hyperparam, Seattle, WA, USA 
- [Github](https://github.com/platypii) 

- [Speaker's Notes (Placeholder)]()
- [Post-conference YouTube Recording (Placeholder)]()
## Abstract: 

A radical new take on how to architect large data applications entirely in JavaScript – no python required. This talk covers how I built the open-source libraries Hyparquet and HighTable for loading Apache Parquet files client-side in the browser.
## Community talk notes: 

### Time to First Data
How fast can we go from opening a web page to seeing the data we're working with?

Goal: In a system's architecture, burn the backend, but keep the CDN/cloud front while increasing speed of access to data.

### How do we replace the backend?
Local-First Apps - frontend-only paradigms. (Not apps for offline work and then syncing up later.)

### Cloud-Native Formats
Cloud-Native GeoTiff (COG)
### Apache Parquet
Column oriented data storage format. Can be queried remotely and contains it's own index.

### How to make JS fast?
- Avoid round trips
- Avoid memory allocation
- Zero copy
- Typed arrays (Int32Array, etc)
- Web workers to offload computation tasks
- WASM for decompression

*Fun fact: If your WASM blob is < 4kb, it can be loaded synchronously
- no emscripten
- writing your own memcpy

### HighTable
- using HyParquet, reads the index and queries the parquet for only that data
[HighTable (repo)](https://github.com/hyparam/hightable)

### Up next..
Apache Iceberg uses parquet to build large-scale database systems on top of object storage.

Iceberg.. in JS - [Icebird (repo)](https://github.com/hyparam/icebird)

## Speaker Recommended Links:
- [JSCad](https://jscad.app)
- [Hyparquet (repo)](https://github.com/hyparam/hyparquet)
- [HySnappy](https://github.com/hyparam/hightable)
- [HighTable (repo)](https://github.com/hyparam/hightable)
