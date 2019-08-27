# Optimistic updates

## Workflow

1. Capture event
2. Update local state
3. Send request
4. Get response
5. If negative, rollback update local state (step 2)
6. If positive, do nothing

[Preview here](https://optimistic-updates.netlify.com/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/25b4f6dd-a78f-41fe-bc52-4ca294152306/deploy-status)](https://app.netlify.com/sites/optimistic-updates/deploys)



