---
sidebar_position: 5
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