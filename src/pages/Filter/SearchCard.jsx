import React from 'react'
import { Button } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import SearchBox from '../../components/SearchBox';
import SeachedJops from './SeachedJops';
import { Cradsearch, Div } from './style';

const SearchCard = () => {


  return (

<Cradsearch>
    <Div>
    <SearchBox width="530px"/>
    <Button color="success" variant='outlined' style={{borderRadius:"40px",marginTop:"10px"}}  startIcon={<FolderIcon />}>Save Seach</Button>
    </Div>
    <SeachedJops/>
</Cradsearch>
    )
}

export default SearchCard;