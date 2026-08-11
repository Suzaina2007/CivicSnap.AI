# CivicSnap.AI - Troubleshooting

## 1. Overview

This document describes common issues that may occur while running, connecting, or maintaining CivicSnap.AI.

It provides guidance for identifying and resolving problems across the frontend, production proxy, and Make automation workflow.

---

## 2. Frontend Issues

### Issue: Frontend is not loading

Possible causes:

- Missing dependencies.
- Build failure.
- Incorrect project configuration.
- Hosting configuration issue.

Resolution:

- Verify project dependencies are installed.
- Check build logs.
- Confirm deployment configuration.
- Ensure the frontend environment is correctly configured.

---

## 3. Frontend Request Issues

### Issue: Complaint submission is not reaching the backend

Possible causes:

- Incorrect proxy URL.
- Frontend configuration issue.
- Network communication problem.

Resolution:

- Verify the production proxy endpoint.
- Check browser network requests.
- Confirm the request payload format.
- Verify frontend configuration values.

---

## 4. Production Proxy Issues

### Issue: Proxy is not forwarding requests

Possible causes:

- Incorrect webhook configuration.
- Missing environment variables.
- Proxy deployment issue.

Resolution:

- Verify proxy deployment status.
- Confirm webhook configuration.
- Check runtime logs.
- Verify secure environment settings.

---

## 5. Make Automation Issues

### Issue: Make scenario is not triggering

Possible causes:

- Webhook connection problem.
- Scenario is inactive.
- Invalid incoming data.

Resolution:

- Verify the webhook URL.
- Confirm the Make scenario is activated.
- Check incoming webhook data.
- Review scenario execution history.

---

## 6. External Service Issues

### Issue: Connected services are not working

Possible causes:

- Authentication failure.
- Expired connection.
- Incorrect permissions.

Resolution:

- Verify service connections.
- Reauthorize required integrations.
- Check account permissions.

---

## 7. Email Automation Issues

### Issue: Automated email is not sent

Possible causes:

- Gmail connection issue.
- Workflow execution failure.
- Invalid email information.

Resolution:

- Check Make scenario execution logs.
- Verify Gmail integration.
- Confirm recipient information.
- Re-run the workflow after fixing the issue.

---

## 8. Data Flow Issues

### Issue: Complaint data is incomplete or incorrect

Possible causes:

- Incorrect frontend input.
- Payload formatting issue.
- Processing error.

Resolution:

- Verify submitted data.
- Check request payload.
- Review automation module mapping.

---

## 9. Repository Issues

### Issue: Sensitive information accidentally added

Resolution:

- Remove secrets immediately.
- Rotate exposed credentials.
- Update environment configuration.
- Add sensitive files to `.gitignore`.

---

## 10. Debugging Approach

Recommended troubleshooting order:

```text
Frontend
   ↓
Production Proxy
   ↓
Make Webhook
   ↓
Automation Scenario
   ↓
External Services
   ↓
Final Output
```

Check each layer independently to identify the source of the issue.

---

## 11. Current System Status

The CivicSnap.AI system has been built, connected, and verified.

The troubleshooting guide exists for future maintenance, debugging, and deployment support.

---

## 12. Documentation Purpose

This document provides general troubleshooting guidance for maintaining CivicSnap.AI.

Actual logs, credentials, and private configuration details should remain protected.
