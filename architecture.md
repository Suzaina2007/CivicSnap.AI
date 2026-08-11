# CivicSnap.AI — Architecture

## 1. System Overview

CivicSnap.AI consists of three primary components:

1. Frontend
2. Production Proxy
3. Make Automation Scenario

The complete working flow is:

Frontend → Production Proxy → Make Automation → Processing → Automated Email / Output

The frontend collects the complaint and sends the request to the production proxy.

The production proxy forwards the request to the Make automation scenario.

The Make scenario receives the complaint, processes the required workflow, and performs the configured actions, including automated email delivery.

---

## 2. Frontend

### Purpose

The frontend provides the user-facing complaint submission interface.

### Responsibilities

- Display the complaint form and user interface.
- Collect complaint information.
- Prepare the complaint payload.
- Send the complaint request to the production proxy.

### Repository

The frontend source code is maintained in the GitHub repository:

`CivicSnap.AI-New`

The main application source is located under:

`src/`

Important frontend files include:

- `src/App.tsx`
- `src/main.tsx`
- `src/index.css`
- `src/components/`
- `index.html`
- `package.json`
- `package-lock.json`
- `vite.config.ts`
- TypeScript configuration files
- Tailwind/PostCSS configuration files

The frontend has been built, connected, and verified as part of the working end-to-end system.

---

## 3. Production Proxy

### Purpose

The production proxy acts as the production connection layer between the frontend and the Make automation backend.

### Responsibilities

- Receive complaint requests from the frontend.
- Forward the required request and payload to the Make webhook.
- Maintain the production connection between the frontend and automation workflow.

The production proxy has already been built, connected, configured, and verified.

The frontend successfully sends requests through the proxy, and the proxy successfully passes them to the Make automation.

The proxy is treated as a runtime/deployment component.

Sensitive credentials, API keys, webhook secrets, and private configuration values must not be stored in the GitHub repository.

---

## 4. Make Automation Scenario

### Purpose

The Make scenario is the automation and processing layer of CivicSnap.AI.

### Responsibilities

- Receive the complaint through the webhook.
- Process the complaint data.
- Execute the configured workflow.
- Work with the connected Google services.
- Generate the required outputs.
- Send the automated email.
- Return the configured webhook response.

The Make scenario has already been fully built, connected, and verified.

The complete complaint-processing flow is operational, including automated email delivery.

The current scenario contains the configured webhook, Google Drive, Google Sheets, Google Docs, Gmail, and webhook response modules required by the workflow.

---

## 5. Make Blueprint

The Make scenario has been exported as a Make blueprint and stored in the GitHub repository.

Blueprint file:

`civicsnap-complaint-automation.json`

The blueprint is an exported configuration of the Make scenario.

It is stored in GitHub for documentation, backup, version history, and reproducibility.

The blueprint is not the runtime itself.

If the automation needs to be recreated in another Make environment, the blueprint can be imported into Make and the required connections can be configured for that environment.

---

## 6. End-to-End Flow

```text
User
  ↓
Frontend
  ↓
Production Proxy
  ↓
Make Webhook
  ↓
Complaint Processing
  ↓
Google Services
  ↓
Gmail / Required Output
  ↓
Webhook Response
