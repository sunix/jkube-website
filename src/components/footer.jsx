import React from 'react';
import {Link} from "gatsby";
import PropTypes from 'prop-types';
import {resolveI18nPath} from "../i18n";

const ExternalLink = ({href, title}) => (
  <a href={href} target='_blank' rel='nofollow noopener noreferrer'>{title}</a>
);

const Footer = ({lang}) => {
  const resolvePath = resolveI18nPath(lang);
  return (
    <div className='eclipse-jkube-footer'>
      <div className='eclipse-jkube-footer__links'>
        <ul className='eclipse-jkube-footer__links-list'>
          <li><Link to={resolvePath('/docs#getting-started')}>Get Started</Link></li>
          <li><Link to={resolvePath('/docs')}>Docs</Link></li>
          <li><Link to={resolvePath('/docs#katacoda-courses')}>Katacoda Courses</Link></li>
          <li><Link to={resolvePath('/demos')}>Demos</Link></li>
        </ul>
        <ul className='eclipse-jkube-footer__links-list'>
          <li><Link to={resolvePath('/community')}>Community</Link></li>
          <li><Link to={resolvePath('/community#planning-and-meetings')}>Get Involved</Link></li>
          <li><Link to={resolvePath('/contributing')}>Contributing</Link></li>
        </ul>
        <ul className='eclipse-jkube-footer__links-list'>
          <li><ExternalLink href='https://www.eclipse.org' title='Eclipse Foundation'/></li>
          <li><ExternalLink href='https://www.eclipse.org/legal/privacy.php' title='Privacy Policy'/></li>
          <li><ExternalLink href='https://www.eclipse.org/legal/termsofuse.php' title='Terms of Use'/></li>
          <li><ExternalLink href='https://www.eclipse.org/legal/copyright.php' title='Copyright Agent'/></li>
          <li><ExternalLink href='https://www.eclipse.org/legal' title='Legal Resources'/></li>
        </ul>
      </div>
      <div className='eclipse-jkube-footer__copyright'>Copyright © Eclipse Foundation 2020</div>
    </div>
  );
};

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Footer;
