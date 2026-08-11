# CivicSnap.AI — Data Flow

## Overview

CivicSnap.AI follows a simple request flow from the user-facing frontend through the production proxy and Make automation workflow.

## Request Flow

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
Required Output  
↓  
Webhook Response

## 1. User

The user submits a civic complaint through the frontend interface.

The complaint data is collected from the user and prepared for submission.

## 2. Frontend

The frontend sends the complaint data to the configured production proxy endpoint.

The frontend is responsible for the user-facing interaction and request submission.

## 3. Production Proxy

The production proxy receives the frontend request and forwards the required complaint data to the configured Make webhook.

This layer separates the frontend from the automation endpoint.

## 4. Make Webhook

The Make webhook receives the complaint payload from the production proxy.

The webhook starts the configured complaint-processing scenario.

## 5. Complaint Processing

The Make scenario processes the received complaint data according to the configured automation logic.

Required fields are passed between the configured modules.

## 6. Google Services

The automation workflow can use configured Google services for the required processing and output operations.

The exact Google service used depends on the configured Make scenario.

## 7. Required Output

After processing, the workflow prepares the required output for the frontend or configured destination.

## 8. Webhook Response

The Make workflow returns the configured response after processing the complaint request.

## Data Flow Summary

The complete logical flow is:

User Input → Frontend Request → Production Proxy → Make Webhook → Complaint Processing → Google Services → Required Output → Webhook Response

## Documentation Note

This document describes the logical data flow of CivicSnap.AI.

Implementation-specific configuration is maintained in the project source code and the exported Make automation blueprint.
