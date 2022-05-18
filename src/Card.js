import React, {useState, useEffect} from 'react';
import {  Button, Card, CardActions, CardContent, CardMedia,  Grid,  Typography, Container } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PublicIcon from '@material-ui/icons/Public';
import useStyles from './styles';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const App = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      if(response.data) {
        setUsers(response.data);
      }
    };

    fetchUsers();
  }, []);


  return (
    <React.Fragment>
      
      <main>
        
          
        
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {users.map((id) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`https://avatars.dicebear.com/v2/avataaars/${id.username}.svg?options[mood][]=happy`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {id.name}
                    </Typography>
                    <Typography size="small">
                     <MailOutlineIcon /> {id.email}
                    </Typography >
                    <Typography size="small">
                     <PhoneEnabledIcon /> {id.phone}
                    </Typography >
                    <Typography size="small">
                     <PublicIcon /> {id.website}
                    </Typography >
                  </CardContent>
                  <CardActions>
                  <Button variant="outlined" color="primary" >
                    <FavoriteBorderIcon /></Button>
                    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    <EditIcon /> 
                    </Button>
                    <Button variant="outlined" color="primary" >
                      <DeleteIcon />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">basic model</DialogTitle>
        <DialogContent>
    
          <TextField
            autoFocus
            margin="dense"
            
            label="email"
            type="email"
            fullWidth
          />
          <TextField
            
            margin="dense"
            
            label="phone"
            type="number"
            fullWidth
          />
          <TextField
            
            margin="dense"
            
            label="website"
            type="url"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default App;