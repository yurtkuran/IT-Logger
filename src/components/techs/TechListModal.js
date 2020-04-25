import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// bring in redux
import { connect } from 'react-redux';

// bring in compontents
import TechItem from './TechItem';

// bring in actions
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    return (
        <div id='tech-list-modal' className='modal'>
            <div className='modal-content'>
                <h4>Technician List</h4>
                <ul className='collection'>{techs !== null && !loading && techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}</ul>
            </div>
        </div>
    );
};

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
};

const mapStatetoProps = (state) => ({
    tech: state.tech,
});

export default connect(mapStatetoProps, { getTechs })(TechListModal);
