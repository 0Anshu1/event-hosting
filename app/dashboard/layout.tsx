"use client";

import Link from "next/link";
import { LayoutDashboard, PlusCircle, Users, BarChart3, Settings } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)', maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
      {/* Sidebar */}
      <aside className="glass-panel" style={{ width: '280px', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', height: 'fit-content', position: 'sticky', top: '100px' }}>
        <div>
          <h2 style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'hsl(var(--fg-secondary))', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>Organizer</h2>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link href="/dashboard" className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', background: 'hsla(0, 0%, 100%, 0.05)' }}>
              <LayoutDashboard size={20} />
              <span>Overview</span>
            </Link>
            <Link href="/dashboard/create" className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)' }}>
              <PlusCircle size={20} />
              <span>New Event</span>
            </Link>
            <Link href="/dashboard/attendees" className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)' }}>
              <Users size={20} />
              <span>Attendees</span>
            </Link>
            <Link href="/dashboard/analytics" className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)' }}>
              <BarChart3 size={20} />
              <span>Analytics</span>
            </Link>
          </nav>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <Link href="/dashboard/settings" className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)' }}>
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, paddingLeft: '3rem' }}>
        {children}
      </main>
    </div>
  );
}
