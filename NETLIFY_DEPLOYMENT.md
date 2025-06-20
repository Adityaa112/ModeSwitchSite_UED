# Deploying Inspire Press to Netlify

This guide walks you through the process of deploying your Inspire Press blog application to Netlify.

## Prerequisites

- A Netlify account (free tier is sufficient)
- Git repository with your code (optional, but recommended)

## Option 1: Deploy via Netlify Dashboard (Drag and Drop)

For a quick deployment without connecting to a Git repository:

1. Build your project locally:
   ```bash
   npm run build
   ```

2. Log in to your Netlify account and go to the "Sites" section.

3. Drag and drop the `dist` folder from your project to the designated area on the Netlify dashboard.

4. Netlify will automatically deploy your site and provide you with a URL.

## Option 2: Deploy via Netlify CLI

For deployment using the Netlify CLI:

1. Install the Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Log in to your Netlify account via the CLI:
   ```bash
   netlify login
   ```

3. Initialize your site (if not already done):
   ```bash
   netlify init
   ```

4. Deploy to Netlify:
   ```bash
   netlify deploy
   ```
   
   This will create a draft deployment. If everything looks good, deploy to production:
   
   ```bash
   netlify deploy --prod
   ```

## Option 3: Deploy via Continuous Deployment (Recommended)

For automatic deployments whenever you push changes to your Git repository:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).

2. Log in to your Netlify account and click "New site from Git".

3. Choose your Git provider and select your repository.

4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

5. Click "Deploy site".

6. Netlify will build and deploy your site. Any future changes pushed to your repository will trigger automatic redeployments.

## Custom Domain Setup

To use your own domain name:

1. Go to your site settings in Netlify.

2. Navigate to the "Domain management" section.

3. Click "Add custom domain" and follow the instructions.

4. Netlify provides free SSL certificates via Let's Encrypt, which will be automatically set up for your custom domain.

## Environment Variables

This project doesn't require any environment variables for deployment. However, if you need to add environment variables in the future:

1. Go to your site settings in Netlify.

2. Navigate to the "Environment" section.

3. Click "Edit variables" and add your key-value pairs.

## Troubleshooting

If you encounter any issues with your deployment:

1. Check the deployment logs in Netlify for error messages.

2. Ensure your API paths are correctly configured to use the Netlify Functions path (`.netlify/functions/api`).

3. Verify that the Netlify function is correctly set up in the `netlify/functions` directory.

4. Make sure your `netlify.toml` file is in the root directory and correctly configured.

## Post-Deployment

After successful deployment:

1. Test your site thoroughly to ensure all features work as expected.

2. Consider setting up form handling, user authentication, or other Netlify features as needed.

3. Set up monitoring and analytics for your site. 