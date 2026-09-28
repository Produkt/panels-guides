---
sidebar_position: 3
description: Connect Panels to your Komga server over OPDS — the server address and port to use on your local network, and what to change when you connect from outside.
---

# Komga

This guide covers what's specific to connecting Panels to a [Komga](https://komga.org/) instance. For the parts common to every server — where the OPDS option lives, and how to use the server once it's added — see [connecting a server](connecting-a-server.md).

:::info[Premium feature]

Connecting to OPDS servers like Komga is part of [Panels Premium](/premium/what-is-panels-premium.md).

:::

## Connection details

In Panels, go to **Library → Connect Service → OPDS**, give the server a name, then enter the details and tap **Apply**.

On your local network, use your server's IP and the port Komga listens on:

| Field | Value |
| --- | --- |
| Server address | `http://192.168.1.10` |
| Port | `25600` |
| Username / Password | your Komga credentials |

<img src ="/img/komga-setup/02.png" style={{maxHeight: '800px'}} alt="Panels OPDS configuration screen for Komga"/>

Panels finds Komga's OPDS feed on its own, so you don't need to add `/opds/v1.2/catalog` to the address — though it does no harm if you do.

## Connecting from outside your network

If you reach Komga through a reverse proxy, Tailscale or a domain name, the fields are filled in differently: the full HTTPS address goes in **Server address** and **Port** is left **empty**.

→ [Expose your server (HTTPS with Caddy)](https.md)

## Next steps

Your Komga server now appears both as a library and as an import service.

→ [Using your server](connecting-a-server.md#using-it-as-a-library)
