# HTTPS Certificate Installation with mkcert

This guide explains how to install `mkcert` and use pre-generated HTTPS certificates on Windows or macOS.

## Prerequisites

- Install [mkcert](https://github.com/FiloSottile/mkcert).
- Install [nss tools](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS/Tools) (required for macOS).

## Steps

### 1. Install mkcert
Follow the instructions on the [mkcert GitHub page](https://github.com/FiloSottile/mkcert#installation) to install `mkcert` on your system.

### 2. Install the Local CA
Run the following command to install the local Certificate Authority (CA) required to trust the certificates:
```bash
mkcert -install
```

### 3. Use Pre-Generated Certificates
Ensure the pre-generated certificate and key files are available in your project:
- **Certificate**: `localhost.pem`
- **Private Key**: `localhost-key.pem`

### 4. Configure Your Server
Update your server configuration to use the provided certificate and key files:
- **Certificate**: `localhost.pem`
- **Private Key**: `localhost-key.pem`

Refer to your server's documentation for specific configuration steps.

### 5. Verify HTTPS
Start your server and access it via `https://localhost`. Ensure the browser recognizes the certificate as valid.

## Troubleshooting
- If the certificate is not trusted, ensure the local CA is installed correctly.
- For macOS, you may need to manually trust the CA in the Keychain Access app.

For more details, visit the [mkcert documentation](https://github.com/FiloSottile/mkcert).
