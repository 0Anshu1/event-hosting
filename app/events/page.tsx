import EventCard from "@/components/events/EventCard";

// Mock data for initial UI build
const MOCK_EVENTS = [
  {
    id: "1",
    title: "Inter-College Hackathon 2026",
    description: "Join the biggest tech event of the year. Build, innovate, and win prizes worth over $5000.",
    date: "March 15, 2026",
    location: "Main Auditorium",
    category: "Academic",
    registrationsCount: 45
  },
  {
    id: "2",
    title: "Annual Sports Meet",
    description: "Competing in track, field, and team sports. Show your college spirit and athletic prowess.",
    date: "April 2, 2026",
    location: "College Stadium",
    category: "Sports",
    registrationsCount: 120
  },
  {
    id: "3",
    title: "Eco-Friendly Drive",
    description: "Help us make our campus greener. Join the volunteering session this weekend.",
    date: "Feb 28, 2026",
    location: "Campus Garden",
    category: "Volunteering",
    registrationsCount: 15
  }
];

export default function EventsPage() {
  return (
    <main className="container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <header style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Explore Events</h1>
        <p style={{ color: 'hsl(var(--fg-secondary))', fontSize: '1.2rem' }}>Find opportunities to learn, grow, and connect on campus.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {MOCK_EVENTS.map(event => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </main>
  );
}
