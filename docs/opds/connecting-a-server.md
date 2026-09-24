---
sidebar_position: 2
description: How to add an OPDS server to Panels, and how to use it either as a library you stream from or as a service you import files from.
---

# Connecting a server

:::info[Premium feature]

Connecting to OPDS servers is part of [Panels Premium](/premium/what-is-panels-premium.md).

:::

This page covers the parts that are the same for **every** OPDS server. For the details specific to yours — where to find the feed URL, whether it needs credentials — see the guide for [Komga](komga.md), [Kavita](kavita.md) or [Calibre](calibre.md).

## Adding the server

Open Panels and go to **Library → Connect Service → OPDS**.

<img src="/img/komga-setup/01.png" style={{maxHeight: '800px'}} alt="Panels showing the Connect Service menu"/>

Give the server a name, then fill in the connection details. On your local network that's your server's IP address and the port it listens on:

| Field | Value |
| --- | --- |
| Server address | `http://192.168.1.10` |
| Port | `25600` |
| Username / Password | your server credentials, if it uses them |

Panels finds the OPDS feed on its own, so you usually don't need to append a catalog path to the address.

:::tip

Reaching your server from outside your home — through a reverse proxy, Tailscale or a domain name? The fields are filled in differently, and the **Port** field should be left empty. See [Expose your server](https.md).

:::

## Your server appears twice

Once it's added, your server shows up in **two** places, and this trips people up at first:

<img src="/img/komga-setup/03.png" style={{maxHeight: '800px'}} alt="Panels showing the OPDS server as both a library and an import service"/>

- As a **library**, for browsing and streaming without using device storage.
- As an **import service**, for downloading files into a library on your device.

They're the same server. Which one you use depends on whether you want the comics on your device or not.

:::note

The screenshots on this page show Komga, but the flow is identical for every OPDS server.

:::

## Using it as a library

Panels treats an OPDS feed as a library, so you can browse your server as if the collection were on your device — while the files stay where they are.

Tap a title to open and **stream** it, or download it for offline reading. Long press a title (or select several) to see all the options.

<img src="/img/komga-setup/07.png" alt="Panels showing options for a title in an OPDS library"/>

:::note

[Continue reading](/read-content/continue-reading.md) doesn't work while streaming over OPDS yet. It's waiting on OPDS 2.0 being released and adopted by both Panels and the servers.

:::

## Using it as an import service

Use this when you mainly want to pull comics down onto your device. There are two ways round it:

**Start from the server.** From the content screen, tap your server, navigate to the files you want, select them, and then choose where to put them in your device library.

<img src="/img/komga-setup/04.png" alt="Importing by starting from the server"/>

**Start from the destination.** Navigate to the spot in your device library where you want the files, tap the **"..."** button and choose **Import Files**. Pick your server and find what you want.

<img src="/img/komga-setup/05.png" alt="Importing by starting from the destination folder"/>

Either way the download starts straight away, and you can watch it from the **Downloads** tab.

<img src="/img/komga-setup/06.png" style={{maxHeight: '800px'}} alt="Panels Downloads tab showing files downloading from an OPDS server"/>
