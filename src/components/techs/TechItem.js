import React from 'react';
import PropTypes from 'prop-types';

// bring in redux
import { connect } from 'react-redux';

// bring in actions
import { deleteTech } from '../../actions/techActions';

// bring in materialize
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, deleteTech }) => {
    const onDelete = () => {
        deleteTech(tech.id);
        M.toast({ html: 'Tech deleted' });
    };

    return (
        <li className='collection-item'>
            <div>
                {tech.firstName} {tech.lastName}
                <a href='#!' onClick={onDelete} className='secondary-content'>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    );
};

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
