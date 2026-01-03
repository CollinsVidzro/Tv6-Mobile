# TV6 Live Stream App - Setup Instructions

## 📦 Installation Steps

### 1. Install Required Package
First, install the video player package:

```bash
npx expo install expo-av
```

### 2. File Structure
Create the following file in your project:

```
app/
  ├── (tabs)/
  │   ├── index.tsx (already updated)
  │   ├── about.tsx (already updated)
  │   ├── contact.tsx (already updated)
  │   └── _layout.tsx
  ├── _layout.tsx (update with new version)
  └── player.tsx (NEW - create this file)
```

### 3. Create the Player Screen
Create a new file `app/player.tsx` and paste the video player code.

### 4. Update Root Layout
Replace your `app/_layout.tsx` with the updated version that includes the player route.

## 🎯 Features Implemented

### ✅ Home Screen
- Beautiful hero design with logo
- "Watch Live TV" button that opens the video player
- Live indicator badge
- Viewer count display (placeholder)
- Feature cards

### ✅ Video Player
- Full-screen HLS video streaming
- Custom controls overlay
- Play/Pause functionality
- Live indicator
- Viewer count badge
- Loading state
- Error handling with retry
- Back button to return home
- Auto-hide controls after 3 seconds

### ✅ About Us Page
- Company mission and story
- Feature highlights
- Statistics display

### ✅ Contact Page
- Clickable contact methods (email, phone, website)
- Support hours
- FAQ section
- Social media links

## 🔧 Configuration Needed

### 1. Update Contact Information
In `app/(tabs)/contact.tsx`, replace:
- `support@tv6.com` with your real email
- `+233 000 000 000` with your real phone number
- Social media links

### 2. Connect Visitor Counter (Next Step)
The viewer count is currently a placeholder. You'll need to:
- Set up a backend service (Firebase, Supabase, or custom API)
- Implement real-time viewer tracking
- Update the count in both home screen and player

## 🚀 Testing

### Test on Development:
```bash
# Start the development server
npm start

# Then press:
# - 'a' for Android
# - 'i' for iOS
# - 'w' for web
```

### Test the Video Stream:
1. Open the app
2. Tap "Watch Live TV" button
3. Video should start playing automatically
4. Tap screen to show/hide controls
5. Test play/pause functionality
6. Test back button

## 📱 Before Play Store/App Store Deployment

### 1. Update App Configuration
In `app.json`:
- Change app name from "tv6" to your preferred name
- Update version numbers
- Add proper app icons and splash screens

### 2. Build for Production

**Android (Google Play Store):**
```bash
eas build --platform android
```

**iOS (Apple App Store):**
```bash
eas build --platform ios
```

### 3. Required Accounts
- **Google Play Console** account ($25 one-time fee)
- **Apple Developer** account ($99/year)
- **Expo EAS** account (free tier available)

## 🔮 Next Steps

1. **Implement Real Visitor Counter** ✨
2. Add analytics tracking
3. Implement push notifications
4. Add video quality settings
5. Add fullscreen rotation support
6. Implement replay/rewind features (if not live-only)
7. Add sharing functionality
8. Implement user authentication (if needed)

## 📞 Support
If you encounter any issues, check:
- Expo documentation: https://docs.expo.dev
- React Native documentation: https://reactnative.dev
- Stack Overflow for specific errors

## 🎉 Current Status
✅ UI Design Complete
✅ Video Player Integrated
✅ Navigation Working
⏳ Visitor Counter (Next Priority)
⏳ Production Build
⏳ Store Deployment