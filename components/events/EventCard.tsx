"use client";

import Link from "next/link";
import { Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: string;
  registrationsCount: number;
}

export default function EventCard({ id, title, description, date, location, category, registrationsCount }: EventCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.3)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel" 
      style={{ 
        padding: '1.5rem', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem',
        height: '100%',
        transition: 'var(--transition-smooth)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{ 
          fontSize: '0.75rem', 
          fontWeight: '700', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          color: 'hsl(var(--accent-blue))',
          background: 'hsla(var(--accent-blue), 0.1)',
          padding: '0.25rem 0.75rem',
          borderRadius: '1rem'
        }}>
          {category}
        </span>
      </div>

      <div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'hsl(var(--fg-secondary))', fontSize: '0.9rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {description}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'hsl(var(--fg-secondary))' }}>
          <Calendar size={14} />
          <span>{date}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'hsl(var(--fg-secondary))' }}>
          <MapPin size={14} />
          <span>{location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'hsl(var(--fg-secondary))' }}>
          <Users size={14} />
          <span>{registrationsCount} Registered</span>
        </div>
      </div>

      <Link href={`/events/${id}`} className="variant-btn-primary" style={{ textAlign: 'center', marginTop: '1rem', width: '100%' }}>
        View Details
      </Link>
    </motion.div>
  );
}
