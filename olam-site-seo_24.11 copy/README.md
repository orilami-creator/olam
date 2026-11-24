# olam: Orry Mizrahi Lavie portfolio site

## Before you upload
The site files use the placeholder address `https://www.your-domain.co.il`. It appears in the canonical tags, the hreflang tags, the og:image, the schema markup, `sitemap.xml` and `robots.txt`. Send your real domain to Claude and the files will be rebuilt with it. Don't upload the placeholder version.

## Publishing on GitHub Pages
1. Create a repository and upload everything in this folder to its root. `index.html` must sit at the top level.
2. Go to Settings → Pages → Build and deployment, and choose "Deploy from a branch", `main`, `/ (root)`.
3. Under "Custom domain", type your domain and save. GitHub creates the `CNAME` file for you.
4. At your domain provider, add these DNS records:
   - For `www`: a CNAME record pointing to `<your-github-username>.github.io`
   - For the bare domain: four A records, `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`
5. Once the certificate is ready (this can take up to 24 hours), tick **Enforce HTTPS** in Settings → Pages.

## Pages
- `/`: Hebrew (default)
- `/en/`: English
- `404.html`: the "not found" page

## Hero video
The background video is `videos/hero.mp4` for computers and `videos/hero-sm.mp4` for phones. A still, `videos/hero-poster.jpg`, shows while it loads. To replace the video, send the new one to Claude, or swap in your own files under the same names: H.264 MP4, no sound, about 8–15 seconds.
