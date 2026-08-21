# Agentic Automation / AI Platform - Draft Context

## Purpose

This presentation proposes a new internal Automation / AI Platform for a fintech organization with many in-house systems, a growing data platform, and a growing knowledge base.

The core message:

The organization already has data, code, and knowledge. The missing layer is a controlled platform that lets people query, understand, and act on that knowledge and data through AI-powered interfaces.

## Current Assets

### Data Platform

The organization already has a data platform in GCP. It collects data from many business and technical sources and should become a self-serve environment.

Important data sources:

- Enklare private loan data from the brokering business
- Entra data from the lending business
- Google Analytics
- Google Ads and Meta Ads
- Insider
- Leaddesk
- Other operational data sources
- Data models and ML models

The data platform is the source for facts, metrics, reports, analytics, and model outputs.

### Knowledge Base

The organization has a repo called `agent-skills`. It contains markdown-based knowledge and skills.

Main knowledge areas:

- Product context: end-to-end business process explanations
- Organization setup context
- Process context: how teams work
- System architecture and overview context

This knowledge base explains how the business works, how systems connect, and how teams should act.

### Codebase Access

The organization also has codebase access. This gives a real view into system behavior, APIs, data contracts, service ownership, and technical implementation.

## Knowledge Graph

The knowledge graph is shaped by:

- The markdown knowledge base
- The codebase
- System architecture and product context
- Business terms and technical terms

This graph should map business language to technical language.

Example:

- Business says: "lead quality"
- Data may say: campaign source, conversion rate, loan application state, customer segment
- Systems may say: CRM fields, broker service events, marketing attribution IDs

The platform must understand this mapping so users can ask natural questions and still get correct technical answers.

## Problem

Today there is a gap between business language and technical language.

This creates friction:

- Business users need insights but do not know where the data lives
- Technical users know the systems but not always the business question
- Reports require manual coordination
- Automation is hard because actions cross many systems
- AI tools are useful, but without context and permissions they are unsafe or shallow

## Proposal

Build an Automation / AI Platform.

The platform sits between:

- Data Platform
- Knowledge Graph
- Systems and services
- User interfaces

It gives users controlled ways to:

- Ask questions
- Get insights
- Generate reports
- Take actions
- Automate repeated work

Supported interfaces:

- Slack bots and Slack apps
- General chat bots on websites, such as customer support bots
- Codex integration for employees
- Internal apps and workflows

The result:

The organization becomes queryable and agentic.

## Platform Responsibilities

The Automation / AI Platform should provide:

- Query capability across data and knowledge
- Action capability across systems and services
- RBAC and permission enforcement
- Audit logs
- Tool registry
- Business-to-technical term mapping
- Agent orchestration
- Safe access to systems and services
- Integration with Codex and other employee workflows

## Relation To Agentic Product Development Workflow

The existing `agentic-workflow` presentation focuses on bringing AI and LLMs into day-to-day product development.

This new platform does not replace that workflow.

It lives side by side with it.

It supports that workflow by making business context, data, and system actions easier to access.

## Example Use Cases

### Sales User

A sales user can automate a daily report and get performance insights without manually collecting data from several dashboards.

### Head Of Marketing

The head of marketing can ask for insights that combine sales data, marketing dashboards, Insider reports, and Google Ads data.

### Customer Service Agent

A customer service agent can automate manual work, ask for customer context, and take approved actions in connected services.

### Product And Tech Teams

Product and tech teams can use Codex and platform tools to query systems, inspect data, understand product behavior, and automate internal workflows.

## Whiteboard Reference

The original whiteboard sketch is stored here:

- `assets/whiteboard-reference.jpeg`

## Draft Storyline

1. We already have important assets: data, knowledge, and code.
2. These assets are not enough by themselves. Users need a way to ask and act.
3. The main gap is the translation between business language and technical systems.
4. The Automation / AI Platform fills that gap.
5. It connects interfaces, RBAC, tools, data, knowledge, and systems.
6. It enables real use cases across sales, marketing, customer service, and product development.
7. The ask is to treat this as a platform capability, not a set of isolated chatbots.
