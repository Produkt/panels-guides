---
sidebar_position: 2
---

# Komga

This guide will walk you through the process of connecting Panels to your [Komga](https://komga.org/) instance.

:::info[Premium feature]

Connecting to OPDS servers like Komga is part of [Panels Premium](/premium/what-is-panels-premium.md).

:::

## Adding your Komga server to Panels

An OPDS feed is added to Panels as an importing service. From that point, it can be used either as a new library or just to download titles to your own device library.

To add a new OPDS feed, open Panels and go to Library -> Connect Service -> OPDS.

<img src ="/img/komga-setup/01.png" style={{maxHeight: '800px'}}/>

You'll be taken to the OPDS configuration screen. Give any name to your server, then enter your _server address_, _username_, and _password_. Tap on _Apply_. 

On your local network, the address is your server's IP and the port Komga listens on:

| Field | Value |
| --- | --- |
| Server address | `http://192.168.1.10` |
| Port | `25600` |

Panels finds Komga's OPDS feed on its own, so you don't need to add `/opds/v1.2/catalog` to the address (it does no harm if you do).

If you reach Komga from outside your home through a reverse proxy, Tailscale or a domain name, the fields are filled in differently: see [Expose your server](/opds/https.md).

<img src ="/img/komga-setup/02.png" style={{maxHeight: '800px'}}/>

Your Komga server should now appear both as a new library and as a new Import Service. Let's explore both options.

<img src ="/img/komga-setup/03.png" style={{maxHeight: '800px'}}/>


## Komga as Import Service

You can use this method if you plan to use your Komga server mainly to import (download) comics into your device. 

To add content to your library, you can follow either of these 2 flows:

1. From he content screen, tap your server, navigate and select the files you want to import, and last select where yo place them in your device library.

<img src ="/img/komga-setup/04.png"/>

2. Navigate first to the location in your device library where you want your files to be imported. Then tap the 3 dot symbol and select "Import Files". Choose your server and find the files you want to download to your phone.

<img src ="/img/komga-setup/05.png"/>

From either of the above flows above, your download should start and be visible from the "Downloads" tab.

<img src ="/img/komga-setup/06.png" style={{maxHeight: '800px'}}/>


## Komga as a Library

Panels treats OPDS feeds as libraries. That means you can navigate your server library as if it was on your own device, with the benefit of keeping all files stored somewhere else.
Once you find a title you want to read, you can tap to open and start reading it (stream) or you can choose to download it for offline use. Long press a title (or select many) to show all options.

<img src ="/img/komga-setup/07.png"/>