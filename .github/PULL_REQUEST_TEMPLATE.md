---
name: Pull Request Template
about: Standard template for all code merges.
---

## Links & Tickets
- Fixes # (Issue Number)

## Type of Change
- [ ] `pkg: database` (Requires database migration/schema sync)
- [ ] `pkg: ui` (Shared Design System update)
- [ ] `app: client` / `app: vet-dash` / `app: admin`
- [ ] Chore / Workspace configuration

## Proposed Changes
A clear, concise summary of the structural or logical implementation.

## Verification Checklist
- [ ] Workspace builds locally with zero errors (`npm run build`).
- [ ] TypeScript compilation checks pass with zero warnings (`npm run type-check`).
- [ ] Code strictly adheres to the Industrial Minimalism design token guide (#FFF8E7, #59915C, etc.).
- [ ] Database changes (if any) have been generated via Prisma CLI and validated against local PostgreSQL.