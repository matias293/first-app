import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from 'antd';
const { Title } = Typography;
import {
    faYoutube,
    faSquareGithub,
    faLinkedinIn,
  } from "@fortawesome/free-brands-svg-icons";

  
  function SiteFooter() {
  return (
    < >
      <div class="social-container" >
      <Title level={3}>Social Follow</Title>
        <a href="https://www.youtube.com/@soydalto"
            className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.twitter.com/jamesqquick" className="twitter social">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a href="https://www.instagram.com/learnbuildteach"
            className="instagram social">
            <FontAwesomeIcon icon={faSquareGithub } size="2x" />
          </a>
        </div>
    </>
  );

}

export default SiteFooter;