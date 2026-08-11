# CivicSnap.AI Security Documentation

## 1. Security Overview

CivicSnap.AI uses a proxy-based architecture to separate the public frontend from private automation configuration.

The frontend communicates with the public Cloudflare Worker proxy. The proxy forwards requests to the configured Make automation webhook without exposing the private webhook configuration to the frontend.

---

## 2. Public and Private Architecture Boundary

### Public Components

The following components are intentionally accessible to the public:

- CivicSnap.AI frontend
- Cloudflare Worker proxy endpoint

The proxy endpoint is public because the frontend requires it for API communication.

### Private Components

The following information remains private:

- Make webhook configuration
- `MAKE_WEBHOOK_URL` value
- Google service credentials
- API keys
- Authentication tokens
- Service connection credentials
- Other secret environment variables

These values must not be committed to the public GitHub repository.

---

## 3. Secret Management

The Make webhook configuration is maintained on the server-side Cloudflare Worker environment.

The frontend uses only the public proxy endpoint and does not contain the private Make webhook value.

The repository may contain:

- Source code
- Documentation
- Non-sensitive configuration
- Environment variable placeholders

The repository must not contain:

- Secret values
- Private webhook URLs
- Passwords
- API credentials
- Access tokens
- Service credentials
- Private citizen information

The `.env.example` file contains placeholders only and must never contain production secrets.

---

## 4. Proxy Security Role

The Cloudflare Worker provides the security boundary between the public frontend and the Make automation workflow.

The Worker:

- Receives frontend requests.
- Handles CORS preflight requests.
- Accepts supported POST requests.
- Rejects unsupported HTTP methods.
- Checks required server-side configuration.
- Forwards complaint requests to the configured Make webhook.
- Returns the automation response to the frontend.

The private Make webhook configuration remains outside the frontend source code.

---

## 5. Make Automation Security

The Make automation scenario uses configured service connections for external services and automated communication.

These service connections are maintained inside Make and are not stored in the GitHub repository.

The exported Make Blueprint can be stored as a reusable project artifact, but credentials and account connections must be configured separately.

---

## 6. GitHub Security Guidelines

Before publishing or sharing the repository, verify that it does not contain:

- Make webhook secrets
- API keys
- Passwords
- Google credentials
- Access tokens
- Private environment files
- Citizen personal information
- Production service credentials

Only variable names, placeholders, and non-sensitive configuration should appear in documentation.

Example:

```text
MAKE_WEBHOOK_URL=your_webhook_url_here
```

The actual production value must remain private.

---

## 7. Current Security Limitations

The current implementation does not include:

- User authentication
- Rate limiting
- Advanced request-size restrictions
- Advanced origin-based access controls
- A dedicated user authorization system

These can be considered as future security enhancements as the platform scales.

---

## 8. Security Status

The current production architecture keeps the private Make webhook configuration outside the public frontend and repository.

The frontend, Cloudflare Worker proxy, Make automation workflow, and external service connections are operational.

No production credentials or secret values should be committed to GitHub.

---

## 9. Security Maintenance

Security should be reviewed whenever:

- Proxy configuration changes.
- Make integrations change.
- New external services are connected.
- New environment variables are introduced.
- Authentication or authorization is added.
- Deployment infrastructure changes.

The security documentation should be updated whenever the production architecture changes.
