# CivicSnap.AI - API Design

## 1. Overview

This document defines the API communication design between the CivicSnap.AI frontend, production proxy layer, automation workflow, and external services.

The API layer enables complaint submission, request processing, automation triggering, and response delivery.

---

## 2. API Architecture

The communication architecture follows this flow:

```text
Frontend
   ↓
Production Proxy
   ↓
Make Automation Webhook
   ↓
Automation Processing
   ↓
External Services
   ↓
Response Handling
```

---

## 3. Complaint Submission API

### Purpose

The frontend collects complaint information from the user and sends the complaint request through the production proxy.

### Request Method

```text
POST
```

### Request Flow

```text
User Complaint
      ↓
Frontend
      ↓
Production Proxy
      ↓
Make Webhook
```

### Request Body Example

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "category": "Civic Issue",
  "description": "Complaint details",
  "location": "Area details"
}
```

### Response Example

```json
{
  "success": true,
  "message": "Complaint submitted successfully",
  "status": "processing"
}
```

---

## 4. Automation Webhook API

### Purpose

The production proxy forwards the complaint request to the Make automation webhook.

The webhook receives the complaint payload and starts the configured automation workflow.

### Processing Flow

```text
Complaint Request
        ↓
Production Proxy
        ↓
Make Webhook
        ↓
Automation Scenario
        ↓
Required Output
```

---

## 5. Status Tracking

### Purpose

The system can maintain the processing state of a submitted complaint.

### Possible Status Values

- Received
- Processing
- Completed
- Failed

### Response Example

```json
{
  "complaintId": "12345",
  "status": "completed"
}
```

---

## 6. Error Handling

The API communication should handle failures in a structured manner.

Common error scenarios include:

- Invalid complaint data
- Failed request forwarding
- Webhook processing failure
- External service failure

Error responses should provide useful information without exposing sensitive system details.

---

## 7. Security Considerations

The API design follows security best practices:

- Do not expose private credentials.
- Protect webhook endpoints.
- Keep API keys and secrets outside the repository.
- Validate incoming requests.
- Use secure communication channels.
- Avoid storing sensitive information in source control.

---

## 8. Future Extensions

Possible future improvements include:

- User authentication
- Complaint history tracking
- Real-time notifications
- Additional service integrations
- Advanced complaint analytics

---

## 9. Documentation Note

This document describes the API communication design of CivicSnap.AI.

Runtime configuration, secrets, deployment-specific values, and private credentials are maintained separately.

The API design documentation represents the communication structure between frontend, production proxy, and automation workflow.
