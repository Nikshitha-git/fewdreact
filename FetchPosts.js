import React, { useEffect, useState } from 'react';

const FetchPosts = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/5')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data) => {
        setImages(data.message); // 'message' contains the array of image URLs
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Random Dog Images 🐶</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Dog ${index + 1}`}
            width="200"
            style={{ borderRadius: '8px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default FetchPosts;
