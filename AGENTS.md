# Architecture rules
- Store bilingual profile facts in `src/data/profile.ts`; homepage, CV preview and CV page consume it so edits remain aligned.
- Store LinkedIn posts in `src/data/linkedinPosts.ts`; sort and localize through shared helpers so homepage and news page show the same real content.
- Use shared profile sections and semantic CSS tokens across portfolio pages to keep presentation consistent without duplicating profile facts.
- Preserve all existing project data and routes; case-study changes are presentation-only to protect supplied facts and metrics.