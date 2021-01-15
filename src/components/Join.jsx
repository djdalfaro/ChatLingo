import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
import { Chatrooms } from './Chatrooms';

import {
  Paper,
  Grid,
  Divider,
  Typography,
  List,
  ListItem,
} from '@material-ui/core';

const useStyles = makeStyles({
  joinSection: {
    width: '100%',
    height: '83vh',
  },

  titleBox: {
    color: '#40637E',
    fontWeight: 'bold',
    fontSize: '25px',
  },
});

const Join = ({ name, room, handleRoomNameChange }) => {
  const classes = useStyles();
  return (
    <Grid container component={Paper} className={classes.joinSection}>
      <Grid item xs={12}>
        <List>
          <ListItem button>
            <Typography className={classes.titleBox}>
              Join a Chatroom
            </Typography>
          </ListItem>
          <Divider />
          <ListItem style={{ paddingTop: '20px' }} alignItems="center">
            <MenuList>
              {Chatrooms.map((room, idx) => (
                <MenuItem
                  key={`room-${idx}`}
                  onClick={e => handleRoomNameChange(room.roomName)}
                >
                  <ListItemIcon>
                    <SendIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">{room.roomName}</Typography>
                </MenuItem>
              ))}
            </MenuList>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Join;
