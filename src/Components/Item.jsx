import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Typography, Box, Rating, Grid2, Button,} from '@mui/material';
import PrimarySearchAppBar from './Navbar';

const Item = () => {
  const { id } = useParams(); // Retrieve the item ID from the URL
  const [imageLoaded, setImageLoaded] = useState(false); // Track image load status

  const itemData = [
    {
      id: 1,
      imageUrl:
        'https://i.pinimg.com/736x/af/36/78/af36783a464d3b5163053258a042e625.jpg',
      name: 'Women Fit and Flare Brown Dress',
      price:'$200',
      size:'medium',
      description:
        'This is the description of Bag item 1. It could be longer or shorternhgggggggggggggggggggvbfddd.',
      rating: 3,
      location:'colombo'
    },
    {
      id: 2,
      imageUrl:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/k/a/k/l-vna1003027-vishudh-original-imagyxpgq9ywyhmu.jpeg?q=70',
      name: 'Women Fit and Flare Brown Dress',
      price:'$200',
      size:'medium',
      description:
        'This is the description of Bag item 1. It could be longer or shorternhgggggggggggggggggggvbfddd.',
      rating: 3,
      location:'kandy'
    },
    {
      id: 3,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZi6Ktng9k0ynGp3LIHdqTpsq8yvIVUjsgWQ&s',
      name: 'Women Fit and Flare Brown Dress',
      price:'$200',
      size:'medium',
      description:
        'This is the description of Bag item 1. It could be longer or shorternhgggggggggggggggggggvbfddd.',
      rating: 3,
      location:'colombo'
    },
    {
      id: 3,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZi6Ktng9k0ynGp3LIHdqTpsq8yvIVUjsgWQ&s',
      name: 'Women Fit and Flare Brown Dress',
      price:'$200',
      size:'medium',
      description:
        'This is the description of Bag item 1. It could be longer or shorternhgggggggggggggggggggvbfddd.',
      rating: 3,
      location:'colombo'
    },
    {
      id: 4,
      imageUrl:
        'https://i.pinimg.com/736x/36/c1/67/36c1670a949b15963dfeb70f6d0df481.jpg',
      name: 'Women Fit and Flare Brown Dress',
      price:'$90',
      size:'LArge',
      description:
        'This is the description of Bag item 2. It provides more details about the product.',
      rating: 4,
      location:'Jaffna'
    },
    {
      id: 5,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFh7oAqTE9kj9nBRyUoQKAFoyNXt3hsoWYg&s',
      name: 'Women Fit and Flare Brown Dress',
      price:'$200',
      size:'m',
      description:
        'This is the description of Bag item 2. It provides more details about the product.',
      rating: 4,
      location:'colombo'
    },
    {
      id: 6,
      imageUrl:
        'https://i.pinimg.com/236x/11/d9/35/11d935546c55a277084a3f3264d6aa56.jpg',
      name: 'Women Fit and Flare Brown Dress',
      price:'$20',
      size:'m',
      description:
        'This is the description of Bag item 2. It provides more details about the product.',
      rating: 4,
      location:'colombo'
    },
    {
      id: 7,
      imageUrl:
        'https://i.pinimg.com/736x/2d/dd/be/2dddbe76ff01102f09975a62dcdfa834.jpg',
      name: 'Bag Item 2',
      price:'$500',
      size:'m',
      description:
        'This is the description of Bag item 2. It provides more details about the product.',
      rating: 4,
      location:'colombo'
    },
    {
      id: 8,
      imageUrl:
        'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/g/s/l/xl-jne4372-janasya-original-imah47r45jrbf5n4.jpeg?q=70',
      name: 'Women Fit and Flare Brown Dress',
      price:'$200',
      size:'m',
      description:
        'This is the description of Bag item 2. It provides moremmmmmmmm details about the product.',
      rating: 4,
      location:'colombo'
    },
  ];

  const item = itemData.find((item) => item.id === parseInt(id, 10)); // Find the item by ID

  if (!item) {
    return <Typography>Item not found!</Typography>;
  }

  return (
    <div>
    <PrimarySearchAppBar/>
      <Grid2 container spacing={5}>
        <Grid2 item xs={6}>
          <Card
            sx={{
              width: '95%',
              height: '80vh',
              padding: '5px',
              marginTop: '20%',
              cursor: 'pointer',
              marginLeft: '80px',
              overflow: 'hidden', // Prevent image overflow during zoom
            }}
          >
            <Box
              component="img"
              src={item.imageUrl}
              alt={item.name}
              onLoad={() => setImageLoaded(true)} // Mark image as loaded
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '5px',
                opacity: imageLoaded ? 1 : 0, // Fade-in effect
                transform: imageLoaded ? 'scale(1)' : 'scale(3.0)', // Zoom effect on load
                transition: 'opacity 0.8s ease, transform 0.8s ease', // Smooth transition for load animation
                '&:hover': {
                  transform: 'scale(1.5)', // Zoom in on hover
                  transition: 'transform 0.5s ease-in-out', // Smooth zoom transition
                },
              }}
            />
          </Card>
        </Grid2>
        <Grid2
          item
          xs={6}
          sx={{
            marginTop: '8%',
            marginLeft: '85px',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            {item.name}
          </Typography>
          <br />
          <Typography variant="h6">Price: {item.price}</Typography>
          <Typography>Location: {item.location}</Typography>
          <Rating value={item.rating} readOnly sx={{ fontSize: '2rem' }} />
          <Typography sx={{ marginTop: '20px' }}>{item.description}</Typography>
          <br />
          <Button
            sx={{
              backgroundColor: 'black',
              color: 'white',
              padding: '10px',
              width: '300px',
              fontSize: '15px',
              border: '1px solid black',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
                transform: 'scale(1.05)',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                borderColor: 'black',
              },
            }}
          >
            ADD TO CART
          </Button>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Item;
