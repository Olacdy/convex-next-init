#!/bin/sh

source .env

npx convex dev --admin-key $ADMIN_KEY --url $CONVEX_SITE_URL
npm run pretty