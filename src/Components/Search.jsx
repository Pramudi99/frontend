import React, { useState, useEffect } from 'react';
import { Box, Card, Checkbox, Grid, Rating, Typography, Slider } from '@mui/material';
import MenuAppBar from './Navbar';
import { useNavigate } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Search() {
  const navigate = useNavigate(); // Hook for navigation
  const [visibleItems, setVisibleItems] = useState([]); // Items to be displayed
  const [currentIndex, setCurrentIndex] = useState(0); // Current index for loading
  const [value, setValue] = useState([20, 37]); 
  const [data] = useState([
    {
      id: 1,
      imageUrl:
        'https://i.pinimg.com/736x/af/36/78/af36783a464d3b5163053258a042e625.jpg',
      name: 'Women Fit and Flare Brown Dress',
      price:'$10',
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
      price:'$5',
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
      price:'$7',
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
      price:'$15',
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
    
  ]);

  useEffect(() => {
    if (currentIndex < data.length) {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => [...prev, data[currentIndex]]);
        setCurrentIndex(currentIndex + 1);
      }, 500); // Delay of 500ms for each item to appear
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [currentIndex, data]);

  const handleChange = (event, newValue) => {
    setValue(newValue); // Handle price range slider value change
  };

  const handleCardClick = (id) => {
    navigate(`/item/${id}`); // Navigate to the details page with the item's ID
  };

  return (
    <div>
      <MenuAppBar />
    
      <Grid container spacing={2}>
        {/* Filter Section */}
        <Grid item xs={4}>
          <Card
            sx={{
              width: '45vh',
              height: '80%',
              padding: '10px',
              marginTop: '105px',
              marginLeft: '60px',
              boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)',
              position: 'fixed',
            }}
          >
            <Typography sx={{ fontWeight: 'bold', fontSize: '18px' , marginTop: '20px',}}>Price Range</Typography><br></br>
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => 'Price range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={(value) => `${value}°C`}
              />
            </Box><br></br>
            <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }}>Category</Typography><br></br>
            <Checkbox {...label} /> All
            <br />
            <Checkbox {...label} /> Price
            <br />
            <Checkbox {...label} /> Type
            <br />
            <Checkbox {...label} /> Size
            <br />
            <Checkbox {...label} /> Location
            <br />
            <Checkbox {...label} /> User Ratings
            <br />           
          </Card>
        </Grid>
       
        {/* Items Section */}
        <Grid container spacing={2} sx={{ marginTop: '60px' ,marginLeft:'30%'}}>
      
          {visibleItems.map((item, index) => (
            <Grid
              item
              xs={12}
              key={item.id}
              sx={{
                opacity: 0,
                animation: `${
                  index % 3 === 0
                    ? 'fade-in-scale'
                    : index % 3 === 1
                    ? 'slide-in'
                    : 'zoom-in'
                } 2.2s ease-in ${index * 0.3}s forwards`,
              }}
            >
              <Card
                onClick={() => handleCardClick(item.id)}
                sx={{
                  width: '95%',
                  height: '23vh',
                  padding: '5px',
                  marginTop: '40px',
                  cursor: 'pointer',
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Box
                      component="img"
                      src={item.imageUrl}
                      alt={item.name}
                      sx={{
                        width: '100%',
                        height: '30vh',
                        objectFit: 'cover',
                        borderRadius: '5px',
                      }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {item.name}
                    </Typography>
                    <Rating value={item.rating} precision={0.5} readOnly sx={{ fontSize: '1rem' }} />
                    <Typography sx={{ color: 'gray', marginTop: '5px' }}>{item.description}</Typography>
                    <Typography sx={{ marginTop: '10px', fontWeight: 'bold' }}>{item.price}</Typography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* CSS for fade-in animation */}
      <style>
  {`
    @keyframes fade-in-scale {
      0% {
        opacity: 0;
        transform: translateY(-20px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes slide-in {
      0% {
        opacity: 0;
        transform: translateX(-30px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes zoom-in {
      0% {
        opacity: 0;
        transform: scale(0.8);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  `}
</style>
    </div>
  );
}
