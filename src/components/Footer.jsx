// import React from "react";
// import styled from "styled-components";

// const FooterContainer = styled.footer`
//   background: rgba(0, 0, 0, 0.7);
//   text-align: center;
//   padding: 20px;
//   color: white;
// `;

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <p>&copy; 2025 World Journal. All rights reserved.</p>
//     </FooterContainer>
//   );
// };

// export default Footer;



import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Styled Components for Footer
const FooterContainer = styled.footer`
  background: #555;
  color: #ddd;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding-bottom: 30px;
`;

const FooterSection = styled.div`
  h2 {
    font-size: 20px;
    color: white;
    margin-bottom: 15px;
  }
  p, a {
    font-size: 14px;
    color: #eee;
    transition: color 0.3s ease-in-out;
    margin-top:5px;
  }
  a:hover {
    color: white;
  }
`;

const NewsletterInput = styled.input`
  width: 80%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
`;

const SubscribeButton = styled.button`
  background: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #0056b3;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
  a {
    color: #ddd;
    font-size: 22px;
    transition: color 0.3s ease-in-out;
  }
  a:hover {
    color: #007bff;
  }
`;

const Copyright = styled.div`
  text-align: center;
  width: 100%;
  padding-top: 20px;
  border-top: 1px solid #222;
  font-size: 14px;
`;

const BackToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #007bff;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease-in-out, transform 0.2s;
  &:hover {
    background: #0056b3;
    transform: scale(1.1);
  }
`;

export default function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const navigate=useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <FooterContainer>
            <FooterGrid>
                {/* About Section */}
                <FooterSection>
                    <h2 style={{fontFamily:"Brush Script MT, Brush Script Std, cursive"}}>AJGA Journal</h2>
                    <p>We offer high-quality educational resources designed to support researchers, educators, and students in expanding their knowledge and advancing academic excellence.</p>
                    <br/><p>📍 123 Business Street, Abuja, Nigeria.</p>
                    <p>📞 +1 234 567 890</p>
                    <p>📧 contact@ajgajournal.com</p>
                </FooterSection>

                {/* Quick Links */}
                <FooterSection>
                    <h2>Quick Links</h2>
                    <p><a style={{cursor:"pointer"}} onClick={()=>navigate('/')}>Home</a></p>
                    <p><a style={{cursor:"pointer"}} onClick={()=>navigate('/aboutus')}>About us</a></p>
                    <p><a style={{cursor:"pointer"}} onClick={()=>navigate('/issuesandpubs')}>Issues & Publications</a></p>
                    <p><a style={{cursor:"pointer"}} onClick={()=>navigate('/publishingpolicy')}>Publishing Policy</a></p>
                    <p><a style={{cursor:"pointer"}} onClick={()=>navigate('/contactus')}>Contact us</a></p>
                   
                </FooterSection>

                {/* Newsletter */}
                <FooterSection>
                    <h2>Newsletter</h2>
                    <p>Stay updated with our latest updates.</p>
                    <div>
                        <NewsletterInput type="email" placeholder="Enter your email" />
                        <SubscribeButton>Subscribe</SubscribeButton>
                    </div>
                </FooterSection>

                {/* Social Media */}
                <FooterSection>
                    <h2>Follow Us</h2>
                    <SocialIcons>
                    <a href="https://facebook.com/AJGAJournal" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://twitter.com/AJGA_Journal" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://twitter.com/AJGA_Journal" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </SocialIcons>
                </FooterSection>
            </FooterGrid>

            {/* Copyright */}
            <Copyright>
                <p>© {new Date().getFullYear()} AJGA Journal. All rights reserved.</p>
                <p><a style={{cursor:"pointer", textDecoration:"underline"}} onClick={()=>navigate('/publishingpolicy')}>Publishing Policy</a></p>
            </Copyright>

            {/* Back to Top Button */}
            {showTopBtn && (
                <BackToTop onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <FaArrowUp size={20} />
                </BackToTop>
            )}
        </FooterContainer>
    );
}

