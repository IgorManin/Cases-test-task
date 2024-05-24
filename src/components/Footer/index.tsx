import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import './style.scss';

export const Footer = () => {
  return (
    <Stack className="footer">
      <Typography className="footer__title">
        Стать клиентом или партнером!
      </Typography>
      <Typography className="footer__email">hello@it-cron.ru</Typography>
      <Stack className="footer__content">
        <Stack className="footer__info">
          <Typography className="footer__info-title">Россия, Москва</Typography>
          <Typography className="footer__info-address">
            119330, ул. Мосфильмовская, 35
          </Typography>
          <Typography className="footer__info-phone">
            +7 (495) 006-13-57
          </Typography>
        </Stack>
        <Stack className="footer__button-container">
          <Button className="footer__button footer__button--primary">
            Оставить заявку
          </Button>
        </Stack>
        <Stack className="footer__contact">
          <Typography className="footer__contact-title">
            Связаться через
          </Typography>
          <Button
            className="footer__contact-button"
            startIcon={<TelegramIcon />}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
