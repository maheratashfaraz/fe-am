import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Typography } from '@material-ui/core';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    title: {
        margin: '4px 0px',

    },
    year: {
        margin: '4px 0px',
    },
    closeButton: {
        margin: '4px 0px',
    }
}));

export default function MovieDetailsModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        setOpen(props.openModal)
    }, [props.openModal])

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            {props.movie.poster_path ? <img className={classes.image} src={'https://image.tmdb.org/t/p/w200/' + props.movie.poster_path} data-testid="movie-poster" alt='image' /> : <div className={classes.noImageWrapper}>There is no poster for this movie</div>}
            <Typography data-testid="movie-title" className={classes.title}>Title: {props.movie.title}</Typography>
            <Typography data-testid="movie-year" className={classes.year}>Year: {props.movie.release_date}</Typography>
            <button data-testid="close-button" className={classes.closeButton} type="button" onClick={handleClose}>
                close
                </button>
        </div>
    );

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    );
}

MovieDetailsModal.propTypes = {
    movie: PropTypes.object,
    openModal: PropTypes.bool,
}
