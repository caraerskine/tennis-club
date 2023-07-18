import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';


function SplitButton( { selectedStatus, setSelectedStatus } ) {

  const options = [
    { label: 'All Matches' },
    { label: 'Completed Matches' },
    { label: 'Accepted Matches' },
    { label: 'Pending Matches' },
    { label: 'Rejected Matches' }
  ];

  // const navigate = useNavigate()

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  // const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${selectedStatus}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedStatus(options[index].label);
    setOpen(false);

    // const selectedLabel = options[index].label;
    // setSelectedStatus(selectedLabel);

   
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return(
  <React.Fragment>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        <Button onClick={handleClick}>{selectedStatus}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option.label}
                      disabled={index === 2}
                      selected={option.label === selectedStatus}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                     {option.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
 }

 return (
    <>
      Return ???
    </>
 )
}

export default SplitButton

 // don't think i am using now but check 
  //   const route = options[index].route;
  //   // const route = `/${options[index].toLowerCase().replace(" ", "-")}`;
  //   navigate(route);
  // };
