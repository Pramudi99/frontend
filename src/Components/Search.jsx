import React, { useState } from 'react';
import { Box, Card, Checkbox, Grid, Rating, Typography,Dialog, DialogTitle,  DialogContent,IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuAppBar from './Navbar';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Search() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPriceFilters, setShowPriceFilters] = useState(false);
  const [showTypeFilters, setShowTypeFilters] = useState(false);
  const [showLocationFilters, setShowLocationFilters] = useState(false);
  const [showColorFilters, setShowColorFilters] = useState(false);

  const togglePriceFilters = () => {
    setShowPriceFilters((prev) => !prev);
  };
  const toggleTypeFilters = () => {
    setShowTypeFilters((prev) => !prev);
  };
  const toggleLocationFilters = () => {
    setShowLocationFilters((prev) => !prev);
  };
  const toggleColorFilters = () => {
    setShowColorFilters((prev) => !prev);
  };

  const [data] = useState([
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
      price:'$200',
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
      price:'$200',
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
  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };
  return (
    <div>
      <MenuAppBar/>
      <Grid container spacing={10}>
        {/* Filter Section */}
        <Grid item xs={3}>
          <Card
           sx={{
            width: '35vh',
            height: '60%',
            padding: '10px',
            marginTop: '40px',
            marginLeft: '60px',      
            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.3)' 
          
          }}
          >
            <Typography sx={{ fontWeight: 'bold',fontSize:'20px' }}>Filters</Typography> <br></br>                              
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
           cursor: 'pointer',
          justifyContent: 'space-between',
        }}
        onClick={togglePriceFilters}
      >
        <Typography >Price</Typography>
        <KeyboardArrowDownIcon
          sx={{
            transform: showPriceFilters ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </Box>
          
          {showPriceFilters && (
            <Box sx={{ marginLeft: '20px', marginTop: '10px' }}>
              <Checkbox {...label} />
             $50<br />
              <Checkbox {...label} />
             $100<br />
              <Checkbox {...label} />
              $200<br />
              <Checkbox {...label} />
              $200+
            </Box>
          )}  
           <hr></hr>   
          <br></br>
          
          <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          justifyContent: 'space-between',
        }}
        onClick={toggleTypeFilters}
      >
          
        <Typography >Type</Typography>
        <KeyboardArrowDownIcon
          sx={{
            transform: showTypeFilters ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </Box>
          
          {showTypeFilters && (
            <Box sx={{ marginLeft: '20px', marginTop: '10px' }}>
              <Checkbox {...label} />
             Shirt<br />
              <Checkbox {...label} />
              Frocks<br />
              <Checkbox {...label} />
             Trousers<br />
              <Checkbox {...label} />
            Blouse
            </Box>
          )}
          <hr></hr>  
          <br></br>
          
          <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          justifyContent: 'space-between',
        }}
        onClick={toggleLocationFilters}
      >
        <Typography > Location</Typography>
        <KeyboardArrowDownIcon
          sx={{
            transform: showLocationFilters ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </Box>
          
          {showLocationFilters && (
            <Box sx={{ marginLeft: '20px', marginTop: '10px' }}>
              <Checkbox {...label} />
             XdS<br />
              <Checkbox {...label} />
              Sk<br />
              <Checkbox {...label} />
             Md<br />
              <Checkbox {...label} />
            Lm
            </Box>
          )}
          <hr></hr>  
          <br></br>
        
          <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          justifyContent: 'space-between',
        }}
        onClick={toggleColorFilters}
      >
        <Typography >Color</Typography>
        <KeyboardArrowDownIcon
          sx={{
            transform: showColorFilters ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </Box>
          
          {showColorFilters && (
            <Box sx={{ marginLeft: '20px', marginTop: '10px' }}>
              <Checkbox {...label} />
             Red<br />
              <Checkbox {...label} />
              white<br />
              <Checkbox {...label} />
             Black<br />
              <Checkbox {...label} />
            Green
            </Box>
          )} 
               <hr></hr>    
          </Card>
         
        </Grid>

        {/* Results Section */}
        <Grid item xs={9}>
        <Grid container spacing={2}>
  {data.map((item) => (
    <Grid item xs={4} key={item.id}>
      <Card
        sx={{
          width: '43vh',
          height: '70vh',
          padding: '10px',
          marginTop: '40px',          
          boxSizing: 'border-box',      
         
          
        }}
        onClick={() => handleOpen(item)}
      >
        <Box
          component="img"
          src={item.imageUrl}
          alt="Sample Image"
          sx={{width: '100%',
            height: '75%', border: '1px solid grey' }}
        />
        <Typography sx={{ fontWeight: 'bold', marginTop: '10px' }}>
          {item.name}
        </Typography>    
        <Typography sx={{ marginTop: '10px' }}>Size {item.size}</Typography>    
        <Typography sx={{ marginTop: '10px' }}>{item.price}</Typography>
      </Card>
    </Grid>
  ))}
</Grid>
        </Grid>        
      </Grid>
      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{fontWeight:'bold'}}>
          {selectedItem?.name}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box
            component="img"
            src={selectedItem?.imageUrl}
            alt={selectedItem?.name}
            sx={{
              width: '50%',
              height: '50%',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '20px',
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          <Typography>{selectedItem?.description}</Typography>
          <Rating
            value={selectedItem?.rating}
            precision={0.5}
            readOnly
            sx={{ fontSize: '1.5rem', marginTop: '10px' }}
          />
          <Typography>Size : {selectedItem?.size}</Typography>
          <Typography sx={{fontWeight:'bold'}}> {selectedItem?.price}</Typography>
          <Typography> {selectedItem?.location}</Typography>
          
          <br></br> 
         <Button
      sx={{
        backgroundColor: 'Black',
        color: 'white',       
        width:'45%',       
        padding:'10px',  
        fontWeight: 'bold',       
      }}
    >
      <ShoppingCartIcon></ShoppingCartIcon>
      ADD TO CART
    </Button>

    <Button
      sx={{
        backgroundColor: 'black',
        color: 'white', 
        marginLeft:'10px',
        padding:'10px',             
        width:'45%',
        fontWeight: 'bold',       
      }}
    >
      <ShoppingCartIcon></ShoppingCartIcon>
      BYE NOW
    </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
