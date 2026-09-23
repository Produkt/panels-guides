---
sidebar_position: 6
description: Secure your OPDS server with HTTPS using Caddy or Tailscale, and learn which values go in the Server address and Port fields when Panels connects through a reverse proxy.
---

# Expose your server (HTTPS with Caddy)

## HTTPS

If you want to open your OPDS server outside your local network, it is strongly advised to secure it with `https` (especially due to the use of http basic authentication).

We recommend using [Caddy](https://caddyserver.com/) as a reverse proxy, as it supports the automatic generation of [Let's Encrypt](https://letsencrypt.org/) certificates.

## Reverse proxy

Here are some sample configuration on how to configure reverse proxy for your OPDS server.

### Caddy

Without a base URL configured in your OPDS server, using a subdomain:

```
subdomain.yourdomain.com {
  reverse_proxy http://your-opds-server:8080
}
```

With a base URL configured in your OPDS server:

```
yourdomain.com {
  reverse_proxy /path-to-your-server/* http://your-opds-server:8080
}
```

ℹ️ Guide based on the one written by [Komga](https://komga.org/docs/installation/https).

## Tailscale

If you use [Tailscale](https://tailscale.com/) to access your server remotely, you can enable HTTPS using Tailscale's built-in certificate provisioning. See their guide: [Enabling HTTPS](https://tailscale.com/kb/1153/enabling-https).

The simplest option is Tailscale Serve, which puts an HTTPS reverse proxy in front of your server and keeps it private to your tailnet (no Funnel, no ports opened on your router):

```
tailscale serve --bg http://127.0.0.1:25600
```

Your server is then reachable at `https://<machine>.<tailnet>.ts.net`, on the standard HTTPS port.

:::caution
Connecting to a Tailscale IP address over plain `http` (for example `http://100.83.81.70:25600`) will not work in Panels, even though it works in Safari. iOS blocks unencrypted connections to those addresses, and unlike your home network's range, they cannot be exempted. Use Tailscale Serve, or any other reverse proxy, so the connection is HTTPS.
:::

## Entering a proxied server in Panels

Once your server is behind HTTPS, the whole address goes in the **Server address** field, and the **Port** field stays **empty**:

| Field | Value |
| --- | --- |
| Server address | `https://subdomain.yourdomain.com/your-opds-path` |
| Port | _(leave empty)_ |
| Username / Password | your usual server credentials |

A reverse proxy already listens on the standard HTTPS port, so there is no port to enter. Don't add one to the address either: the port your server uses internally (`8080`, `25600`, or whatever you set in Docker) is not the port Panels needs to reach.

For a Komga instance behind Tailscale Serve, that is:

| Field | Value |
| --- | --- |
| Server address | `https://media.tailnet-name.ts.net/opds/v1.2/catalog` |
| Port | _(leave empty)_ |

:::tip
Tapping the Port field fills it with `8080` automatically. That default is meant for servers you reach directly on your local network, so if you are using a reverse proxy, clear it before tapping _Apply_.
:::

The **Port** field is only for connecting straight to your server without a proxy, which is typically how you would reach it from home:

| Field | Value |
| --- | --- |
| Server address | `http://192.168.1.10` |
| Port | `25600` |
