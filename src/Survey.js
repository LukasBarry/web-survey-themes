import React from 'react';
import PropTypes from 'prop-types';
import Progress from './ProgressBar';
import './survey.css'
import classNames from 'classnames';

function Survey(props) {
  const ua = window.navigator.userAgent;
  const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
  const webkit = !!ua.match(/WebKit/i);
  const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

  const { primary, secondary, tertiary } = props.themes;

  return (
    <div className="survey" style={{ backgroundColor: tertiary }}>
      <nav className="navbar navbar-light" style={{ backgroundColor: secondary }}>
        <button
          type="button"
          className={'btn btn-secondary'}
          style={{ width: '60px', height: '38px' }}/>

        <Progress themes={props.themes} />
      </nav>

      <div className="card" style={{ width: '30rem' }}>
        <div className="card-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <textarea
            style={{ borderColor: primary }}
            className={classNames('form-control my-4', {
              'd-none d-sm-block': !iOSSafari,
              'd-block': iOSSafari,
            })} />

          <button
            type='button'
            className="conditional btn btn-secondary"
            style={{
              backgroundColor: primary,
              width: '60px',
              height: '38px'
            }} />
        </div>
      </div>
    </div>
  );
}

Survey.propTypes = {
  themes: PropTypes.shape().isRequired,
};

export default Survey;
