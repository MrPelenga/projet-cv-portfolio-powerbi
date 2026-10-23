# Architecture rules
- Store bilingual profile facts in `src/data/profile.ts`; homepage, CV preview and CV page consume it so edits remain aligned.
- Store LinkedIn posts in `src/data/linkedinPosts.ts`; sort and localize through shared helpers so homepage and news page show the same real content.
- Use shared profile sections and semantic CSS tokens across portfolio pages to keep presentation consistent without duplicating profile facts.
- Preserve all existing project data and routes; case-study changes are presentation-only to protect supplied facts and metrics.
- Keep the energy project’s bilingual case-study facts in its project data and render them through one shared section in the modal and detail page; share external-link controls so destinations and loading notices stay aligned.