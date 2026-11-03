RMS ADS — CLIENT LOGO SHOWCASE SOURCE UPDATE

This ZIP contains the source files for the client-logo showcase update:
- components/brand-showcase.tsx
- lib/client-brands.ts
- brand-showcase.css

HOW TO APPLY
1. Copy components/brand-showcase.tsx into your project's components folder.
2. Copy lib/client-brands.ts into your project's lib folder.
3. Append brand-showcase.css to app/globals.css.
4. Ensure app/page.tsx imports BrandShowcase and renders:
     <BrandShowcase cmsLogos={logos} />

This is a source-code patch for the logo showcase, not the entire Next.js website.
It assumes the existing project already has the ClientLogo type in @/lib/data,
the corresponding brand-grid layout styles, and lucide-react installed.

IMPORTANT
- External logo URLs may change, block hotlinking, or fail. For production, obtain
  approved logo artwork from each brand and host it locally in /public/clients.
- PW Institute of Innovation is left as a placeholder pending an authenticated
  standalone logo asset.
- Confirm the right to publicly display client identities and relationship claims.
