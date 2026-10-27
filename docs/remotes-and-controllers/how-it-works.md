---
sidebar_position: 1
description: How Panels handles input from keyboards, Bluetooth page turners and controllers, which keys turn pages, and how to check whether your device will work.
---

# How remotes and controllers work

Panels does not talk to remotes or controllers directly. It responds to **keyboard keys**. Any Bluetooth device that presents itself to your iPhone, iPad or Mac as a keyboard can turn pages in Panels, including:

- Bluetooth keyboards, including the Magic Keyboard
- Page-turner remotes, such as the [Satechi R2](./page-turner-remotes.md#satechi-r2) and the [Kobo Remote](./page-turner-remotes.md#kobo-remote)
- Game controllers with a keyboard mode, such as the [8BitDo Micro](./game-controllers.md#8bitdo-micro)

If your device can't act as a keyboard, you may still be able to use it through the accessibility features built into iPhone, iPad and Mac. See [Accessibility options](./accessibility-options.md).

## Keys that turn pages

Which keys turn pages depends on the reader's **Scroll direction** (see [Reader configurations](/read-content/reader-configurations.md)).

| Key | Horizontal scroll direction | Vertical scroll direction |
| --- | --- | --- |
| **Shift + ←** / **Shift + →** | Turn the page, even when zoomed in | — |
| **Shift + ↑** / **Shift + ↓** | — | Turn the page, even when zoomed in |
| **←** / **→** | Turn the page, or move around the page when zoomed in | Move around the page when zoomed in |
| **↑** / **↓** | Move around the page when zoomed in | Turn the page, or move around the page when zoomed in |

← and → follow the screen, not the reading direction. When you read right to left (manga), **←** goes to the next page.

:::tip

If you can choose which keys a device sends, use **Shift + ←** and **Shift + →** for horizontal reading. They turn the page in every horizontal mode, whether or not you are zoomed in.

:::

Some reader modes use the keys differently:

- **Fill screen** and **Adjust to orientation**: **←** / **→** step through the current page section by section, and **Shift + ←** / **Shift + →** jump to the previous or next page.
- **Panels View**: **←** / **→** move between panels, and **Shift + ←** / **Shift + →** jump to the previous or next page.
- **Page curl** (iPhone and iPad): **←** / **→** and **Shift + ←** / **Shift + →** all flip the page.
- **Continuous** page transition: the arrow keys in the scroll direction scroll about three quarters of a screen at a time.

Panels doesn't respond to **Page Up** / **Page Down**.

For every other shortcut, see [Keyboard shortcuts](./keyboard-shortcuts.md).

:::info[Volume buttons]

Remotes that only send **volume up / volume down** won't work. iOS and iPadOS don't let apps use the volume buttons for anything other than volume. This affects many cheap "e-reader page turners" and any remote that only controls media playback.

:::

## Check what your device sends

Before you buy a remote, or if one isn't working, find out which keys it actually sends:

1. Pair the device with your iPhone, iPad or Mac.
2. Open [keyboard-tester.com](https://keyboard-tester.com/) in a browser and press each button. The page highlights the key that each button sends.
3. If the device is a game controller rather than a keyboard, use [hardwaretester.com/gamepad](https://hardwaretester.com/gamepad) instead.

If the buttons show up as arrow keys, the device will work in Panels. If they show up as Page Up / Page Down, volume keys, or nothing at all, it won't.

## Troubleshooting

- **See which shortcuts are active.** With a keyboard connected, press and hold **⌘ (Command)** while reading. iPadOS shows every shortcut Panels currently accepts. On Mac, the shortcuts are listed in the menu bar.
- **The remote stopped responding while I was reading.** Tap the page once, or close and reopen the comic. Users have reported that this occasionally brings the remote back.
- **Up / down buttons don't do anything.** Set the reader's **Scroll direction** to **Vertical** (see [Kobo Remote](./page-turner-remotes.md#kobo-remote)), or remap the buttons to ← / → if your device lets you.
- **← / → don't turn the page.** You may be zoomed in, or using Fill screen, Adjust to orientation or Panels View. Use **Shift + ←** / **Shift + →** instead.
- **My remote has several modes.** Try each one. Page turners usually have a "presentation" or "keyboard" mode, which is the one Panels needs.

Got a device working that isn't listed here? Tell us on [Discord](https://discord.gg/bQ6NMecYFn) and we'll add it.
