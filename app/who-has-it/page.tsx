'use client';
import { useState, useEffect } from 'react';

interface Traveler {
  id: string;
  name: string;
  city: string;
  state: string;
  country: string;
  dateReceived: string;
  story: string;
  createdAt: string;
}

export default function WhoHasIt() {
  const [travelers, setTravelers] = useState<Traveler[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    country: 'United States',
    dateReceived: '',
    story: '',
  });

  useEffect(() => {
    fetchTravelers();
  }, []);

  async function fetchTravelers() {
    try {
      const res = await fetch('/api/travelers');
      const data = await res.json();
      setTravelers(data);
    } catch (err) {
      console.error('Failed to fetch travelers:', err);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/travelers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Submission failed');
      }

      setSuccess(true);
      setFormData({
        name: '',
        city: '',
        state: '',
        country: 'United States',
        dateReceived: '',
        story: '',
      });
      fetchTravelers();
    } catch (err) {
      setError('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  return (
    <div style={{ backgroundColor: '#FFF8F0', minHeight: '100vh', padding: '20px' }}>
      <button
        onClick={() => window.location.href = '/'}
        style={{
          backgroundColor: '#D2691E',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '20px',
          cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        🏠 Home
      </button>

      <h1 style={{ color: '#333' }}>🌍 Who Has It?</h1>
      <p style={{ color: '#666' }}>
        Log your location and share your story with the puzzle! Let others know where the journey has taken you.
      </p>

      {/* FORM */}
      <div style={{
        backgroundColor: '#FFFAF0',
        border: '2px solid #FFD700',
        borderRadius: '15px',
        padding: '25px',
        maxWidth: '700px',
        margin: '20px auto',
      }}>
        <h2>📝 Log Your Puzzle Location</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                backgroundColor: '#E8F4FD',
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  backgroundColor: '#E8F4FD',
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                State/Province *
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  backgroundColor: '#E8F4FD',
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Country *
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                backgroundColor: '#E8F4FD',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Date You Received the Puzzle *
            </label>
            <input
              type="date"
              name="dateReceived"
              value={formData.dateReceived}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                backgroundColor: '#FFFFFF',
                color: '#333',
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Your Puzzle Story 📖
            </label>
            <textarea
              name="story"
              value={formData.story}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your puzzle journey!"
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                backgroundColor: '#FFFFFF',
                color: '#333',
                resize: 'vertical',
              }}
            />
            <small style={{ color: '#D2691E' }}>
              Optional: Tell us about your puzzle journey! This will appear on the map and history.
            </small>
          </div>

          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
          {success && <p style={{ color: 'green', marginBottom: '10px' }}>✅ Location submitted successfully!</p>}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#D2691E',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? '⏳ Submitting...' : '🚀 Submit My Location'}
          </button>
        </form>
      </div>

      {/* RECENT TRAVELERS */}
      <div style={{
        backgroundColor: '#FFFAF0',
        border: '2px solid #FFD700',
        borderRadius: '15px',
        padding: '25px',
        maxWidth: '700px',
        margin: '20px auto',
      }}>
        <h2>📬 Recent Puzzle Travelers</h2>
        <p style={{ color: '#D2691E', marginBottom: '15px' }}>
          {travelers.length === 0 ? 'No entries yet. Be the first!' : `${travelers.length} traveler(s) logged`}
        </p>

        {travelers.length === 0 && (
          <p style={{ color: '#666' }}>
            Submitted entries will appear here...
          </p>
        )}

        {travelers.map((t) => (
          <div
            key={t.id}
            style={{
              backgroundColor: '#FFF8DC',
              border: '1px solid #FFD700',
              borderRadius: '10px',
              padding: '15px',
              marginBottom: '15px',
            }}
          >
            <p style={{ margin: 0, color: '#555', fontSize: '14px' }}>
              {formatDate(t.dateReceived)}
            </p>
            <p style={{ margin: '5px 0', fontWeight: 'bold', color: '#333' }}>
              {t.name}
            </p>
            <p style={{ margin: 0, color: '#555' }}>
              {t.city}, {t.state}, {t.country}
            </p>
            {t.story && (
              <p style={{ marginTop: '10px', color: '#444' }}>
                "{t.story}"
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
