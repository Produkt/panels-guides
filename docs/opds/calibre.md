---
sidebar_position: 4
---

# Calibre

This guide will walk you through the process of connecting Panels to your [Calibre](https://calibre-ebook.com/) instance.

## 📝 Step-by-Step Guide

### 1. **Open Calibre**
Launch the Calibre desktop application.

### 2. **Start the Content Server**

- Click the **"Connect/share"** button on the top toolbar.
- Choose **"Start Content Server"**.

Once started, Calibre runs a web server locally, usually at:  
`http://127.0.0.1:8080` / `http://localhost:8080`

You can also access it via your local IP (e.g., `http://192.168.1.137:8080`) for devices on the same network.

<img src ="/img/calibre-setup/01.png" style={{maxHeight: '500px'}}/>

### 3. **Enable OPDS**

The OPDS feed is automatically enabled when the content server is running.

- To access the OPDS catalog:  
  `http://<your-ip>:8080/opds`

**Example:**  
`http://192.168.1.137:8080/opds`

If you opend that URL on your web browser, you should see something like this: 

<img src ="/img/calibre-setup/03.png" style={{maxHeight: '500px'}}/>

### 4. **Set a Username and Password (Recommended)**

For security, especially if exposing the server over the internet:

- Go to **Preferences > Sharing over the net**
- Check **"Require username and password"**
- Set your credentials

---

## 📱 Accessing OPDS from Panels

Add a new OPDS server and add your server details and credentials (if set)

<img src ="/img/calibre-setup/02.png" style={{maxHeight: '500px'}}/>


---

## 🔐 Exposing to the Internet (Optional)

If you want to access your Calibre OPDS server outside your local network:

- Set up **port forwarding** on your router (forward port 8080)
- Use **dynamic DNS** or a static IP
- Ensure you’ve set up **authentication**

⚠️ *Be cautious when exposing your Calibre server to the internet—use strong passwords and consider additional security layers like a VPN or reverse proxy with HTTPS.*

ℹ️ Check this guide for more information on [how to expose your server using HTTPS](/opds/https).

---