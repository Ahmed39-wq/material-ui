import React from 'react'
import { Stack, ImageList, ImageListItem } from '@mui/material'

export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList 
        sx={{width: 500, height: 500}}
        cols={3}
        // rowHeight={164}
        gap={10}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.img}`} alt={item.title} loading='lazy'/>
            </ImageListItem>
          ))}
          
      </ImageList>
    </Stack>
  )
}
const itemData = [
  {
    img: 'https://source.unsplash.com/random',
    title: 'A'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'B'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'C'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'D'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'E'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'F'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'G'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'H'
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'I'
  }
]
