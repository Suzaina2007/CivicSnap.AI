# CivicSnap.AI — Project Overview

CivicSnap.AI is a civic complaint management system designed to help users submit complaints and route them through an automated processing workflow.

## Project Purpose

The project connects a user-facing frontend with a production proxy and a Make automation workflow for complaint processing and service integration.

## Core Components

1. **Frontend**
   - Provides the user-facing complaint submission interface.
   - Collects complaint information from users.
   - Sends complaint data to the configured backend/proxy endpoint.

2. **Production Proxy**
   - Acts as the controlled connection layer between the frontend and the automation workflow.
   - Receives frontend requests and forwards the required data to the configured webhook.

3. **Make Automation**
   - Receives complaint data through a webhook.
   - Processes the complaint according to the configured scenario.
   - Connects with required Google services and other configured modules.
   - Produces the required workflow response.

## High-Level Flow

User → Frontend → Production Proxy → Make Webhook → Complaint Processing → Google Services → Required Output → Webhook Response

## Current Project State

The frontend project is present in the repository and the Make automation blueprint has been added for documentation, backup, version history, and reproducibility.

The project architecture is documented separately in `architecture.md`.

## Scope of This Document

This document provides a high-level overview of the CivicSnap.AI project. Detailed architecture, automation configuration, data flow, and implementation documentation are maintained separately.
