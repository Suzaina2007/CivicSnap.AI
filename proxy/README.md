# CivicSnap.AI - Cloudflare Proxy

## 1. Overview

The CivicSnap.AI Cloudflare Worker acts as a secure proxy between the frontend application and the Make automation webhook.

It receives complaint requests from the frontend and forwards them to the configured Make webhook.

---

## 2. Request Flow

```text
Frontend
   ↓
Cloudflare Worker Proxy
   ↓
Make Webhook
   ↓
Automation Workflow
```

---

## 3. Proxy Responsibilities

The proxy is responsible for:

- Receiving frontend API requests.
- Handling the configured request method.
- Forwarding complaint data to the Make webhook.
- Returning the Make response to the frontend.
- Handling CORS requests.
- Keeping the Make webhook configuration outside the source code.

---

## 4. Environment Configuration

The proxy uses an environment variable for the Make webhook configuration.

```text
MAKE_WEBHOOK_URL
```

The actual webhook URL must be configured as a Cloudflare Worker secret or environment variable.

The real value must never be committed to GitHub.

---

## 5. CORS Handling

The proxy supports the required CORS behavior so that the deployed frontend can communicate with the Cloudflare Worker.

Preflight `OPTIONS` requests are handled separately before processing the main request.

---

## 6. Request Forwarding

For complaint submissions, the proxy forwards the received request data to the configured Make webhook.

The proxy preserves the required request information and returns the response received from the automation workflow.

---

## 7. Error Handling

The proxy handles common request and forwarding failures.

Errors should be returned without exposing private configuration values or credentials.

---

## 8. Security

The following information must not be stored in this repository:

- Make webhook URLs containing private secrets.
- API keys.
- Authentication tokens.
- Passwords.
- Cloudflare credentials.

Only the proxy source code and non-sensitive documentation are stored in GitHub.

---

## 9. Deployment

The proxy is deployed as a Cloudflare Worker.

The production Worker is already deployed and operational.

When the Worker source code is updated, the updated Worker must be redeployed through the configured Cloudflare deployment workflow.

---

## 10. Current Status

The CivicSnap.AI Cloudflare Worker proxy is:

- Deployed
- Connected to the Make automation workflow
- Connected with the frontend
- Operational
- Tested as part of the end-to-end workflow

---

## 11. Documentation Purpose

This document explains the role, configuration, security, and deployment of the CivicSnap.AI Cloudflare Worker proxy.

The actual source code is maintained in `proxy/worker.js`.
