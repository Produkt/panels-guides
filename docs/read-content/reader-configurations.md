---
sidebar_position: 1
description: Configure the Panels reader — page transition, scroll direction, page fitting and dynamic background — and save your setups as presets.
---

# Reader presets and configurations

Panels' reader supports many different configurations. To make it easy to switch between them, we introduced **Presets**.

## Presets

Presets are simply saved reader configurations. So maybe you'd like to have a reader configuration for reading Manwas and another with page curl for reading regular comics.

We provide 5 default presets:

- Standard: horizontal paginated scroll. Will set itself to double page when reading in landscape.
- Vertical scroll
- Fill screen
- Adjust to orientation
- Page curl

:::info[Premium feature]

The Fill screen, Adjust to orientation, and Page curl reading modes are part of [Panels Premium](/premium/what-is-panels-premium.md).

:::

You can edit, rename and delete any of those configurations. Just go to reader settings -> Presets.

<img src="/img/reader-default-configurations.png" alt="Panels reader settings showing the five default presets" style={{width: 400}} />

:::tip

If you delete all presets, the app will restore them all to show default configurations.

:::

## Reader configurations

While reading, you can tap "..." -> Configure reader. This will take you to the reader configuration screen.

![Reader configurations](/img/reader-configurations.png)

Here you can feel free to configure the reader to your liking. When you finish, taping "X" will close the screen and the new configuration will be applied for the current comic, but it won't be saved as a preset. If you want to save the configuration, tap the "Save" button and give it a name.

We offer the following options to configure the reader:

- Page transition
  - Paginated: scroll will move page by page
  - Continuous: scroll will be free
  - Page curl: paginated, with curl animation
- Scroll direction
  - Horizontal
  - Vertical
- Number of pages
  - One
  - Two
  - Automatic (one or two, based on screen width -- usually, landscape orientation will default to 2 pages)
- Page fitting
  - Fit: the page will resize to fit into the page
  - Fill: the page will resize to fill the page, overflowing vertically or horizontally depending on the image and screen size/orientation
  - Automatic
- Background color
  - Black
  - White
  - Dynamic background
    - Single color: Panels will analyze each page and extract the most prominent color to apply to the background
    - Immersive: Panels will calculate different prominent colors and will fade between them, creating an immersive experience

Examples of immersive dynamic color using Invincible vol. 1
<img src="/img/reader-immersive-1.png" alt="Reader using immersive dynamic background color" style={{width: 400}} />
<img src="/img/reader-immersive-2.png" alt="Reader using immersive dynamic background color on another page" style={{width: 400}} />
