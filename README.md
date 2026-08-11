# CivicSnap.AI

## AI-Powered Civic Issue Reporting Platform

CivicSnap.AI is a digital civic issue reporting platform that helps citizens submit structured reports for public infrastructure and civic problems.

The platform collects complaint details such as citizen information, issue category, severity, description, location, and supporting photo evidence. Submitted complaints are securely forwarded through a Cloudflare Worker proxy to a Make automation workflow for processing and automated communication.

---

## Problem Statement

Reporting civic issues can often be unclear, time-consuming, and difficult to document properly.

CivicSnap.AI provides a structured digital workflow that simplifies complaint submission, evidence collection, automated processing, and communication with the relevant authority.

---

## Key Features

- Citizen complaint submission
- Civic issue category selection
- Severity selection
- Complaint description
- Location information
- Photo evidence upload
- Structured complaint processing
- Automated complaint document generation
- Automated authority email notification
- Secure frontend-to-backend communication
- Cloudflare Worker proxy protection
- Make.com automation workflow

---

## System Architecture

The production system follows this flow:

```text
Citizen
   ↓
CivicSnap.AI Frontend
   ↓
Cloudflare Worker Proxy
   ↓
Make Webhook
   ↓
Make Automation
   ↓
Connected External Services
   ↓
Automated Email / Output
```

The Cloudflare Worker acts as the bridge between the public frontend and the private Make automation webhook.

Detailed architecture is documented in:

- [Architecture](architecture.md)
- [API Design](api-design.md)
- [Data Flow](data-flow.md)
- [Workflow](workflow.md)

---

## Technology Stack

### Frontend

- React
- TypeScript
- Vite
- CSS / Tailwind-based styling

### Proxy Layer

- Cloudflare Workers
- JavaScript
- Environment/secret-based webhook configuration

### Automation

- Make.com
- Webhooks
- Connected external services
- Automated email processing

### Repository

- GitHub

For detailed information:

- [Technology Stack](tech-stack.md)

---

## Project Structure

```text
CivicSnap.AI-New/
│
├── proxy/
│   ├── worker.js
│   └── README.md
│
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.tsx
│   │   ├── ComplaintForm.tsx
│   │   └── Header.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── api-design.md
├── architecture.md
├── data-flow.md
├── deployment.md
├── make-scenario.md
├── project-overview.md
├── requirements.md
├── security.md
├── tech-stack.md
├── testing.md
├── troubleshooting.md
├── workflow.md
├── .env.example
└── .gitignore
```

---

## Make Automation

The Make.com scenario is already built, connected, tested, and operational.

The automation workflow receives complaint data through the configured webhook, processes the submitted information, and performs the configured automated output actions.

The Make scenario can be maintained and recreated using its exported Blueprint.

The repository documentation for the automation workflow is available in:

- [Make Scenario Documentation](make-scenario.md)

Credentials and private service connections are configured separately and are not stored in GitHub.

---

## Cloudflare Proxy

The Cloudflare Worker provides a secure communication layer between the frontend and the private Make webhook.

Responsibilities include:

- Receiving frontend requests
- Handling CORS requests
- Forwarding complaint data to Make
- Returning the automation response
- Keeping the private Make webhook configuration outside the frontend

Proxy source code:

`proxy/worker.js`

Proxy documentation:

[Cloudflare Proxy Documentation](proxy/README.md)

---

## Security

CivicSnap.AI follows basic secure integration practices:

- The frontend communicates through the public proxy endpoint.
- The private Make webhook is not exposed directly to the frontend.
- Webhook URLs and credentials are stored as secure configuration values.
- API keys, tokens, passwords, and service credentials are not committed to GitHub.
- `.env.example` contains placeholders only.
- External service credentials are configured separately in their respective platforms.

Detailed security information:

- [Security](security.md)

---

## Testing and Current Status

The production workflow has been tested successfully.

Current status:

- Frontend — Working
- Cloudflare Worker proxy — Working
- Frontend-to-proxy communication — Working
- Proxy-to-Make communication — Working
- Make automation — Working
- Automated email workflow — Working
- End-to-end complaint flow — Working

Testing details:

- [Testing](testing.md)

---

## Deployment

The production workflow is:

```text
Frontend
   ↓
Cloudflare Worker Proxy
   ↓
Make Scenario
   ↓
Connected Services
   ↓
Automated Output
```

The frontend is published and operational.

The Cloudflare Worker proxy is deployed and operational.

The Make automation scenario is active and operational.

Deployment documentation:

- [Deployment](deployment.md)

---

## Environment Configuration

Sensitive configuration values must not be committed to GitHub.

Example configuration is provided through:

`.env.example`

Actual secrets such as:

- API keys
- Webhook URLs
- Access tokens
- Passwords
- Service credentials

must be configured securely in the appropriate deployment or service environment.

---

## Limitations

- Requires internet connectivity.
- Depends on external automation and service integrations.
- Complaint processing depends on the availability of connected services.
- Authority-side actions after automated notification are not currently tracked.
- A dedicated complaint tracking system is not currently implemented.

---

## Future Improvements

Possible future enhancements include:

- Complaint tracking IDs
- Complaint status tracking
- Authority dashboard
- User notifications
- AI-assisted issue classification
- Advanced complaint analytics
- Complaint history
- Additional government service integrations

---

## Documentation

### Project

- [Project Overview](project-overview.md)
- [Requirements](requirements.md)
- [Technology Stack](tech-stack.md)

### Architecture and Integration

- [Architecture](architecture.md)
- [API Design](api-design.md)
- [Data Flow](data-flow.md)
- [Workflow](workflow.md)
- [Make Scenario](make-scenario.md)

### Engineering

- [Testing](testing.md)
- [Security](security.md)
- [Deployment](deployment.md)
- [Troubleshooting](troubleshooting.md)

---

## Project Status

**CivicSnap.AI is currently operational in its published production workflow.**

The frontend, Cloudflare proxy, Make automation, automated communication flow, GitHub repository, and supporting project documentation are in place.
