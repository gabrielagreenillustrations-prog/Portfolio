# ACH Transfers in Hapi
## Designing cross-border money movement under technical constraints

---

## Overview

Hapi is a financial platform that allows users to move money across different instruments, including bank transfers, crypto, and internal wallets.

This project focused on introducing **ACH transfers (U.S. bank transfers)** — a critical feature for users needing to move funds between Latin America and the United States.

---

## The Challenge

At first glance, this seemed like a straightforward feature addition:
*"Add ACH transfers to the existing transfer flow."*

But it wasn't.

### Technical constraint

- ACH transfers could **not be integrated into the existing transfers module**
- Limitations came from **infrastructure and third-party providers**
- The engineering team required a **separate entry point**

### UX implication

Users expect all money movement actions to live in one place.

Instead, ACH was introduced via a **banner entry point** — a deliberate constraint that became a core design challenge: how do you make a non-standard entry feel trustworthy and natural in a financial context?

---

## Key Decisions

### Accept the constraint → design the banner well
Rather than fighting the technical limitation, we leaned into making the banner entry as clear and intentional as possible.

### Structure by intent
The flow starts with a single decision: **deposit** or **withdraw**. This framing keeps users oriented before any complexity is introduced.

### Adapt UI per country
The number of available methods varies significantly by country. The UI had to work with one method or several, without breaking in either scenario.

### Clarify fees and totals
In international transfers, ambiguity erodes trust. Every screen that involved money showed the fee breakdown and the final amount the user would receive.

### Use currency codes (USD), not symbols
The "$" sign is ambiguous across Latin America. Using currency codes eliminated confusion in a product where fiat, crypto, and financial assets coexist.

### Strong confirmation step
A full review screen before execution — all details visible, no surprises at the end.

### Define transaction states
Four clear states: Initiated → In Validation → Additional Validation Required → Completed. The additional validation state handled compliance-triggered document requests without dropping users out of the flow.

### Add account management
A complete system for adding, editing, and deleting U.S. bank accounts — including handling multiple accounts at the same bank.

---

## My Role

**Product Designer** — end-to-end, from flow definition to hi-fi mobile screens and desktop adaptation.

Collaborated with Product Managers, backend and frontend developers, and the compliance and operations team.

---

## Results

- +38% adoption rate for ACH transfers post-launch
- 72% completion rate on initiated transfers
- −25% reduction in support tickets related to money movement
- +18% increase in repeat transfers within 30 days

---

## Learnings

Technical constraints are UX opportunities in disguise. The banner entry point forced us to invest more in the communication *before* the flow — which ended up making the intent clearer than if ACH had been buried inside the existing transfers module.

In fintech for multi-country markets, the real design challenge isn't the individual screen. It's building a UI flexible enough to absorb the variability of regulations, available methods, and currency contexts — without making that complexity visible to the user.
