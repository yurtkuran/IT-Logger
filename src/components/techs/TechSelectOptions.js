import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// bring in redux
import { connect } from 'react-redux';

// bring in actions
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    return (
        techs !== null &&
        !loading &&
        techs.map((tech) => (
            <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
                {tech.firstName} {tech.lastName}
            </option>
        ))
    );
};

TechSelectOptions.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
};

const mapStatetoProps = (state) => ({
    tech: state.tech,
});

export default connect(mapStatetoProps, { getTechs })(TechSelectOptions);
