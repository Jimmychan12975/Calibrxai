# Static Export Contact Form Setup

Since this site is configured for static export (GitHub Pages), the contact form uses external services instead of API routes.

## Option 1: Formspree (Recommended)

### 1. Sign up for Formspree
- Go to [https://formspree.io](https://formspree.io)
- Create a free account (100 submissions/month free)
- Create a new form

### 2. Get your Form ID
- Copy the form ID (looks like: `xrgjqjqj`)
- Replace `YOUR_FORM_ID` in `app/contact/page.tsx`

### 3. Update the form
In `app/contact/page.tsx`, line 25:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with your actual form ID.

## Option 2: Netlify Forms

### 1. Add form attributes
Update the form in `app/contact/page.tsx`:
```html
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  onSubmit={submit}
  className="mt-8 max-w-xl space-y-4"
>
  <input type="hidden" name="form-name" value="contact" />
  <!-- rest of form fields -->
</form>
```

### 2. Deploy to Netlify
- Connect your GitHub repo to Netlify
- Forms will be automatically detected

## Option 3: Custom Endpoint

If you have your own server or API:
```javascript
const response = await fetch('https://your-api.com/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, email, message }),
});
```

## Testing

1. Set up your chosen service
2. Update the form code
3. Test locally: `npm run dev`
4. Deploy and test on GitHub Pages

## Current Status

- ✅ Static export compatible
- ✅ No API routes (removed)
- ✅ No server dependencies
- ⚠️ Needs external form service setup

## Recommended: Formspree

Formspree is the easiest option:
1. Free tier available
2. No setup required
3. Email notifications
4. Spam protection
5. Works with static sites 