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

export default function MapHistory() {
  const [travelers, setTravelers] = useState<Traveler[]>([]);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  }

  function formatDate(dateStr: string) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
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

      <h1 style={{ color: '#333', textAlign: 'center' }}>🗺️ Map & History</h1>
      <p style={{ color: '#666', textAlign: 'center', maxWidth: '800px', margin: '0 auto 30px' }}>
        Follow the puzzle's journey across America! See where it's been and read the stories from each stop.
      </p>

      {loading && (
        <div style={{ textAlign: 'center', padding: '50px', color: '#D2691E', fontSize: '18px' }}>
          ⏳ Loading puzzle journey...
        </div>
      )}

      {!loading && travelers.length === 0 && (
        <div style={{
          backgroundColor: '#FFFAF0',
          border: '2px solid #FFD700',
          borderRadius: '15px',
          padding: '40px',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '50px auto',
        }}>
          <h2 style={{ color: '#D2691E' }}>📍 No Journey Data Yet</h2>
          <p style={{ color: '#666' }}>
            The puzzle hasn't started its journey! Be the first to log a location in the "Who Has It?" section.
          </p>
        </div>
      )}

      {!loading && travelers.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          maxWidth: '1400px',
          margin: '0 auto',
        }}>
          {/* MAP SECTION */}
          <div style={{
            backgroundColor: '#FFFAF0',
            border: '2px solid #FFD700',
            borderRadius: '15px',
            padding: '25px',
            minHeight: '600px',
          }}>
            <h2 style={{ marginTop: 0, color: '#333' }}>🗺️ Journey Map</h2>
            
            {/* Simple Visual Map Representation */}
            <div style={{
              backgroundColor: '#E8F4FD',
              borderRadius: '10px',
              padding: '30px',
              minHeight: '500px',
              position: 'relative',
            }}>
              <div style={{
                textAlign: 'center',
                color: '#666',
                fontSize: '48px',
                marginBottom: '20px',
              }}>
                🌎
              </div>
              
              <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {travelers.map((traveler, index) => (
                  <div
                    key={traveler.id}
                    style={{
                      backgroundColor: '#fff',
                      border: '2px solid #4A90E2',
                      borderRadius: '10px',
                      padding: '15px',
                      marginBottom: '15px',
                      position: 'relative',
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      left: '-12px',
                      top: '15px',
                      width: '24px',
                      height: '24px',
                      backgroundColor: '#D2691E',
                      borderRadius: '50%',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      border: '2px solid white',
                    }}>
                      {index + 1}
                    </div>
                    
                    <div style={{ fontSize: '24px', marginBottom: '5px' }}>📍</div>
                    <div style={{ fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>
                      {traveler.city}, {traveler.state}
                    </div>
                    <div style={{ color: '#666', fontSize: '14px', marginBottom: '5px' }}>
                      {traveler.country}
                    </div>
                    <div style={{ color: '#4A90E2', fontSize: '13px' }}>
                      {formatDate(traveler.dateReceived)}
                    </div>
                    {traveler.story && (
                      <div style={{
                        marginTop: '10px',
                        padding: '10px',
                        backgroundColor: '#FFF8DC',
                        borderRadius: '5px',
                        fontSize: '13px',
                        fontStyle: 'italic',
                        color: '#555',
                      }}>
                        "{traveler.story}"
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#FFF8DC',
                borderRadius: '8px',
                textAlign: 'center',
              }}>
                <strong>🧩 Total Stops:</strong> {travelers.length}
                <br />
                <span style={{ fontSize: '12px', color: '#666' }}>
                  Journey started: {formatDate(travelers[travelers.length - 1]?.dateReceived)}
                </span>
              </div>
            </div>
          </div>

          {/* HISTORY TIMELINE SECTION */}
          <div style={{
            backgroundColor: '#FFFAF0',
            border: '2px solid #FFD700',
            borderRadius: '15px',
            padding: '25px',
            minHeight: '600px',
          }}>
            <h2 style={{ marginTop: 0, color: '#333' }}>📜 Journey Timeline</h2>
            <p style={{ color: '#D2691E', fontSize: '14px', marginBottom: '20px' }}>
              Most recent first • {travelers.length} {travelers.length === 1 ? 'entry' : 'entries'}
            </p>

            <div style={{ maxHeight: '550px', overflowY: 'auto' }}>
              {travelers.map((traveler, index) => (
                <div
                  key={traveler.id}
                  style={{
                    backgroundColor: index === 0 ? '#FFF8DC' : '#FFFFFF',
                    border: index === 0 ? '3px solid #FFD700' : '2px solid #E8E8E8',
                    borderRadius: '12px',
                    padding: '20px',
                    marginBottom: '20px',
                    position: 'relative',
                    boxShadow: index === 0 ? '0 4px 8px rgba(210, 105, 30, 0.2)' : 'none',
                  }}
                >
                  {index === 0 && (
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '20px',
                      backgroundColor: '#D2691E',
                      color: 'white',
                      padding: '5px 15px',
                      borderRadius: '15px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                    }}>
                      🎯 CURRENT LOCATION
                    </div>
                  )}

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '12px',
                  }}>
                    <div>
                      <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>
                        {traveler.name}
                      </div>
                      <div style={{ color: '#4A90E2', fontSize: '14px', marginBottom: '8px' }}>
                        📍 {traveler.city}, {traveler.state}, {traveler.country}
                      </div>
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: index === 0 ? '#FFE4B5' : '#F5F5F5',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    fontSize: '13px',
                    color: '#666',
                    marginBottom: '10px',
                  }}>
                    📅 Received: {formatDate(traveler.dateReceived)}
                  </div>

                  {traveler.story && (
                    <div style={{
                      marginTop: '12px',
                      padding: '15px',
                      backgroundColor: index === 0 ? '#FFFFFF' : '#F9F9F9',
                      borderLeft: '4px solid #D2691E',
                      borderRadius: '4px',
                      fontStyle: 'italic',
                      color: '#555',
                      fontSize: '14px',
                      lineHeight: '1.6',
                    }}>
                      💬 "{traveler.story}"
                    </div>
                  )}

                  {!traveler.story && (
                    <div style={{
                      marginTop: '12px',
                      padding: '10px',
                      backgroundColor: '#F5F5F5',
                      borderRadius: '4px',
                      color: '#999',
                      fontSize: '13px',
                      fontStyle: 'italic',
                    }}>
                      No story shared
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile responsive style */}
      <style jsx>{`
        @media (max-width: 1024px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
