# Optimistic updates

## Workflow

1. Capture event
2. Update local state
3. Send request
4. Get response
5. If negative, rollback update local state (step 2)
6. If positive, do nothing

[Preview here](https://vigilant-sinoussi-5d69ab.netlify.com/)



