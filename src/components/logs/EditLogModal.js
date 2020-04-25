import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// bring in redux
import { connect } from 'react-redux';

// bring in components
import TechSelectOptions from '../techs/TechSelectOptions';

// bring in actions
import { updateLog, clearCurrent } from '../../actions/logActions';

// bring in materialize
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({ current, updateLog, clearCurrent }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    }, [current]);

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' });
            clearCurrent();
        } else {
            const updatedLog = {
                id: current.id,
                message,
                tech,
                attention,
                date: new Date(),
            };
            updateLog(updatedLog);
            M.toast({ html: `Log updated by ${tech}` });

            // clear fields
            setMessage('');
            setTech('');
            setAttention(false);
        }
    };

    return (
        <div id='edit-log-modal' className='modal' style={modalStyle}>
            <div className='modal-content'>
                <h4>Enter System Log</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input type='text' name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <select name='tech' value={tech} className='browser-default' onChange={(e) => setTech(e.target.value)}>
                            <option value='' disabled>
                                Select Technicial
                            </option>
                            <TechSelectOptions />
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field'>
                        <p>
                            <label>
                                <input type='checkbox' className='filled-in' checked={attention} value={attention} onChange={(e) => setAttention(!attention)} />
                                <span>Need Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className='modal-footer'>
                <a href='#!' onClick={onSubmit} className='modal-close waves-effect blue btn'>
                    Enter
                </a>
            </div>
        </div>
    );
};

const modalStyle = {
    width: '75%',
    height: '75%',
};

EditLogModal.propTypes = {
    current: PropTypes.object,
    updateLog: PropTypes.func.isRequired,
};

const mapStatetoProps = (state) => ({
    current: state.log.current,
});

export default connect(mapStatetoProps, { updateLog, clearCurrent })(EditLogModal);
