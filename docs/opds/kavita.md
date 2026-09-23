---
sidebar_position: 4
description: Connect Panels to your Kavita server over OPDS using Kavita's authorized feed URL, which needs no username or password.
---

# Kavita

This guide covers what's specific to connecting Panels to a [Kavita](https://www.kavitareader.com/) instance. For the parts common to every server — where the OPDS option lives, and how to use the server once it's added — see [connecting a server](connecting-a-server.md).

:::info[Premium feature]

Connecting to OPDS servers like Kavita is part of [Panels Premium](/premium/what-is-panels-premium.md).

:::

## Finding your feed URL

Kavita hands out an **authorized URL**, which has your credentials baked into it. That's why you won't need a username or password in Panels.

In Kavita, go to **Settings → 3rd-Party Clients** and copy the OPDS URL.

<img src ="/img/kavita-setup/04.png" style={{maxHeight: '500px'}} alt="Kavita settings showing the 3rd-Party Clients section"/>
<img src ="/img/kavita-setup/05.png" style={{maxHeight: '500px'}} alt="Kavita showing the OPDS URL to copy"/>

## Connection details

In Panels, go to **Library → Connect Service → OPDS** and paste that URL into the **Host** field.

| Field | Value |
| --- | --- |
| Host | the OPDS URL you copied from Kavita |
| Port | only if your server isn't on port 80 or 8080 |
| Username / Password | **leave empty** |

:::warning

Leave username and password **empty**. The authorized URL already carries your credentials — filling these in will stop the connection working.

:::

<img src ="/img/kavita-setup/02.png" style={{maxHeight: '800px'}} alt="Panels OPDS configuration screen for Kavita"/>

Save the configuration.

## Next steps

Your Kavita server now appears both as a library and as an import service.

→ [Using your server](connecting-a-server.md#using-it-as-a-library)
