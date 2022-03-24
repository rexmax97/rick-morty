import { Link } from "react-router-dom"
import React, { createContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Search } from "@material-ui/icons";
import {characters} from '../../actions'

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function SearchModal() {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch]=React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleForm = async (e) => {
        e.preventDefault()
        console.log(e);
         const   dataCharacters= await characters();
         console.log(dataCharacters)
      }
    
    return (
      <div>
        <Button onClick={handleOpen}><Search></Search></Button>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Busqueda
            </Typography>
           
            <form onSubmit={handleForm}>
                    <div className="form-group">
                        <label>
                           
                        </label>
                        <input
                            type="text"
                            className="form-control" 
                           
                            onChange={ e => setSearch(e.target.value) }
                            placeholder="Ingresa una busqueda"
                        />
                    </div>
                   
                    <button
                    className="btn btn-primary"
                    type="submit"
                    >
                    Buscar
                    </button>
            </form>
          </Box>
        </Modal>
      </div>
    );
  }