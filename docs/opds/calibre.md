---
sidebar_position: 5
description: Connect Panels to Calibre's content server over OPDS, including how to start the server, enable authentication, and reach it from outside your network.
---

# Calibre

This guide covers what's specific to connecting Panels to a [Calibre](https://calibre-ebook.com/) instance. For the parts common to every server — where the OPDS option lives, and how to use the server once it's added — see [connecting a server](connecting-a-server.md).

:::info[Premium feature]

Connecting to OPDS servers like Calibre is part of [Panels Premium](/premium/what-is-panels-premium.md).

:::

## Setting up Calibre

### 1. Start the content server

Launch the Calibre desktop app, click **Connect/share** in the top toolbar, and choose **Start Content Server**.

Calibre then runs a web server locally, usually at `http://127.0.0.1:8080`. For devices on the same network, use your machine's local IP instead, for example `http://192.168.1.137:8080`.

<img src ="/img/calibre-setup/01.png" style={{maxHeight: '500px'}} alt="Calibre Connect/share menu with Start Content Server"/>

### 2. Check the OPDS feed

The OPDS feed is enabled automatically whenever the content server is running, at:

```
http://<your-ip>:8080/opds
```

For example: `http://192.168.1.137:8080/opds`

Open that in a browser to confirm it's working — you should see something like this:

<img src ="/img/calibre-setup/03.png" style={{maxHeight: '500px'}} alt="Calibre OPDS feed shown in a web browser"/>

### 3. Set a username and password

Recommended in general, and essential if you ever expose the server beyond your local network.

Go to **Preferences → Sharing over the net**, check **Require username and password**, and set your credentials.

## Connection details

In Panels, go to **Library → Connect Service → OPDS** and enter your server details and credentials.

<img src ="/img/calibre-setup/02.png" style={{maxHeight: '500px'}} alt="Panels OPDS configuration screen for Calibre"/>

## Reaching Calibre from outside your network

To access your Calibre server away from home you'll need to:

- Set up **port forwarding** on your router (forward port 8080)
- Use **dynamic DNS** or a static IP
- Make sure **authentication** is enabled

:::warning

Be cautious about exposing Calibre directly to the internet. Use strong passwords, and prefer a VPN or a reverse proxy with HTTPS over opening a port.

:::

→ [Expose your server (HTTPS with Caddy)](https.md)

## Next steps

Your Calibre server now appears both as a library and as an import service.

→ [Using your server](connecting-a-server.md#using-it-as-a-library)
