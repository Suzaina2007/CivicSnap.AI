# CivicSnap.AI - Make Automation Scenario

## 1. Overview

The Make automation scenario is the automation layer of CivicSnap.AI.

It receives complaint data through the configured webhook, processes the information through the configured automation modules, and performs the required automated output actions.

The scenario is already built, connected, tested, and operational.

---

## 2. Automation Flow

```text
Frontend
   ↓
Production Proxy
   ↓
Make Webhook
   ↓
Complaint Processing
   ↓
Connected Services
   ↓
Email Automation
   ↓
Final Output
```

---

## 3. Scenario Trigger

The scenario is triggered when the production proxy forwards a complaint request to the configured Make webhook.

The webhook receives the complaint information required by the automation workflow.

---

## 4. Complaint Processing

After receiving the webhook request, the Make scenario processes the submitted complaint data through the configured modules.

The processing flow uses the configured mappings and service connections to perform the required operations.

---

## 5. External Service Connections

The scenario uses the required connected external services to complete the automation process.

These connections are configured directly within Make.

Connection credentials and private authentication details are not stored in the GitHub repository.

---

## 6. Email Automation

After the required processing is completed, the scenario performs the configured email automation.

The connected email service sends the required automated communication.

The email delivery flow has been tested successfully.

---

## 7. Blueprint

The complete Make scenario can be exported as a Make Blueprint JSON file.

The Blueprint contains the scenario structure, modules, configuration structure, and mappings required to recreate the automation workflow.

The exported Blueprint is maintained separately from credentials and private connection information.

---

## 8. Blueprint Import

To recreate the scenario in another Make environment:

1. Create or open a Make scenario.
2. Use the Import Blueprint option.
3. Select the exported Blueprint JSON file.
4. Import the scenario.
5. Reconfigure the required service connections.
6. Verify the webhook configuration.
7. Activate the scenario.

Service credentials and account connections must be configured separately after importing the Blueprint.

---

## 9. Security

The following information must never be stored in the GitHub repository:

- API keys
- Passwords
- Access tokens
- Private webhook secrets
- OAuth credentials
- Service connection credentials

Only the non-sensitive Blueprint structure and documentation should be maintained in the repository.

---

## 10. Current Status

The CivicSnap.AI Make automation scenario is:

- Built
- Connected
- Operational
- Tested
- Connected with the production proxy
- Successfully processing complaint requests
- Successfully performing automated email delivery

No additional scenario build is required for the current implementation.

---

## 11. Documentation Purpose

This document explains the Make automation scenario and provides the information required to understand or recreate the workflow in another Make environment.

The exported Blueprint provides the reusable scenario structure, while credentials and service connections are configured separately.
