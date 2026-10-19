---
sidebar_position: 4
description: Use a game controller such as the 8BitDo Micro (in keyboard mode) or a Nintendo Joy-Con to turn pages and navigate in Panels.
---

# Game controllers

Panels reads keyboard input, not game controller input. You can use a game controller in one of two ways:

- **Controllers with a keyboard mode**, such as the 8BitDo Micro. You can map each button to a key or a Panels shortcut. This gives you the most control.
- **Any other controller**, such as a Joy-Con, an Xbox controller or a PlayStation controller, through iOS and iPadOS **Switch Control**. See [Accessibility options](./accessibility-options.md#switch-control).

## 8BitDo Micro

[8BitDo Micro](https://www.8bitdo.com/micro/) is a tiny controller that fits in one hand and has a true keyboard mode. You can map its buttons to page turns, zoom, menus and more.

### 1. Switch to keyboard mode

Set the switch on the bottom of the controller to **K** (keyboard). The other two modes, S and D, are game controller modes and won't work with Panels.

{/* TODO image: close-up of the S·D·K mode switch set to K */}

Then pair it in **Settings → Bluetooth**.

### 2. Map the buttons

Install [8BitDo Ultimate Software](https://support.8bitdo.com/ultimate/micro.html) on your iPhone or iPad. Open **Buttons**, assign a key to each button, then tap **Sync to device**. The mobile app only works in keyboard mode.

Here is a layout from a Panels user that covers reading one-handed:

| Button | Key | Use in Panels |
| --- | --- | --- |
| D-pad ← | Shift + ← | Previous page (next page when reading right to left) |
| D-pad → | Shift + → | Next page (previous page when reading right to left) |
| D-pad ↑ | + | Zoom in (hold with L) |
| D-pad ↓ | - | Zoom out (hold with L) |
| A / B / X / Y | ↑ / → / ← / ↓ | Move around the page when zoomed in |
| R | Enter | Confirm |
| R2 | Esc | Show or hide page thumbnails |
| L | Shift + Win | Zoom modifier (= Shift + ⌘) |
| L2 | Win | ⌘ modifier |

{/* TODO image: 8BitDo Ultimate Software Buttons screen with the mapping above (needs permission from the user who shared it, or a new screenshot) */}

Mapping the D-pad to **Shift + ←/→** instead of plain arrows means pages still turn when you are zoomed in, and in Fill screen, Adjust to orientation and Panels View. If you read with a vertical scroll direction, map those buttons to **Shift + ↑/↓** instead.

To open a comic from the library, select it and press **Space**. In the library, **Enter** renames the selected item.

### Known limitations

- **⌘ shortcuts don't work from a single button.** The 8BitDo app calls the ⌘ key **Win**, and a button mapped to Win + another key doesn't trigger the shortcut on iPad. As a workaround, map Win (⌘) to its own button and hold it while you press the other key. That's why **L** and **L2** are modifiers in the layout above.
- **No shortcut for closing the reader.** There's currently no keyboard shortcut that closes the reader and takes you back to the library, so tap the screen for this.

## Nintendo Joy-Con and other controllers

A single Joy-Con fits easily in one hand, which makes it a good remote. Joy-Cons don't have a keyboard mode, so use them through [Switch Control](./accessibility-options.md#switch-control).

With a single Joy-Con, the directional buttons and the face buttons are recognised, but **L / ZL** aren't. Assign your page-turn actions to the directional buttons.
