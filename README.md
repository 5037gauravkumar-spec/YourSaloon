# YOUR SALOON – Frontend Only (WhatsApp Booking)

Simple, secure salon website.  
**No database. No admin panel. No backend.**  
Booking form sends details directly to WhatsApp.

**Stack:** Next.js 15 · Tailwind CSS · Vercel

## Features

- Service menu with prices
- Stylist profiles
- Gallery
- Booking form → opens WhatsApp with pre-filled message
- Contact page + floating WhatsApp button
- Instagram, YouTube, LinkedIn, Facebook links
- Mobile-first
- Colors & fonts as specified

## Security (Frontend)

- Input validation with Zod (client-side)
- Max length limits on all fields
- Phone number format check (Indian mobile)
- Date cannot be in the past
- No data stored on any server
- HTTPS via Vercel

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy on Vercel

1. Push to GitHub
2. Import project on Vercel
3. Deploy (no environment variables needed)

## Customize

### 1. WhatsApp number & social links
Edit `src/lib/social.ts`

### 2. Services & stylists
Edit `src/lib/data.ts`

### 3. Images
See `public/images/README.txt`

| Path | Purpose |
|------|---------|
| `public/images/stylists/image1.jpg` … `image7.jpg` | Stylist photos |
| `public/images/gallery/image1.jpg` … `image6.jpg` | Gallery |
| `public/images/og-image.jpg` | WhatsApp/Facebook share (1200×630) |
| `public/favicon.ico` | Browser icon |

### 4. Colors (already set)
`#000000` `#FFFFFF` `#FFA700` `#E0E0E0` `#3D3D3D` `#0066CC`

### 5. Fonts (already set)
- Titles → Outfit
- Body → Google Sans Flex

## How Booking Works

1. Customer fills the form
2. Clicks **Book via WhatsApp**
3. WhatsApp opens with a clean pre-written message containing:
   - Name, phone, email
   - Service + price
   - Stylist
   - Date & time
   - Notes
4. Customer sends the message
5. You reply to confirm availability

No data is saved on any server.
