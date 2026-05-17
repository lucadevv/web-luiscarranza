import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import {
  getAnalytics,
  isSupported,
  type Analytics,
  logEvent as fbLogEvent,
} from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;

const isDev = process.env.NODE_ENV !== 'production';

function isConfigured() {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.measurementId);
}

export async function initAnalytics(): Promise<Analytics | null> {
  if (isDev) console.log('[firebase] initAnalytics() called');

  if (typeof window === 'undefined') return null;

  if (!isConfigured()) {
    if (isDev) console.warn('[firebase] not configured — env vars missing');
    return null;
  }

  if (analytics) return analytics;

  try {
    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
    }

    const supported = await isSupported();
    if (!supported) {
      if (isDev) console.info('[firebase] analytics not supported in this environment');
      return null;
    }

    analytics = getAnalytics(app!);
    if (isDev) console.log('[firebase] analytics initialized');

    return analytics;
  } catch (err) {
    if (isDev) console.error('[firebase] failed to init analytics:', err);
    return null;
  }
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (!analytics) {
    if (isDev) {
      console.warn(`[firebase] ⚠ trackEvent("${name}") called but analytics not initialized`);
    }
    return;
  }
  try {
    // In dev, flag every event with debug_mode so it appears instantly in GA4 DebugView
    const enriched = isDev ? { ...params, debug_mode: true } : params;
    fbLogEvent(analytics, name, enriched);
    if (isDev) {
      console.log(`[firebase] 📤 event: ${name}`, enriched);
    }
  } catch (err) {
    console.error('[firebase] ❌ failed to log event:', err);
  }
}
