"use client";

import Link from "next/link";
import { UserButton, useUser, SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="glass-panel" style={{ 
      margin: '1rem auto', 
      padding: '0.75rem 2rem', 
      maxWidth: '1200px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      position: 'sticky',
      top: '1rem',
      zIndex: 100
    }}>
      <Link href="/" style={{ fontSize: '1.5rem', fontWeight: '800', background: 'var(--accent-glow)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        EventHost
      </Link>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="/events" style={{ fontWeight: '500', color: 'hsl(var(--fg-secondary))' }}>Explore</Link>
        {isSignedIn && (
          <Link href="/dashboard" style={{ fontWeight: '500', color: 'hsl(var(--fg-secondary))' }}>Dashboard</Link>
        )}
        
        <div style={{ marginLeft: '1rem' }}>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <button className="variant-btn-primary" style={{ padding: '0.5rem 1.25rem' }}>Login</button>
            </SignInButton>
          )}
        </div>
      </div>
    </nav>
  );
}
