# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio website to GitHub Pages using GitHub Actions.

## Setup Steps

### 1. Push Your Changes to GitHub

First, commit and push the new workflow and configuration files:

```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

### 2. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: https://github.com/nityaanandshah/
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (not the branch option)
5. Save the settings

### 3. Trigger the Deployment

The workflow will automatically run when you push to the `main` branch. You can also:

- Manually trigger it from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**
- Or wait for the next push to trigger it automatically

### 4. Access Your Website

Once the deployment is complete (usually takes 2-3 minutes), your website will be available at:

**https://nityaanandshah.github.io/**

## How It Works

- **GitHub Actions Workflow**: The `.github/workflows/deploy.yml` file defines the deployment process
- **Build Process**: Runs `npm run build` which creates optimized production files in `dist/public/`
- **Deployment**: Uploads the `dist/public/` directory to GitHub Pages
- **Base Path**: The Vite config automatically sets the correct base path (`/`) for GitHub Pages

## Troubleshooting

### If the deployment fails:

1. Check the **Actions** tab on GitHub to see the error logs
2. Make sure all dependencies are in `package.json` (not just `devDependencies`)
3. Ensure the build command works locally: `npm run build`

### If the site loads but assets are missing:

1. Verify the base path is correct in `vite.config.ts`
2. Check that the `.nojekyll` file exists in `client/public/`

### To test locally with the GitHub Pages path:

```bash
GITHUB_PAGES=true npm run build
# Then serve the dist/public folder
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to `client/public/` with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable HTTPS in the repository settings

## Notes

- The workflow runs on every push to `main` branch
- You can also manually trigger deployments from the Actions tab
- The `.nojekyll` file prevents GitHub from processing your site with Jekyll
- The site is built with environment variable `GITHUB_PAGES=true` to set the correct base path
