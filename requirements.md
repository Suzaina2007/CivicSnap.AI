# CivicSnap.AI — Requirements

## 1. Project Objective

CivicSnap.AI is designed to provide a user-facing civic complaint submission system connected to an automated complaint-processing workflow.

## 2. Functional Requirements

### 2.1 Complaint Submission

The system must allow a user to submit a civic complaint through the frontend interface.

The complaint form should collect the information required by the implemented workflow.

### 2.2 Request Handling

The frontend must send the submitted complaint data to the configured production proxy.

### 2.3 Proxy Processing

The production proxy must receive the frontend request and forward the required data to the configured Make webhook.

### 2.4 Automation

The Make automation must receive the complaint through its webhook and execute the configured processing workflow.

### 2.5 External Services

The automation workflow must be able to use the configured external services required by the implementation.

### 2.6 Automated Communication

The system must perform the configured automated email operation after the required processing steps are completed.

### 2.7 Response Handling

The automation workflow must provide the configured webhook response after processing the request.

## 3. Non-Functional Requirements

### 3.1 Reliability

The frontend, production proxy, and automation workflow should operate together as a consistent end-to-end system.

### 3.2 Security

Sensitive credentials, API keys, access tokens, passwords, and private configuration values must not be committed to the GitHub repository.

### 3.3 Maintainability

The project should keep frontend source code, proxy implementation, automation configuration, and documentation organized according to their individual purposes.

### 3.4 Reproducibility

The Make automation configuration should be preserved through its exported blueprint so that the workflow can be recreated when required.

### 3.5 Documentation

The project should provide sufficient documentation to understand its architecture, workflow, deployment process, security considerations, testing approach, and troubleshooting procedures.

## 4. Repository Requirements

The GitHub repository should contain:

- Frontend source code
- Required project configuration files
- Production proxy implementation where applicable
- Exported Make automation blueprint
- Project documentation
- `.gitignore`
- `.env.example` where environment variables are required

## 5. Environment and Secrets

Environment-specific and sensitive values must remain outside the source repository.

A non-sensitive `.env.example` file should describe required environment variables without containing real credentials or secrets.

## 6. Current Implementation

The frontend, production proxy, and Make automation workflow have been implemented and connected as part of the CivicSnap.AI system.

The requirements documented here describe the implemented system and its intended operational behavior.
