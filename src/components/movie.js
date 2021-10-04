import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MovieDetailsModal from './movieDetailsModal'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1

    },
    movieWrapper: {
        '&:hover': {
            background: "#f00",
        },
    },
    image: {
        width: '100%',
        maxWidth: '300px'
    },
    noImageWrapper: {
        width: '100%',
        height: '100%'
    }
}));



export default function Movie(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <a className={classes.movieWrapper} onClick={handleOpen}>
            <div className={classes.root}>
                {props.movie.poster_path ? <img className={classes.image} src={'https://image.tmdb.org/t/p/w200/' + props.movie.poster_path} data-testid="movie-poster" alt='image' /> : <div className={classes.noImageWrapper}>There is no poster for this movie</div>}
                <Typography data-testid="movie-title">{props.movie.title}</Typography>
                <Typography data-testid="movie-year">{props.movie.release_date}</Typography>
            </div>
            <MovieDetailsModal openModal={open} movie={props.movie} />
        </a>
    );
}

Movie.propTypes = {
    movie: PropTypes.object,
}

