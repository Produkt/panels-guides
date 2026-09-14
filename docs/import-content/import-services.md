---
sidebar_position: 3
---

# Custom import services

Panels have support with external services to make it easier to import content into the app.

:::info[Premium feature]

Dropbox, OneDrive, SMB, and OPDS are part of [Panels Premium](/premium/what-is-panels-premium.md). Importing from the Files app is free.

:::

Most of those services work the same way and are accessible from the library content screen -> top right "..." button -> connect service option.

<img src="/img/content-browser-options.jpeg" alt="iPhone showing content browser options" style={{width: 400}} />

## Dropbox

Follow the instructions on the screen to authenticate your Dropbox account. Once set up, you will see a new option appear under Import Services showing a Dropbox icon. Use that to navigate your content and select which files you want to download.

After choosing which files to import, they will appear in "Downloads" as they are downloaded. Once finished, they will show up in your library.

## One Drive

Follow the instructions on the screen to authenticate your One Drive account. Once set up, you will see a new option appear under Import Services showing a One Drive icon. Use that to navigate your content and select which files you want to download.

After choosing which files to import, they will appear in "Downloads" as they are downloaded. Once finished, they will show up in your library.

## SMB server

You can use the Server Message Block (SMB) protocol to share files between devices on the same network. For example, you can enable it on your Mac or NAS, and access the files to download from your iPhone/iPad.

If you want to enable it from your Mac, you can [follow this simple guide](https://support.apple.com/guide/mac-help/set-up-smb-file-sharing-on-mac-mh14107).

Once enabled, make sure to grab the smb url (example: "smb://192.168.68.72").

Go to Panels, add new service and select SMB Server. Enter the address, username (and optional password) to connect. Once connected, you will have access to the shared folder. Select the files you wish to download to your phone.

## OPDS (as import service)

The way you add an OPDS server to Panels is the same as other services, just tap on "..." -> Connect Service -> OPDS.

We cover OPDS in full detail in [your content in your server](/opds/opds.md).

Once you enter your credentials, OPDS will appear both as a new library and as an Import Service.

<img src="/img/opds-server-example.jpeg" alt="iPhone showing OPDS server" style={{width: 400}} />

If you tap on the one under "Import services", you will be able to navigate your server and select which files to download to your library. After selecting a title or titles and tapping "import", you will be prompted to select the destination. You can navigate your library and place the content anywhere. The download will start, and once finished, it will appear and be ready for you to read in your library.

## Files app

Files app is probably the easiest of our importing services. Just tap on "import from files" and you will see a new modal to navigate your devices files. Find the files and tap "Open" to start importing them and selecting a destination.
