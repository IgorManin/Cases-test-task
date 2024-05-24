import * as React from 'react';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { AppBar, Button, IconButton, Stack, Toolbar } from '@mui/material';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import './style.scss';

const navItems = ['Кейсы', 'Компания', 'Услуги', 'Контакты'];

export const Header = () => {
  return (
    <AppBar component="nav" className="app-bar">
      <Toolbar className="app-bar__toolbar">
        <Stack className="app-bar__nav-wrapper">
          <IconButton className="app-bar__icon-button">
            <AccessTimeOutlinedIcon className="app-bar__icon" />
          </IconButton>
          <div className="app-bar__nav-items">
            {navItems.map((item) => (
              <Button key={item} className="app-bar__button">
                {item}
              </Button>
            ))}
          </div>
        </Stack>
        <IconButton className="app-bar__icon-button">
          <CrisisAlertOutlinedIcon className="app-bar__icon" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
