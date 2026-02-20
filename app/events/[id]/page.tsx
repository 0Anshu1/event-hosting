"use client";

import { useUser, SignInButton } from "@clerk/nextjs";
import { Calendar, MapPin, Users, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function EventDetails({ params }: { params: { id: string } }) {
  const { isSignedIn } = useUser();
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    // Logic for registration will go here
    setIsRegistered(true);
  };

  return (
    <main className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <Link href="/events" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--fg-secondary))', marginBottom: '2rem' }}>
        <ArrowLeft size={16} /> Back to Events
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Left: Content */}
        <div>
          <span style={{ 
            fontSize: '0.8rem', 
            fontWeight: '700', 
            textTransform: 'uppercase', 
            color: 'hsl(var(--accent-purple))',
            background: 'hsla(var(--accent-purple), 0.1)',
            padding: '0.25rem 0.75rem',
            borderRadius: '1rem',
            marginBottom: '1rem',
            display: 'inline-block'
          }}>
            Academic
          </span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '2rem' }}>
            Inter-College Hackathon 2026
          </h1>
          
          <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>About the Event</h3>
            <p style={{ color: 'hsl(var(--fg-secondary))', whiteSpace: 'pre-wrap', lineHeight: '1.8' }}>
              The Inter-College Hackathon is the premier tech competition of the season. 
              Bring your best ideas to life in 48 hours. Whether you're a coder, designer, 
              or strategist, there's a place for you here.
              {"\n\n"}
              Teams of 2-4 students will compete for the top prize and internship opportunities with leading tech firms. 
              Free food, high-speed internet, and mentorship included.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <Calendar size={24} color="hsl(var(--accent-blue))" style={{ marginBottom: '0.75rem' }} />
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>March 15, 2026</div>
              <div style={{ fontSize: '0.75rem', color: 'hsl(var(--fg-secondary))' }}>9:00 AM - 9:00 PM</div>
            </div>
            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <MapPin size={24} color="hsl(var(--accent-purple))" style={{ marginBottom: '0.75rem' }} />
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Main Auditorium</div>
              <div style={{ fontSize: '0.75rem', color: 'hsl(var(--fg-secondary))' }}>Block C, Level 2</div>
            </div>
            <div className="glass-panel" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <Users size={24} color="hsl(var(--accent-blue))" style={{ marginBottom: '0.75rem' }} />
              <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>150+ Slots</div>
              <div style={{ fontSize: '0.75rem', color: 'hsl(var(--fg-secondary))' }}>Limited Availability</div>
            </div>
          </div>
        </div>

        {/* Right: Registration Card */}
        <div className="glass-panel" style={{ padding: '2.5rem', position: 'sticky', top: '100px' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Secure Your Spot</h3>
          
          {isRegistered ? (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              <CheckCircle size={64} color="#10b981" style={{ marginBottom: '1.5rem', margin: '0 auto 1.5rem' }} />
              <h4 style={{ marginBottom: '0.5rem' }}>See you there!</h4>
              <p style={{ color: 'hsl(var(--fg-secondary))', fontSize: '0.9rem', marginBottom: '2rem' }}>
                You've successfully registered. Your ticket and QR code are available in your dashboard.
              </p>
              <Link href="/dashboard" className="variant-btn-primary" style={{ display: 'block' }}>Go to Dashboard</Link>
            </div>
          ) : (
            <>
              <p style={{ color: 'hsl(var(--fg-secondary))', fontSize: '0.9rem', marginBottom: '2rem' }}>
                Registration is free for all students. Join us for a day of innovation and networking.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'hsla(0, 0%, 100%, 0.05)', border: '1px solid var(--glass-border)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '500', color: 'hsl(var(--fg-secondary))' }}>Price</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>Free Admission</div>
                </div>

                {isSignedIn ? (
                  <button onClick={handleRegister} className="variant-btn-primary" style={{ padding: '1rem', width: '100%' }}>
                    Register for Event
                  </button>
                ) : (
                  <SignInButton mode="modal">
                    <button className="variant-btn-primary" style={{ padding: '1rem', width: '100%' }}>
                      Login to Register
                    </button>
                  </SignInButton>
                )}
              </div>
            </>
          )}

          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', fontSize: '0.8rem', color: 'hsl(var(--fg-secondary))' }}>
            By registering, you agree to our campus code of conduct and event policies.
          </div>
        </div>
      </div>
    </main>
  );
}
