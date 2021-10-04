import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { getMovies } from '../services/getMovies'
import setMoviesList from '../actions/setMoviesList'
import setNoResut from '../actions/setNoResult'


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '300px',
        borderColor: 'white'
    },
    iconButton: {
        padding: 10,
    },
}));

function SearchBox(props) {
    const classes = useStyles();
    const [input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        props.setNoResut(false)
        getMovies(input).then(res => {
            props.setMoviesList(res.data.results)
            if (res.data.results.length === 0) {
                props.setNoResut(true)
            }
        }).catch(e => {
            console.log('There is a issue with retrieving data ')
        })
    }

    return (
        <Paper variant="outlined" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search here ..."
                onChange={handleChange}
                value={input}
                data-testid="input-box"
            />
            <IconButton className={classes.iconButton} data-testid="search-button" onClick={handleClick}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}


SearchBox.propTypes = {
    setMoviesList: PropTypes.func,
    setNoResut: PropTypes.func,
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({
            setMoviesList: setMoviesList,
            setNoResut: setNoResut
        }, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(SearchBox);
