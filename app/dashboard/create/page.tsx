"use client";

import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CreateEvent() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="animate-fade-in">
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>Create New Event</h1>
        <p style={{ color: 'hsl(var(--fg-secondary))' }}>Fill in the details below to launch your campus event.</p>
      </header>

      <form className="glass-panel" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Event Title</label>
          <input 
            type="text" 
            placeholder="e.g. Annual Tech Symposium" 
            style={{ 
              background: 'hsla(0, 0%, 100%, 0.05)', 
              border: '1px solid var(--glass-border)', 
              padding: '1rem', 
              borderRadius: 'var(--radius-md)', 
              color: 'white',
              fontSize: '1rem'
            }} 
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Date & Time</label>
            <input 
              type="datetime-local" 
              style={{ 
                background: 'hsla(0, 0%, 100%, 0.05)', 
                border: '1px solid var(--glass-border)', 
                padding: '1rem', 
                borderRadius: 'var(--radius-md)', 
                color: 'white'
              }} 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Location</label>
            <input 
              type="text" 
              placeholder="e.g. Auditorium B" 
              style={{ 
                background: 'hsla(0, 0%, 100%, 0.05)', 
                border: '1px solid var(--glass-border)', 
                padding: '1rem', 
                borderRadius: 'var(--radius-md)', 
                color: 'white'
              }} 
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontWeight: '600', fontSize: '0.9rem' }}>Description</label>
            <button type="button" style={{ 
              fontSize: '0.8rem', 
              color: 'hsl(var(--accent-purple))', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem',
              fontWeight: '600'
            }}>
              <Sparkles size={14} />
              AI Generate
            </button>
          </div>
          <textarea 
            rows={5} 
            placeholder="What is this event about?" 
            style={{ 
              background: 'hsla(0, 0%, 100%, 0.05)', 
              border: '1px solid var(--glass-border)', 
              padding: '1rem', 
              borderRadius: 'var(--radius-md)', 
              color: 'white',
              resize: 'none'
            }} 
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
          <button className="variant-btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            Launch Event
            <ArrowRight size={18} />
          </button>
        </div>
      </form>
    </div>
  );
}
