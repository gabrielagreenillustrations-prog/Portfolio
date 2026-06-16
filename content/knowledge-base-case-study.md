# AtomChat Knowledge Base
## Centralizing knowledge to scale AI Agents consistently

---

## Context

AtomChat is an omnichannel SaaS platform that enables businesses to communicate with customers through messaging channels like WhatsApp and automated campaigns.

With the introduction of **Smartons** — AI Agents within the Flow Builder — the product evolved toward more intelligent conversational experiences. However, this evolution exposed a critical limitation in how knowledge was managed.

---

## The Problem

Each Smarton could have its own knowledge base by attaching files independently.

Initially flexible, this approach quickly created friction:

- Duplicated information across agents
- Inconsistent responses
- Difficult maintenance and updates
- Lack of centralized control

As customers scaled their use of AI Agents, the problem scaled with them.

**Key insight:**
The issue wasn't lack of information — it was the lack of a system to manage it.

---

## The Opportunity

Design a solution that would:

- Centralize knowledge
- Enable reuse across multiple agents
- Ensure consistency in responses
- Reduce operational overhead

---

## My Role

**Product Designer (UX/UI)**

- Led end-to-end experience design
- Defined information architecture
- Validated solutions with stakeholders and users

Collaborated with:
- Product Manager
- Product Owner
- Tech Lead + 1 Developer

---

## Process

### 1. Research

I analyzed how CRMs and AI platforms manage knowledge bases.

**Findings:**
- Most solutions embed knowledge directly within agents
- Few offer reusable, centralized libraries
- Users strongly prefer folder-based organization

We also gathered direct feedback from active users.

---

### 2. Defining the Approach

There was a clear tension:

- **Ideal:** Highly flexible and powerful system
- **Reality:** Risk of adding complexity to an already robust product

**Decision:**
Design a **progressive MVP** focused on:

- Simplicity
- Familiar mental models (drive-like experience)
- Future scalability

---

### 3. Design & Iteration

I explored multiple directions:

- Folder and subfolder structures
- Navigation rules
- File states and metadata
- Integration with Smartons

The biggest challenge was ensuring **cross-platform consistency**, especially between:

- Settings (Knowledge Base)
- Flow Builder (Smartons)

After several iterations, we aligned on a scalable and intuitive solution.

---

## The Solution

A new submodule within Settings:

### **File Manager (Knowledge Base)**

A drive-like experience where users can:

- Create folders
- Upload files
- Organize content
- Reuse knowledge across AI Agents

---

## Key Features

### 1. Flexible Structure
- Folders and subfolders
- Intuitive organization

### 2. File States
- Processing
- Available
- Error

### 3. Metadata Visibility
- File type (Knowledge Base or Resource)
- Size
- Created and updated dates
- Usage tracking

### 4. Quick Actions
- Edit / replace files
- Delete
- Update content

### 5. Guided Empty State
- Prompts users to create folders or upload files

---

## Critical Design Decisions

### Navigation Hierarchy
Defined folder depth and structure without compromising usability.

### System Consistency
Aligned experience across:
- Settings
- Flow Builder

### File Classification
Implemented manual classification in MVP (identified as a friction point).

---

## Impact

While quantitative metrics are not yet available, qualitative impact shows:

- Strong alignment across AI-related features
- Reduced duplication of information
- Improved clarity in knowledge management
- Scalable foundation for AI growth

**Key outcome:**
The Knowledge Base became a **core system layer** supporting AI capabilities in AtomChat.

---

## Learnings

### Design systems, not just features
The problem required structural thinking, not a surface-level fix.

### Familiarity drives adoption
A drive-like model reduced the learning curve significantly.

### The right MVP unlocks value early
Shipping a simplified version enabled faster impact.

---

## What I'd Do Differently

### 1. Automatic File Classification
Reduce user error by detecting file type automatically.

### 2. Deeper Knowledge Personalization
- Link knowledge bases to agents or projects
- Enable more dynamic structures

### 3. Smarter Knowledge Systems
Move toward systems where:
- Knowledge adapts to context
- AI agents better interpret structured information

---

## Closing

This project went beyond organizing files.

It redefined how knowledge is structured within the product —
transforming fragmented information into a centralized system that enables scalable, consistent AI experiences.
