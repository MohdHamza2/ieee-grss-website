# IEEE GRSS MJCET Website - Deployment Guide

## 🚀 Deploying to Vercel

### Prerequisites
- Vercel account (free at [vercel.com](https://vercel.com))
- GitHub/GitLab account (to connect your repository)

### Step 1: Prepare Your Repository
1. Push your code to GitHub/GitLab
2. Make sure all files are committed

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy"

### Step 3: Set Up Vercel KV Database
After deployment, you need to set up the database to store contact form submissions:

1. **Install Vercel KV:**
   ```bash
   npx vercel kv create
   ```

2. **Add KV to your project:**
   ```bash
   npx vercel kv add
   ```

3. **Link KV to your project:**
   ```bash
   npx vercel env pull .env.local
   ```

### Step 4: Environment Variables
Add these environment variables in your Vercel dashboard:

1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add the KV environment variables (they should be auto-added when you link KV)

### Step 5: View Contact Form Submissions

#### Option A: Admin Dashboard (Recommended)
1. Visit: `https://your-domain.vercel.app/admin/contact-submissions`
2. Enter the admin token: `db8023867bfbb1f1894c2222038a30b6490c45c76d3cb5047d8302d01fae8fac`
3. View all contact form submissions

#### Option B: API Endpoint
You can also fetch submissions programmatically:
```bash
curl -H "Authorization: Bearer db8023867bfbb1f1894c2222038a30b6490c45c76d3cb5047d8302d01fae8fac" \
     https://your-domain.vercel.app/api/contact
```

## 🔐 Security Notes

### Admin Token
- **Token:** `db8023867bfbb1f1894c2222038a30b6490c45c76d3cb5047d8302d01fae8fac`
- Keep this token secure and private
- Don't share it publicly
- You can regenerate it using: `node scripts/generate-token.js`

### Generate New Token
If you need a new token:
1. Run: `node scripts/generate-token.js`
2. Update the token in `app/api/contact/route.ts`
3. Redeploy your application

## 📊 Alternative Data Storage Options

### Option 1: Vercel KV (Current Implementation)
- ✅ Built into Vercel
- ✅ Easy to set up
- ✅ Good for simple data
- ❌ Limited query capabilities

### Option 2: Supabase (Recommended for complex data)
- ✅ Free tier available
- ✅ SQL database
- ✅ Real-time subscriptions
- ✅ Better querying

### Option 3: MongoDB Atlas
- ✅ Free tier available
- ✅ NoSQL database
- ✅ Good for document-based data

### Option 4: Google Sheets
- ✅ Free
- ✅ Easy to view data
- ✅ Can be shared with team
- ❌ Limited for high volume

## 🛠️ Troubleshooting

### Contact Form Not Working
1. Check Vercel KV is properly set up
2. Verify environment variables are set
3. Check Vercel function logs

### Can't Access Admin Page
1. Verify the admin token is correct
2. Check the URL is correct
3. Ensure the page is deployed

### Data Not Storing
1. Check KV connection
2. Verify API route is working
3. Check Vercel function logs

## 📞 Support
If you encounter issues:
1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Test locally first with `npm run dev`

## 🔄 Updates
To update your deployed site:
1. Push changes to your repository
2. Vercel will automatically redeploy
3. No manual intervention needed 