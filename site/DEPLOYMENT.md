# GitHub Pages Deployment Guide

This guide will help you deploy your Calibrx website to GitHub Pages with a custom domain.

## Prerequisites

1. A GitHub account
2. Your website code pushed to a GitHub repository
3. A custom domain name

## Step-by-Step Deployment

### 1. Prepare Your Repository

1. Push your code to GitHub if you haven't already:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### 2. Configure GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. This will use the workflow we created in `.github/workflows/deploy.yml`

### 3. Set Up Custom Domain

1. In the **Pages** settings, scroll down to **Custom domain**
2. Enter your domain name (e.g., `yourdomain.com`)
3. Check **Enforce HTTPS** (recommended)
4. Click **Save**

### 4. Update CNAME File

1. Edit the file `site/public/CNAME`
2. Replace `yourdomain.com` with your actual domain name
3. Commit and push the changes:
   ```bash
   git add site/public/CNAME
   git commit -m "Update CNAME with custom domain"
   git push origin main
   ```

### 5. Configure DNS

You need to configure your domain's DNS settings to point to GitHub Pages:

#### Option A: Using A Records (Recommended)
Add these A records to your domain's DNS:
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

#### Option B: Using CNAME Record
Add a CNAME record:
```
CNAME  @     yourusername.github.io
```

### 6. Verify Deployment

1. After pushing changes, GitHub Actions will automatically build and deploy your site
2. You can monitor the deployment in the **Actions** tab of your repository
3. Once deployed, your site will be available at your custom domain

## Troubleshooting

### Common Issues

1. **404 Errors**: Make sure your `next.config.ts` has the correct `basePath` and `assetPrefix` settings
2. **Images not loading**: Ensure `images.unoptimized: true` is set in `next.config.ts`
3. **Domain not working**: Check DNS propagation (can take up to 48 hours)
4. **Build failures**: Check the Actions tab for error details

### Manual Deployment

If you need to deploy manually:
```bash
cd site
npm run build
# The built files will be in the 'out' directory
```

## File Structure After Deployment

```
site/
├── .github/workflows/deploy.yml  # GitHub Actions workflow
├── public/
│   ├── .nojekyll                # Prevents Jekyll processing
│   └── CNAME                    # Custom domain configuration
├── next.config.ts               # Next.js configuration for static export
└── package.json                 # Build scripts
```

## Security Notes

- Never commit sensitive information like API keys
- Use environment variables for any configuration that shouldn't be public
- The `.nojekyll` file prevents GitHub from processing your site with Jekyll

## Support

If you encounter issues:
1. Check the GitHub Actions logs in the **Actions** tab
2. Verify your DNS settings with your domain provider
3. Ensure all files are properly committed and pushed 