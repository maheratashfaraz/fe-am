import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchBox from './SearchBox'
import logo from '../assets/logo.png'
import Movie from './movie'
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '40px',
    },
    image: {
        width: '100%',
        maxWidth: '300px'
    },
    searchWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
    },
    logoWrapper: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
    },
    moviesWrapper: {
        backgroundColor: '#1D1D1D',
        padding: '18px'
    },
    moviesAndResultWrapper: {
        backgroundColor: '#1D1D1D',
        marginTop: '42px',
        padding: '18px'
    },
    paginator: {
        justifyContent: "flex-end",
    },
    paginationWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',

        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
    },
    resultCount: {
        display: 'flex',
        alignItems: 'center'
    },

    resultCountWrapper: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
    },
    noResult: {
        backgroundColor: '#1D1D1D',
        marginTop: '42px',
    }

}));
function LandingPage(props) {
    const classes = useStyles();
    const itemsPerPage = 10;
    const [page, setPage] = useState(1);
    const [noOfPages, setNoOfPages] = useState(0)

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        setNoOfPages(Math.ceil(props.movies.length / itemsPerPage))
    }, [props.movies])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.logoWrapper} item xs={12} sm={6}>
                    <img className={classes.image} src={logo} alt='logo' />
                </Grid>
                <Grid className={classes.searchWrapper} item xs={12} sm={6}>
                    <SearchBox />
                </Grid>
                {props.movies.length > 0 && <Grid className={classes.moviesAndResultWrapper} container spacing={3}>
                    <Grid className={classes.resultCountWrapper} item xs={12} sm={6}>
                        <Typography className={classes.resultCount}>{props.movies.length} Results found</Typography>
                    </Grid>
                    <Grid className={classes.paginationWrapper} item xs={12} sm={6}>
                        <Pagination
                            count={noOfPages}
                            page={page}
                            onChange={handlePageChange}
                            defaultPage={1}
                            color="primary"
                            size="large"
                            showFirstButton
                            showLastButton
                            classes={{ ul: classes.paginator }}
                        />
                    </Grid>
                </Grid>}
                {props.movies.length > 0 && <Grid className={classes.moviesWrapper} container spacing={3}>
                    {props.movies.length > 0 && props.movies.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((movie, index) => {
                        return (<Grid key={index} item xs={6} sm={3}>
                            <Movie
                                movie={movie} />
                        </Grid>)
                    })}
                </Grid>}
                {props.noResult && <Grid item xs={12} className={classes.noResult}>
                    <Typography>There is no result for the given input</Typography>
                </Grid>}
            </Grid>
        </div>
    );
}

LandingPage.propTypes = {
    movies: PropTypes.array,
    noResult: PropTypes.bool
}

function mapStateToProps(state) {
    return {
        movies: state.movies.list,
        noResult: state.noResult.status
    }
}

export default connect(mapStateToProps, null)(LandingPage);


