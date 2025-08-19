---
sidebar_position: 3
---

# Kavita

This guide will walk you through the process of connecting Panels to your [Kavita](https://www.kavitareader.com/) instance.

## Adding your Kavita server to Panels

An OPDS feed is added to Panels as an importing service. From that point, it can be used either as a new library or just to download titles to your own device library.

To add a new OPDS feed, open Panels and go to Library -> Connect Service -> OPDS.

<img src ="/img/kavita-setup/01.png" style={{maxHeight: '800px'}}/>

You'll be taken to the OPDS configuration screen. 
Kavita offers an authorized URL, so you don't have to add any username or password. 

To get the feed URL, go to your server Settings section, then open the "3rd-Party Clients" and copy the OPDS URL.
<img src ="/img/kavita-setup/04.png" style={{maxHeight: '500px'}}/>
<img src ="/img/kavita-setup/05.png" style={{maxHeight: '500px'}}/>

Paste that URL in the "Host" field on Panels and save the configuration.

Specify the "Port" if your server is not using port 80 or 8080.

⚠️ And leave username and password **empty**.

<img src ="/img/kavita-setup/02.png" style={{maxHeight: '800px'}}/>

Your Kavita server should now appear both as a new library and as a new Import Service. Let's explore both options.

<img src ="/img/kavita-setup/03.png" style={{maxHeight: '800px'}}/>


## Kavita as Import Service

You can use this method if you plan to use your Kavita server mainly to import (download) comics into your device. 

To add content to your library, you can follow either of these 2 flows:

1. From he content screen, tap your server, navigate and select the files you want to import, and last select where yo place them in your device library.

<img src ="/img/kavita-setup/06.png"/>

2. Navigate first to the location in your device library where you want your files to be imported. Then tap the 3 dot symbol and select "Import Files". Choose your server and find the files you want to download to your phone.

<img src ="/img/kavita-setup/07.png"/>

From either of the above flows above, your download should start and be visible from the "Downloads" tab.

<img src ="/img/kavita-setup/08.png" style={{maxHeight: '800px'}}/>


## Kavita as a Library

Panels treats OPDS feeds as libraries. That means you can navigate your server library as if it was on your own device, with the benefit of keeping all files stored somewhere else.
Once you find a title you want to read, you can tap to open and start reading it (stream) or you can choose to download it for offline use. Long press a title (or select many) to show all options.

<img src ="/img/kavita-setup/09.png"/>
