import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// bring in redux
import { connect } from 'react-redux';

// bring in compontents
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

// bring in actions
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    if (loading || logs === null) {
        return <Preloader />;
    }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? <p className='center'>No logs to show</p> : logs.map((log) => <LogItem key={log.id} log={log} />)}
        </ul>
    );
};

Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
};

const mapStatetoProps = (state) => ({
    log: state.log,
});

export default connect(mapStatetoProps, { getLogs })(Logs);
