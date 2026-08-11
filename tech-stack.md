# CivicSnap.AI — Tech Stack

## Frontend

The CivicSnap.AI frontend is built using modern web technologies and is maintained as the main user-facing application.

The frontend project uses:

- React
- TypeScript
- Vite
- Tailwind CSS
- HTML5
- CSS

## Production Proxy

The production proxy provides the connection layer between the frontend and the automation backend.

It is deployed as a production web endpoint and handles forwarding requests from the frontend to the configured Make webhook.

## Automation

The automation layer is implemented using Make.

Make is responsible for:

- Receiving the complaint webhook
- Processing the submitted data
- Running the configured workflow
- Connecting with required external services
- Sending automated email
- Returning the configured webhook response

## External Services

The current automation workflow uses configured Google services and Gmail integration where required by the implementation.

## Source Control

GitHub is used for:

- Frontend source-code version control
- Project documentation
- Make automation blueprint storage
- Project configuration and reproducibility

## Configuration

Environment-specific values and secrets are kept outside the repository.

A `.env.example` file can be used to document required environment variables without exposing real credentials.

## Automation Blueprint

The Make scenario is preserved as an exported JSON blueprint:

`civicsnap-complaint-automation.json`

The blueprint provides a reusable representation of the Make automation configuration.

## Technology Architecture

```text
React + TypeScript + Vite
          ↓
   Production Proxy
          ↓
      Make Webhook
          ↓
   Automation Workflow
          ↓
 Google Services / Gmail
          ↓
       Output
