<<<<<<< HEAD
# Inspire Press

A modern blog application featuring a responsive design with dark/light mode toggle functionality.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Dark/light mode toggle
- Article listing and detail views
- Blue-themed UI
- Clean, minimalist design

## Local Development

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
cd ModeSwitchSite
npm run dev
```

The app should be running at http://localhost:5000

## Deploying to Netlify

### Option 1: Deploy with Netlify CLI

1. Install Netlify CLI globally:

```bash
npm install -g netlify-cli
```

2. Build the project:

```bash
cd ModeSwitchSite
npm run build
```

3. Deploy to Netlify:

```bash
netlify deploy
```

4. Follow the prompts to create a new site or use an existing one
5. If everything looks good, deploy to production:

```bash
netlify deploy --prod
```

### Option 2: Deploy via Netlify Dashboard

1. Create a Netlify account at [netlify.com](https://www.netlify.com)
2. Click "New site from Git"
3. Connect to your Git provider and select the repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Environment Variables

No environment variables are required for this project.

## Project Structure

- `client/`: Frontend React application
  - `src/components/`: React components
  - `src/pages/`: Page components
  - `src/data/`: Data files
  - `src/hooks/`: Custom React hooks
  - `src/lib/`: Utility functions
- `server/`: Backend server (for local development)
- `netlify/functions/`: Serverless functions for Netlify deployment

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Query
=======
# Inspire Press

A modern blog application featuring a responsive design with dark/light mode toggle functionality.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Dark/light mode toggle
- Article listing and detail views
- Blue-themed UI
- Clean, minimalist design

## Local Development

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
cd ModeSwitchSite
npm run dev
```

The app should be running at http://localhost:5000

## Deploying to Netlify

### Option 1: Deploy with Netlify CLI

1. Install Netlify CLI globally:

```bash
npm install -g netlify-cli
```

2. Build the project:

```bash
cd ModeSwitchSite
npm run build
```

3. Deploy to Netlify:

```bash
netlify deploy
```

4. Follow the prompts to create a new site or use an existing one
5. If everything looks good, deploy to production:

```bash
netlify deploy --prod
```

### Option 2: Deploy via Netlify Dashboard

1. Create a Netlify account at [netlify.com](https://www.netlify.com)
2. Click "New site from Git"
3. Connect to your Git provider and select the repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Environment Variables

No environment variables are required for this project.

## Project Structure

- `client/`: Frontend React application
  - `src/components/`: React components
  - `src/pages/`: Page components
  - `src/data/`: Data files
  - `src/hooks/`: Custom React hooks
  - `src/lib/`: Utility functions
- `server/`: Backend server (for local development)
- `netlify/functions/`: Serverless functions for Netlify deployment

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Query
>>>>>>> 90c0274842ce6d1dedcee8b885a571712080e402
- Netlify Serverless Functions 