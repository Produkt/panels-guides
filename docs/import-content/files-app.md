---
sidebar_position: 2
---

# Files app and iOS mechanisms

Panels tries to be a good iOS platform citizen and is compatible with multiple iOS methods for importing methods.

## Mac to iOS device

If you have comics stored in your Mac you have a few options.

### Web server

:::info[Premium feature]

The web server is part of [Panels Premium](/premium/what-is-panels-premium.md). AirDrop, cable, and Files app imports are free.

:::

Web Server option will start a server from your iOS device. Once the server is started, you can access that URL from your computer (as long as both devices are on the same wifi), and drop files there to send them to your iOS device.

To start a session, go to Library -> back to content, then tap Web Server. After tapping "start server" a URL will be displayed. Use that URL on your mac browser.

### Airdrop

You can select multiple files and airdrop from your Mac to your iPhone (or between iOS devices).

Airdrop changed recently on iOS 17 and it no longer asks with which app to open files, it puts them directly in Files app. Scroll down to [working with Files app](#files-app) to know how to move your content to Panels.

### Cable

Connect your iOS device to your Mac and open Finder. Your device should appear on the left panel, under Locations.

![finder app showing panels content](/img/finder-panels-content.png)

Select it, and navigate to Files. Scroll down the list of apps until you find Panels. Drag & drop your files to copy them to your device. Panels will show up the files once it finishes indexing the folder.

Each folder represents a collection, you can drag folders containing other folders as well as individual comic files. Make sure to check [which files are supported](supported-files.md).

:::tip

If your iOS device free storage is low, consider [iCloud Drive](icloud-drive.md) or [storing content in your server](/opds/opds.md).

:::

## Content already in your device

If your content is already in your iOS device (downloaded from Safari, contained in another app, etc.) you can use any iOS mechanism to bring content into Panels.

The easiest way will probably be using [Files app](#files-app) which comes pre-installed in every iOS device.

Otherwise, you can use "share" (usually represented with an arrow pointing up on a square) or Drag&Drop. Drag&Drop will be easier on an iPad, since you can put 2 apps side-by-side and just drag the content into Panels. On iPhone it is possible, you just need 2 hands (one to keep the content you are moving under your finger, the other to navigate to Panels).

## Working with Files app {#files-app}

Files app is like "finder" for iOS devices. Moving content in Files app is easy, you just need to locate the content you want to move and know where to drop it.

First, locate your content. It might be in the Downloads folder, or in another app's folder if you are migrating from another reading app.

Select one file by long pressing, or tap the "..." top right button and tap select to enable multi-selection.

Once the content is selected, you can either copy or move. Copy will keep the content where it is, essentially duplicating it when you paste it, so be aware of storage.

Now let's paste/move the content to Panels folder. Still inside Files app, go back until to root screen called Browse. Tap "on my iPhone/iPad" and find a folder called Panels (with the Panels logo). This is your main library root folder (what you see when you open Panels' main library).
Panels represents folders as collections. You can use Files app to modify content, move, paste, etc.

Find the collection you want and paste the content ("..." top right button, paste), or move it here.

Panels will re-index the library to reflect those changes.

:::tip

You can have [more than one library](../organize-content/multiple-libraries.md). You can also have your library [synced with iCloud Drive](icloud-drive.md).

:::
