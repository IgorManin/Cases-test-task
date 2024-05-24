import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import { Filter } from '../../models';
import './cards.scss';

interface CardsProps {
  caseColor: string;
  image: string;
  title: string;
  filters: Filter[];
}

const getTextColor = (backgroundColor: string): string => {
  const hexColor = backgroundColor.replace('#', '');
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155 ? 'black' : 'white';
};

export const Cards: React.FC<CardsProps> = ({
  caseColor,
  image,
  title,
  filters,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const filter = filters.map((filter) => filter.Name).join(', ');

  const textColor = getTextColor(caseColor);
  return (
    <Card
      className="card"
      sx={{
        backgroundColor: `#${caseColor}`,
      }}
    >
      <CardActionArea
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="card__action-area"
      >
        <Stack className="card__stack">
          {!isHovered ? (
            <CardMedia
              component="img"
              className="card__media"
              image={image}
              alt={title}
            />
          ) : (
            <CardContent className="card__content">
              <Typography
                component="p"
                className="card__title"
                sx={{ color: textColor }}
              >
                {title}
              </Typography>
              <Typography
                component="div"
                className="card__filters"
                sx={{ color: textColor }}
              >
                {filter}
              </Typography>
            </CardContent>
          )}
        </Stack>
      </CardActionArea>
    </Card>
  );
};
