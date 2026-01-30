# 🦄 Unicorn POS Android

AI Business OS Mobile App for Indonesian UMKM

## Features
- ✅ Signed APK Build
- ✅ Signed AAB (Play Store Bundle)
- ✅ ProGuard Optimization
- ✅ CI/CD via GitHub Actions

## Build Status
[![Build Android Release](https://github.com/brianhosinudin-bot/unicorn-pos-android/actions/workflows/android-release.yml/badge.svg)](https://github.com/brianhosinudin-bot/unicorn-pos-android/actions/workflows/android-release.yml)

## Secrets Required
Add these secrets to GitHub repository settings:

| Secret | Description |
|--------|-------------|
| `ANDROID_KEYSTORE_BASE64` | Base64 encoded keystore file |
| `ANDROID_KEYSTORE_PASSWORD` | Keystore password |
| `ANDROID_KEY_ALIAS` | Key alias |
| `ANDROID_KEY_PASSWORD` | Key password |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |

## Trigger Build
1. Go to Actions tab
2. Select "Build Android Release"
3. Click "Run workflow"
4. Set version and build type
5. Download APK/AAB from artifacts
