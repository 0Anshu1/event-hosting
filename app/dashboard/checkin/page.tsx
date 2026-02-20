"use client";

import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { CheckCircle2, XCircle, Loader2, Camera } from "lucide-react";

export default function QRCheckin() {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    scanner.render(
      (decodedText) => {
        setScanResult(decodedText);
        handleVerify(decodedText);
        scanner.clear();
      },
      (error) => {
        // console.warn(error);
      }
    );

    return () => {
      scanner.clear().catch(error => console.error("Failed to clear scanner", error));
    };
  }, []);

  const handleVerify = async (code: string) => {
    setIsVerifying(true);
    // Simulate API call for verification
    setTimeout(() => {
      setIsVerifying(false);
      setStatus('success');
      // Reset after 3 seconds to allow new scan
      setTimeout(() => {
        setStatus('idle');
        setScanResult(null);
        window.location.reload(); // Simple way to restart scanner
      }, 3000);
    }, 1500);
  };

  return (
    <div className="animate-fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>Attendee Check-in</h1>
        <p style={{ color: 'hsl(var(--fg-secondary))' }}>Scan student QR codes to verify registration.</p>
      </header>

      <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
        {status === 'idle' && !isVerifying && (
          <div id="reader" style={{ width: '100%', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}></div>
        )}

        {isVerifying && (
          <div style={{ padding: '4rem 0' }}>
            <Loader2 size={48} className="animate-spin" color="hsl(var(--accent-blue))" style={{ margin: '0 auto 1.5rem' }} />
            <h3>Verifying Ticket...</h3>
          </div>
        )}

        {status === 'success' && (
          <div style={{ padding: '4rem 0' }}>
            <CheckCircle2 size={64} color="#10b981" style={{ margin: '0 auto 1.5rem' }} />
            <h2 style={{ color: '#10b981' }}>Check-in Successful!</h2>
            <p style={{ marginTop: '1rem', color: 'hsl(var(--fg-secondary))' }}>
              Student: John Doe{"\n"}
              Event: Tech Hackathon 2026
            </p>
          </div>
        )}

        {status === 'error' && (
          <div style={{ padding: '4rem 0' }}>
            <XCircle size={64} color="#ef4444" style={{ margin: '0 auto 1.5rem' }} />
            <h2 style={{ color: '#ef4444' }}>Invalid Ticket</h2>
            <p style={{ marginTop: '1rem', color: 'hsl(var(--fg-secondary))' }}>
              This QR code is either expired or already scanned.
            </p>
          </div>
        )}
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'hsla(0,0%,100%,0.05)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'hsl(var(--fg-secondary))' }}>
        <Camera size={18} />
        <span>Ensure you have granted camera permissions for this browser.</span>
      </div>
    </div>
  );
}
