# CivicSnap.AI - Deployment

## 1. Overview

This document describes the deployment structure and deployment considerations for CivicSnap.AI.

The system consists of a frontend application, production proxy layer, and Make automation workflow.

---

## 2. Deployment Architecture

The deployment flow is:

```text
Frontend Application
        ↓
Production Proxy
        ↓
Make Automation Workflow
        ↓
Connected External Services
        ↓
Final Output
```

---

## 3. Frontend Deployment

The frontend application is maintained as a version-controlled project in GitHub.

Deployment process includes:

- Install project dependencies.
- Build the production application.
- Deploy the generated frontend application to the selected hosting platform.
- Configure the production environment.

The frontend connects to the production proxy endpoint after deployment.

---

## 4. Production Proxy Deployment

The production proxy works as the communication layer between the frontend and automation workflow.

Deployment responsibilities:

- Maintain the production proxy endpoint.
- Keep required environment variables secure.
- Protect webhook communication.
- Ensure frontend requests are correctly forwarded.

The production proxy should be deployed separately from the frontend application.

---

## 5. Make Automation Deployment

The Make scenario represents the automation backend of CivicSnap.AI.

Deployment process:

1. Import the exported Make blueprint when required.
2. Configure required service connections.
3. Configure webhook settings.
4. Verify external integrations.
5. Activate the scenario.

The exported blueprint is maintained in the repository for backup and reproducibility.

---

## 6. Environment Configuration

Production configuration values should be maintained securely.

The repository should not contain:

- Production secrets
- API keys
- Passwords
- Private tokens
- Sensitive webhook credentials

Environment-specific values should be configured through secure deployment settings.

---

## 7. Deployment Verification

After deployment, verify:

- Frontend loads successfully.
- Frontend communicates with the production proxy.
- Proxy forwards requests correctly.
- Make webhook receives requests.
- Automation workflow executes successfully.
- Automated email delivery works correctly.

---

## 8. Backup and Recovery

Important project assets should be maintained safely:

- Frontend source code in GitHub.
- Documentation files in GitHub.
- Make automation blueprint exported and stored.
- Environment secrets stored separately.

---

## 9. Current Deployment Status

The CivicSnap.AI system components have been built, connected, and verified.

The frontend, production proxy, and Make automation workflow operate together as the complete system.

---

## 10. Documentation Purpose

This document explains the deployment structure of CivicSnap.AI.

Actual hosting details, credentials, and private deployment configurations should remain protected and managed separately.
