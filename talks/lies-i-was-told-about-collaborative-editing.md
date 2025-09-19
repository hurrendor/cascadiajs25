# Lies I Was Told About Collaborative Editing 

## Alex Clemmer
### Moment, Seattle, WA, USA 
- [X / Twitter](https://x.com/hausdorff_space) 

- [Speaker's Notes (Placeholder)]()
- [Post-conference YouTube Recording (Placeholder)]()
## Abstract: 

You use Linear and Notion. You've read the blog posts about "sync engines" and "local first" software. You want that kind of product experience too, so you install some fancy CRDT libraries and expect things to Just Work™. Well, you're about to learn what we're going to discuss in this talk: that this problem is perhaps not so simple after all.
## Community talk notes: 
Unsynchronized user updates to collaborative text editors cause issues.

#### Scenario
    Text: 'Bob loves fall colors'
    User 1: 'Bob loves fall colours' -- adds 'u'
    User 2: '' --deletes entry

### This is a UX problem, not a data problem.

The #1 tenet of UX is to help users predict what happens to their data.
#1 win for this? Help users avoid direct editing conflicts.
- model your domain to avoid direct editing conflicts
- consider UIs where conflict resolution  is handled

### Other challenges
You have to *design* the editor to achieve 60fps. If multiple editors are using the document, it shouldn't slow the user's UI down.
- This doesn't happen for free
- This did not happen with CRDT (Conflict-free Replicated Data Type) or OT (Operational Transformation) libraries

### Speaker recommended links:
- [NYT prosemirror repo](https://github.com/nytimes/react-prosemirror)
- [Handle With Care](https://handlewithcare.dev)
- [Reboot](https://reboot.dev)
- [prosemirror-collab-commit](https://github.com/stepwisehq/prosemirror-collab-commit)
- [Moment repo](https://github.com/reboot-dev/reboot-prosemirror-zod)