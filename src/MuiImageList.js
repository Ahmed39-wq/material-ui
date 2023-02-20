import React from 'react'
import { Stack, ImageList, ImageListItem } from '@mui/material'

export const MuiImageList = () => {
  return (
    <Stack spacing={4 }>
      <ImageList 
        sx={{width: 400, height: 500}}
        cols={2}
        rowWeight={164}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.img}`} alt={`${item.title}`} loading='lazy'/>
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
  }
]
