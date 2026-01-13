---
sidebar_position: 6
---

# Remote Access (VPN & Tailscale)

This guide covers how to connect Panels to your OPDS server when accessing it remotely through VPN solutions like Tailscale, WireGuard, or ZeroTier.

## Understanding HTTP vs HTTPS in Panels

Panels follows iOS security guidelines (App Transport Security) which affect how connections are made:

- **HTTPS is the default** when connecting to domain names
- **HTTP is allowed** for:
  - Private IP addresses (`192.168.x.x`, `10.x.x.x`, `172.16.x.x`)
  - `.local` domains (e.g., `myserver.local`)

This means that when using a **hostname** (like Tailscale's MagicDNS), Panels will attempt HTTPS first. If your server only supports HTTP, the connection will fail.

⚠️ **Important**: Tailscale IPs (`100.x.y.z`) use the CGNAT range, which may not be treated the same as standard private IPs by iOS. For reliable connections over Tailscale, we recommend enabling HTTPS.

## Tailscale

[Tailscale](https://tailscale.com/) is a popular VPN solution that creates a secure mesh network between your devices. It provides encrypted connections even when using HTTP, since traffic travels through Tailscale's WireGuard tunnel.

### Option 1: Enable HTTPS with Tailscale (Recommended)

Tailscale can automatically provision HTTPS certificates for your devices. This is the most reliable solution.

1. On your server, run:
   ```bash
   tailscale cert your-machine-name.your-tailnet.ts.net
   ```
   This generates certificate files for your machine.

2. Configure your OPDS server (Kavita, Komga, etc.) to use the generated certificate files.

3. In Panels, use the HTTPS URL:
   ```
   https://your-machine-name.your-tailnet.ts.net:5000/opds
   ```

For detailed instructions, see [Tailscale's HTTPS documentation](https://tailscale.com/kb/1153/enabling-https).

### Option 2: Use Tailscale Serve (Easiest)

Tailscale Serve can proxy HTTPS traffic to your HTTP server automatically, without configuring certificates in your OPDS server:

```bash
tailscale serve https / http://localhost:5000
```

This creates an HTTPS endpoint at your Tailscale hostname that proxies to your local HTTP server. Then connect in Panels using:
```
https://your-machine-name.your-tailnet.ts.net/opds
```

### Option 3: Try the Tailscale IP Address

You can try using your server's Tailscale IP address directly:

1. Find your server's Tailscale IP:
   - On Linux/Docker: Run `tailscale ip -4`
   - On Synology: Check the Tailscale package settings
   - On any device: Visit [Tailscale Admin Console](https://login.tailscale.com/admin/machines)

2. Your Tailscale IP will look like `100.x.y.z`

3. In Panels, try this format:
   ```
   http://100.x.y.z:5000/opds
   ```

⚠️ **Note**: This may or may not work depending on iOS security settings. Tailscale IPs (`100.x.y.z`) are in the CGNAT range, which iOS may not treat the same as local network IPs. If this doesn't work, use Option 1 or 2 instead.

## Other VPN Solutions

### WireGuard / ZeroTier / Other VPNs

If you're using another VPN solution, the same principles apply:

1. **Prefer IP addresses over hostnames** when your server only supports HTTP
2. **Set up HTTPS** using a reverse proxy like [Caddy](/opds/https) if you need to use hostnames

### Local Network with VPN

If your VPN assigns addresses in standard private ranges (`10.x.x.x`, `172.16.x.x`, `192.168.x.x`), HTTP should work automatically with those IP addresses.

## Troubleshooting

### "TLS/Secure Connection Error"

This error typically means:
- You're using a hostname (not an IP address) with an HTTP-only server
- **Solution**: Enable HTTPS on your server using Tailscale certificates or Tailscale Serve (see Options 1 and 2 above)

### "Connection Refused" or "Cannot Connect"

Check that:
1. Your VPN is connected on both your iOS device and server
2. The port is correct (common ports: 5000 for Kavita, 8080 for Komga)
3. Your server is running and accessible

### Finding Your Server's IP

| Platform | Command |
|----------|---------|
| Tailscale | `tailscale ip -4` |
| Linux | `ip addr` or `hostname -I` |
| macOS | `ipconfig getifaddr en0` |
| Docker | Check container's network settings |

## Security Considerations

When using VPN solutions like Tailscale:

- **Traffic is already encrypted** by the VPN tunnel, so HTTP is secure within the tunnel
- **Authentication still matters** - use your server's built-in authentication
- **Don't expose ports publicly** - keep your server accessible only through the VPN

ℹ️ If you need to access your server from outside your VPN (e.g., public internet), see our [HTTPS guide](/opds/https) for setting up proper TLS certificates with Caddy.
