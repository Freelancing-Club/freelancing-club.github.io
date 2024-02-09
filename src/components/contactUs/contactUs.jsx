import React, { useState } from "react";
import styled from "styled-components";
import { HiOutlineArrowNarrowRight as ArrowRight } from "react-icons/hi";

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100vh;

  .box {
    transition: 300ms;
    border: 1px red;
    padding: 20px;
    background: ${(p) => (p.hover ? "#c70000" : "#ae0000")};
    display: flex;
    justify-content: center; /* Center the text horizontally */
    align-items: center;
    position: relative; /* Needed for absolute positioning */
    cursor: pointer;

    .text {
      color: #ffffffa9;
      font-size: 40px; /* Adjust the font size as needed */
      font-weight: 600;
      text-transform: uppercase;
      position: relative;
      display: flex;
      align-items: center;

      .arrowRight {
        color: #ffffffa9;
        position: absolute;
        right: 0;
        visibility: hidden;
      }

      &:hover {
        color: #fff;
        .arrowRight {
          transition: 300ms;
          color: #fff;
          right: -100px;
          visibility: visible;
        }
      }

      @media all and (max-width: 768px) {
        font-size: 30px;
        svg {
          font-size: 30px;
        }
      }
    }
  }
  .box:hover .arrow {
    opacity: 1; /* Show arrow on hover */
  }

  .arrow {
    position: absolute;
    top: 50%;
    right: 300px; /* Adjust arrow distance from text */
    width: 40px; /* Adjust arrow width */
    height: 40px; /* Adjust arrow height */
    background-color: #fff; /* Arrow background color */
    transform: translateY(-50%); /* Center the arrow vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%; /* Make arrow circular */
    opacity: 0; /* Initially hide arrow */
    transition: opacity 0.3s ease; /* Add smooth transition */
  }

  .arrow::after {
    content: "→"; /* Right arrow character */
    font-size: 40px; /* Adjust arrow size */
    color: #ae0000; /* Arrow color */
  }

  .box2 {
    background: #950000;
    width: 100%;
    padding: 60px;
    display: flex;
    flex-direction: column; /* Align children vertically */
    align-items: flex-start; /* Align children to the top */
    overflow: hidden;
    justify-content: space-between;

    .imageIcon {
      font-size: 80px;
      width: 30px;
    }

    .map {
      width: 105%; /* Adjust map width */
      height: 1000px; /* Adjust map height */
      border: none;

      padding-right: 600%;
    }

    .links {
      display: flex;
      gap: 20px;
    }

    @media all and (max-width: 768px) {
      padding: 10px;
    }
  }

  .imageContainer {
    display: grid;
    justify-content: center;
    width: 100%;

    img {
      width: 300px;
    }

    @media all and (min-width: 768px) {
      padding-top: 50px;
      img {
        width: 350px;
      }
    }
  }

  .text-details {
    display: grid;
    gap: 5px;
    color: #f5f5f1e0;
    font-size: 0.8rem;

    a {
      color: #f5f5f1e0;
      text-decoration: underline;

      &:hover {
        color: #f5f5f19f;
      }
    }
  }

  a {
    text-decoration: none;
  }
  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const Links = [
  {
    src: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
    href: "https://www.instagram.com/vitb_freelancing_club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/3991/3991775.png",
    href: "https://www.linkedin.com/company/freelance-club-vitb/about/",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/128/733/733609.png",
    href: "https://github.com/Freelancing-Club",
  },
];
const ContactUs = () => {
  const [hover, setHover] = useState(false);
  return (
    <Container hover={hover}>
      <div class="box">
        <a
          href="https://forms.gle/anaSPzDVfPStkPuy7"
          target="_blank"
          
        >
          <div
            class="text"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            LET'S CHAT
            <ArrowRight className="arrowRight" fill="white" style={{ fontSize: 80 }} />
          </div>
        </a>
      </div>
      <div class="box box2">
        <div className="imageContainer">
          <img src={`${process.env.PUBLIC_URL}/globe.png`} />
        </div>
        <div class="detail">
          <p className="text-details">
            <span>ESTABLISHED 2024</span>

            <span>
              <a href="mailto:freelancingclub@vitbhopal.ac.in">
                freelancingclub@vitbhopal.ac.in
              </a>
            </span>
            <span>
              Kotri Kalan,Ashtha,Near,Indore Road,Madhya Pradesh-4661144
            </span>
          </p>
          <br />

          <div className="links">
            {Links.map(({ src, href }, i) => {
              return (
                <span>
                  <a href={href} target="blank">
                    <br />
                    <img src={src} class="imageIcon" />
                  </a>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
