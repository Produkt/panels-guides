---
sidebar_position: 1
description: What OPDS is, why you'd host your own comic server, and which servers work well with Panels — Kavita, Komga, Stump and Codex.
---

# What is OPDS

:::info[Premium feature]

Connecting to OPDS servers is part of [Panels Premium](/premium/what-is-panels-premium.md).

:::

[OPDS](https://opds.io) is a standard for content distribution. Most popular comic servers have adopted it so that third-party apps like Panels can reach their content.

## Why use your own server

If you have a large collection, or you just don't want your files taking up space on your device, you have two options: [keep your content in iCloud Drive](/libraries/icloud-drive.md), or keep it on a server you run yourself.

With a server, Panels can:

- **Browse your whole collection** as a library, without downloading it
- **Stream comics** straight from the server
- **Download** individual titles for offline reading

## Which server to use

There are many OPDS implementations. For comics in particular we recommend:

- [Kavita](https://www.kavitareader.com/)
- [Komga](https://komga.org/)
- [Stump](https://www.stumpapp.dev/)
- [Codex](https://github.com/ajslater/codex)

Each has great documentation and an active community, so we suggest starting there to get your server running.

## Connecting it to Panels

Once your server is up, adding it to Panels works the same way regardless of which one you chose.

→ [Connecting a server](connecting-a-server.md)

We also have server-specific guides for [Komga](komga.md), [Kavita](kavita.md) and [Calibre](calibre.md), and one on [exposing your server over HTTPS](https.md) if you want to reach it from outside your home.
