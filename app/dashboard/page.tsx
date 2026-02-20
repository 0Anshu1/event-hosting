"use client";

import { Users, Calendar, CheckSquare, TrendingUp } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>Overview</h1>
        <p style={{ color: 'hsl(var(--fg-secondary))' }}>Welcome back! Here's how your events are performing.</p>
      </header>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'hsl(var(--fg-secondary))' }}>Total Registrations</span>
            <Users size={18} color="hsl(var(--accent-blue))" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '800' }}>1,284</div>
          <div style={{ fontSize: '0.8rem', color: '#10b981', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <TrendingUp size={14} /> +12% from last week
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'hsl(var(--fg-secondary))' }}>Active Events</span>
            <Calendar size={18} color="hsl(var(--accent-purple))" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '800' }}>12</div>
          <div style={{ fontSize: '0.8rem', color: 'hsl(var(--fg-secondary))', marginTop: '0.5rem' }}>4 happening this week</div>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'hsl(var(--fg-secondary))' }}>Total Check-ins</span>
            <CheckSquare size={18} color="hsl(var(--accent-blue))" />
          </div>
          <div style={{ fontSize: '2rem', fontWeight: '800' }}>856</div>
          <div style={{ fontSize: '0.8rem', color: 'hsl(var(--fg-secondary))', marginTop: '0.5rem' }}>67% attendance rate</div>
        </div>
      </div>

      {/* Recent Activity / Charts Placeholder */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div className="glass-panel" style={{ padding: '2rem', minHeight: '400px' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Registration Trends</h3>
          <div style={{ height: '300px', width: '100%', background: 'hsla(0, 0%, 100%, 0.02)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'flex-end', gap: '1rem', padding: '1rem' }}>
            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--accent-glow)', borderRadius: '4px 4px 0 0', opacity: 0.8 }} />
            ))}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Upcoming Deadline</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'hsla(0, 0%, 100%, 0.05)' }}>
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Hackathon Registration</div>
              <div style={{ fontSize: '0.8rem', color: 'hsl(var(--fg-secondary))' }}>Ends in 2 days</div>
            </div>
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'hsla(0, 0%, 100%, 0.05)' }}>
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Sports Meet Volunteer</div>
              <div style={{ fontSize: '0.8rem', color: 'hsl(var(--fg-secondary))' }}>Ends in 5 days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
