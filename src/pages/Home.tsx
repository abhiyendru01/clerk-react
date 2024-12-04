import React, { useState } from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import logoImage from '../assets/logo.jpg'; // Import the logo image
import painting1 from '../assets/logo.jpg'; // Import your paintings
import painting2 from '../assets/painting 1.jpg';
import painting3 from '../assets/painting 2.jpeg';
import painting4 from '../assets/painting 3.webp';
import painting5 from '../assets/painting 4.jpg';
import painting6 from '../assets/painting 5.jpg';
import painting7 from '../assets/painting 6.png';
import painting8 from '../assets/painting 7.jpg';
import painting9 from '../assets/painting 8.avif';
import painting10 from '../assets/painting 9 .jpg';

import Button from '../components/Button';

const Home = () => {
  // Adjusted length to match the number of paintings
  const [likes, setLikes] = useState(Array(10).fill(0));
  const [captions, setCaptions] = useState(Array(10).fill("A beautiful piece of art."));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const handleCaptionChange = (index, newCaption) => {
    const newCaptions = [...captions];
    newCaptions[index] = newCaption;
    setCaptions(newCaptions);
  };

  // Array of all images
  const images = [
    painting1, painting2, painting3, painting4, painting5, painting6,
    painting7, painting8, painting9, painting10
  ];

  const userNames = ['Aman', 'Apoorva', 'Nutan', 'Priya', 'Ravi', 'Sia', 'Neha', 'Karan', 'Maya', 'Vikram']; // Adjust names array accordingly

  return (
    <div style={styles.homeContainer}>
      <SignedIn>
        <header style={styles.header}>
          <div style={styles.logoContainer}>
            <img src={logoImage} alt="Logo" style={styles.logo} />
          </div>
          <div style={styles.profileContainer}>
            <UserButton />
            <div style={styles.chatIcon} onClick={() => alert("Chat icon clicked!")}>
              💬
            </div>
          </div>
        </header>

        <div style={styles.mainContent}>
          <div style={styles.feed}>
            {images.map((image, index) => (
              <div key={index} style={styles.post}>
                <div style={styles.postHeader}>
                  <span style={styles.username}>{userNames[index]}</span>
                </div>
                <img
                  style={styles.postImage}
                  src={image}
                  alt={`Painting ${index + 1}`}
                />
                <div style={styles.postCaption}>
                  <textarea
                    style={styles.captionInput}
                    value={captions[index]}
                    onChange={(e) => handleCaptionChange(index, e.target.value)}
                    placeholder="Write a caption about your painting"
                  />
                </div>
                <div style={styles.postActions}>
                  <button
                    style={styles.likeBtn}
                    onClick={() => handleLike(index)}
                  >
                    ❤️
                  </button>
                  <button style={styles.commentBtn}>💬</button>
                  <button style={styles.buyBtn}>💰 Bid</button>
                  <button style={styles.sellBtn}>💸 Sell</button>
                </div>
                <div style={styles.postLikes}>{likes[index]} Likes</div>
                <div style={styles.postComments}>10 Comments</div>
              </div>
            ))}
          </div>
        </div>

        <Button />
      </SignedIn>

      <SignedOut>
        <h2>Please log in to continue.</h2>
      </SignedOut>
    </div>
  );
};

const styles = {
  homeContainer: {
    padding: '10px',
    backgroundColor: '#fafafa',
    fontFamily: 'Arial, sans-serif',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    width: '100%',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: '10px 15px',
    borderBottom: '1px solid #ddd',
    position: 'sticky',
    top: '0',
    zIndex: '10',
    width: '100%',
    boxSizing: 'border-box',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    height: '40px',
    objectFit: 'contain',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  chatIcon: {
    fontSize: '24px',
    marginLeft: '15px',
    cursor: 'pointer',
  },
  mainContent: {
    padding: '10px',
  },
  feed: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  post: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  },
  postHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 'auto',
    marginTop: '10px',
    borderRadius: '8px',
  },
  postCaption: {
    marginTop: '10px',
  },
  captionInput: {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    resize: 'none',
  },
  postActions: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  likeBtn: {
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  commentBtn: {
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  buyBtn: {
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: 'green',
  },
  sellBtn: {
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: 'red',
  },
  postLikes: {
    marginTop: '5px',
    fontSize: '14px',
    color: 'gray',
  },
  postComments: {
    fontSize: '14px',
    color: 'gray',
  },
};

export default Home;
