---
sidebar_position: 2
description: Keep a Panels library in iCloud Drive so your comics are synced across all your devices, and stop iOS from offloading the ones you want to keep on-device.
---

# iCloud Drive libraries

:::info[Premium feature]

iCloud Drive libraries are part of [Panels Premium](/premium/what-is-panels-premium.md).

:::

Panels can keep your *content* synced between devices, not just [your reading progress](/read-content/reading-sessions.md). The trick is to pick a library root folder that lives inside iCloud Drive.

Files stay in iCloud until you actually want to read them, so a large collection doesn't have to fill up your device.

## Setting up an iCloud Drive library

1. Go to the **Library** tab and navigate back to **Content**.
2. Tap the **"..."** icon and choose **Add a new library**.
3. In the Files app modal, navigate to any folder inside your **iCloud Drive**. You can create a new one if you don't have any comics there yet.
4. Select the root folder and tap **Open**.

Panels adds that folder as a new library. From then on you can browse it inside Panels and use it like any other library, and nothing is downloaded to your device until you tap a comic to read it.

:::note

Panels downloads each file once to extract its cover. After that the full comic is deleted from your device and only the cover is kept and synced, so the file doesn't need downloading again until you read it.

:::

:::tip

Add the same library on your other devices to have the content synced between them.

:::

## Keeping files downloaded {#keeping-files-downloaded}

Because your comics live in iCloud, iOS may remove the local copy of a file to free up space. The file is still safe in iCloud, but if you try to open it while offline — or before it re-downloads — you'll see an error saying the file is not available.

:::note

**Keep Downloaded** requires iOS 18 or later. On earlier versions, iOS manages these files automatically and you can't pin them.

:::

### Why iOS removes files

iOS offloads iCloud Drive files when:

- **Storage is low** on your device.
- **Files haven't been opened recently.**
- **Files are large** — bigger files get offloaded first, which is exactly what comics are.
- **iOS is optimizing storage** based on your usage patterns.
- **An app is offloaded**, which can take its associated files with it.

### Marking a comic to stay on-device

1. Open the **Files** app.
2. Navigate to the iCloud Drive folder holding your comics.
3. **Long press** the file or folder you want to keep.
4. Choose **Keep Downloaded**.
5. The download icon (↓) disappears, which means the file is now pinned locally.

This works on whole folders, so you can pin a series or a reading list in one go.

### What the icons mean

| Icon | Meaning |
| --- | --- |
| Cloud (☁️) | In iCloud, not downloaded to this device |
| Download (↓) | Can be downloaded on demand |
| Progress circle | Currently downloading |
| No icon | Stored locally on your device |
