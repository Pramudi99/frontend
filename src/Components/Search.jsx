import React from 'react'
import { Box, Card, Checkbox, Grid2, Rating, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import FilterListIcon from '@mui/icons-material/FilterList';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function Search() {
    const [value, setValue] = React.useState([20, 37]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

      const dummyData = [
        {
          id: 1,
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3NUEuJosS64q67nVnnJiBCRdQfUxAfxs_A&s",
          name: "Bag Item 1",
          description: "This is the description of Bag item 1. It could be longer or shortern .",
          rating: 3, 
        },
        {
          id: 2,
          imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jAkmnmvPGZeajoDjSpmfGBvZE67h7E3HVw&s",
          name: "Bag Item 2",
          description: "This is the description of Bag item 2. It provides more details about the product.",
          rating: 4, 
        },        
      ];

  return (
    <div>
      <Grid2 container spacing={10}>
        <Grid2 item xs={4}>
        <Card sx={{ width: '45vh', height: '85vh', padding: '10px', marginTop: '40px',
        marginLeft: '70px', 
        marginRight: 'auto',
        borderColor: 'rder-box',
        borderColor: '#b1b1af  ',
        borderWidth: '1px', 
        borderStyle: 'solid',
         marginLeft: '110px',
          }}>
         <Typography sx={{fontWeight:'bold'}}>Price Range</Typography>
        <br></br>
        <Slider
        getAriaLabel={() => ' range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={(value) => `${value}°C`}
        sx={{
             color: 'red', 
          '& .MuiSlider-thumb': {
            borderRadius: '50%', // Makes the thumb circular
            border: '1px solid currentColor', // Adds a border to the thumb
          },
          '& .MuiSlider-track': {
            backgroundColor: 'red', // Track color
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'grey', // Rail color
          },
        }}
      />
      <br></br>
      <br></br>
        <Checkbox  {...label} />All<br></br>
        <Checkbox  {...label} />Price<br></br>
        <Checkbox  {...label}  />Type<br></br>
        <Checkbox  {...label} />Size<br></br>
        <Checkbox  {...label} />Location<br></br>   
        <Checkbox  {...label} />User Ratings<br></br>      
       </Card>       
        </Grid2>
        <Grid2 item xs={8}>
        <Card
        sx={{
        width: '115vh',
        height: '70px',
        padding: '10px',
        margin: '40px auto',
        boxSizing: 'border-box',
        borderColor: '#b1b1af ',
        borderWidth: '1.5px', 
        borderStyle: 'solid', 
        }}
        >
        <Grid2 container spacing={8}>
        <Grid2 item xs={1}>
        <Grid2 container spacing={2}>
        <Grid2 item xs={6}>
            <FilterListIcon/>
            </Grid2>         
            <Grid2 item xs={6}>
            <Typography>Filter</Typography>
            </Grid2>
            </Grid2>

         </Grid2>
        <Grid2 item xs={3}>
           <Typography> Price: lowest to high</Typography>
        </Grid2>       
        <Grid2 item xs={6}>
            <Box sx={{width: '45vh',height: '30px',padding: '18px',border: '2px solid orange',boxSizing: 'border-box',borderRadius:'20px'}}/>             
        </Grid2>
        </Grid2>
       </Card>
       {dummyData.map(item => (
        <Card
          key={item.id}
          sx={{
            width: '115vh',
            height: 'auto',
            padding: '10px',
            margin: '40px auto',
            boxSizing: 'border-box',
            borderColor: '#b1b1af',
            borderWidth: '1.5px',
            borderStyle: 'solid',
          }}
        >
          <Grid2 container spacing={5}>
            <Grid2 item xs={5}>
              <Box
                component="img"
                src={item.imageUrl}
                alt="Sample Image"
                sx={{  maxHeight: '180px', border: '1px solid grey' }}
              />
            </Grid2>
            <Grid2 item xs={7}>
              <Typography sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
              <Rating
                name={`rating-${item.id}`}
                value={item.rating} //  set the rating based on dummy data
                precision={0.5} // Optional: to allow half-stars
                readOnly 
                sx={{
                    fontSize: '1.3rem', 
                  }}
              />
          <Typography>{item.description}</Typography>
          </Grid2>
          </Grid2>
            </Card>
          ))}      
        </Grid2>        
        </Grid2>
    </div>
  )
}
