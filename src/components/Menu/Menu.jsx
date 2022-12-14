import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import './Menu.scss'
import Buyurtma from '../buyurtma/Buyurtma';

export default function Menu() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List className='List'>
            <div className="nav1">
                    <ul className='nav__list1'>
                        <li className='list__item1'>Katalog</li>
                        <li className='list__item1'>Aksiya</li>
                        <li className='list__item1'><a href="#Bizhaqimizda">Biz haqimizda</a></li>
                        <li className='list__item1'><a href="#manzil_ul">Manzil</a></li>
                        <li className='list__item1'><a href="#Bizhaqimizda">Aloqa</a></li>
                    </ul>
                    <div className="aloqa1">
                    <Buyurtma/>                    
                    <i className="bi bi-telephone-fill"></i>  
                    <p>+998 90 123 45 67</p>
                    </div>
                </div>

        </List>
    </Box>
  );

  return (
    <div className='burger'>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className='burger'><i className="bi bi-list bur"></i></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

