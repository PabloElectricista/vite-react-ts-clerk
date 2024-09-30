import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { shadesOfPurple } from "@clerk/themes";
import App from './App.tsx'

import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
} // else console.log('ok');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      afterSignInUrl="/dashboard"
      afterSignUpUrl="/dashboard"
      appearance={{ baseTheme: shadesOfPurple }}
    >
      <App />
    </ClerkProvider>
  </StrictMode>,
)