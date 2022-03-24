import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton';
import { Info } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { SearchModal } from '.';

const useStyles = makeStyles(theme => ({
  listItem: {
    backgroundColor: '#FFF',
    color: '#FFF',
    height: '55px !important',
    maxHeight: '100px !important',
    /* To change the font, use the fontFamily rule */
  },
  listSubHeaderRoot: {
    backgroundColor: '#FFF',
    color: '#0289ffcf',
    fontSize: '1.5rem'
    /* To change the font, use the fontFamily rule */
  },
  subHeaderTitle: {
    display: 'inline-block'
    /* To change the font, use the fontFamily rule */
  }
}));

export default function TitlebarImageList(props) {
  console.log(props)
  const classes = useStyles();
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" classes={{ root: classes.listItem }} cols={2}>
        <ListSubheader component="div" classes={{ root: classes.listSubHeaderRoot }} >
          <Box > {props.title}
        
        </Box>
        </ListSubheader>
      </ImageListItem>
      <br></br>
      {props.data?.map((item) => (

        <ImageListItem key={item?.id}>
          <img
            src={`${item?.image}`}
            srcSet={`${item?.image}`}
            alt={item?.name}

          />
          <ImageListItemBar
            title={item?.name}
            /*   subtitle={item.author} */
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item?.title}`}
                component={Link} to={`/${props?.type}/${item.id}`}
              >
                <Info />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
/* 
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];
 */