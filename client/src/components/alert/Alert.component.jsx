import React from 'react';
import './alert.scss';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const Alert = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div key={alert.id} className={`text-center font-weight-bold alert text-dark alert-danger ${alert.alertType}`}>
        { alert.msg }
    </div>
))

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps)(Alert);