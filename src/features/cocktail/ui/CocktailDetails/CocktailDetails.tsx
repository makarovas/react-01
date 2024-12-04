import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@app/store';
import { Loader } from '@shared/ui/Loader';
import { getCocktail } from '../../model/cocktailSlice';
import { Cocktail } from '../../model/types';
import styles from './CocktailDetails.module.scss';

// ... остальной код компонента 