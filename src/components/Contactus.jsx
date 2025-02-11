// import React, { useState } from "react";
// import styled from "styled-components";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPlus, FaMinus } from "react-icons/fa";
// import contactimg from '../Images/contactimg.jpg'

// // Styled Components
// const ContactPage = styled.div`
//   font-family: "Arial", sans-serif;
//   background: white;
//   color: #333;
//   padding: 50px 20px;
//   text-align: center;
//   padding-top:100px;
//   position:relative;
//   background-image:url(${contactimg});
//   background-size:cover;
  



//     &::before{
//     content:'';
//     position:absolute;
//     top:0;
//     left:0;
//     width:100%;
//     height:100%;
//     background-color:rgba(255,255,255,0.7);

//     }
// `;

// const Title = styled.h1`
//   font-size: 2.5rem;
//   margin-bottom: 20px;
//   color: white;
//   text-shadow: 2px 2px 10px rgba(0, 0, 0, 1);
//   position:relative;
// `;

// const ContactContainer = styled.div`
//   max-width: 900px;
//   margin: 0 auto;
//   background:rgba(255,255,255,0.7);
//   padding: 30px;
//   border-radius: 10px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   position:relative;
// `;

// const ContactItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
//   font-size: 1.2rem;
//   margin: 15px 0;
// `;

// const FAQSection = styled.div`
//   max-width: 800px;
//   margin: 40px auto;
//   text-align: left;
//   position:relative;
// `;

// const FAQTitle = styled.h2`
//   font-size: 2rem;
//   text-align: center;
//   margin-bottom: 20px;
//   color: rgba(0, 0, 255, 0.5);
// `;

// const FAQItem = styled.div`
//   background: #eef2ff;
//   padding: 15px;
//   margin-bottom: 10px;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: 0.3s;
//   border: 1px solid rgba(0, 0, 255, 0.3);

//   &:hover {
//     // background: rgba(0, 0, 255, 0.1);
//   }
// `;

// const Question = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-size: 1.2rem;
// `;

// const Answer = styled.p`
//   margin-top: 10px;
//   font-size: 1rem;
//   color: #555;
//   display: ${({ show }) => (show ? "block" : "none")};
// `;

// // Styled Form Components
// const FormContainer = styled.div`
//   max-width: 600px;
//   margin: 40px auto;
//   padding: 30px;
//   background: rgba(255,255,255,0.5);
//   border-radius: 10px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   position:relative;
// `;

// const FormTitle = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 20px;
//   color: rgba(0, 0, 255, 0.5);
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   margin: 10px 0;
//   font-size: 1rem;
//   border: 1px solid rgba(0, 0, 255, 0.3);
//   border-radius: 5px;
//   background: #fff;
//   color: #333;
//   outline: none;
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 12px;
//   margin: 10px 0;
//   font-size: 1rem;
//   border: 1px solid rgba(0, 0, 255, 0.3);
//   border-radius: 5px;
//   background: #fff;
//   color: #333;
//   outline: none;
//   height: 120px;
// `;

// const SubmitButton = styled.button`
//   background: rgba(0, 0, 255, 0.5);
//   color: white;
//   padding: 12px 20px;
//   font-size: 1rem;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: 0.3s;

//   &:hover {
//     background: rgba(0, 0, 255, 0.7);
//   }
// `;

// const ContactSupport = () => {
//   const [openFAQ, setOpenFAQ] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const faqs = [
//     { 
//       question: "How can I submit my research paper?", 
//       answer: "You can submit your paper through our online submission portal. Ensure you follow the submission guidelines." 
//     },
//     { 
//       question: "What is the peer review process?", 
//       answer: "Our peer review process ensures high-quality publications. Your paper will be reviewed by experts in your field." 
//     },
//     { 
//       question: "Who do I contact for technical support?", 
//       answer: "If you experience technical issues, email our support team at support@ajgajournal.com." 
//     }
//   ];

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Thank you, ${formData.name}! Your message has been received.`);
//     setFormData({ name: "", email: "", phone: "", message: "" });
//   };

//   return (
//     <ContactPage>
//       <Title>Contact & Support</Title>
      
//       <ContactContainer>
//         <h2 style={{ color: "rgba(0, 0, 255, 0.5)" }}>Editorial Office</h2>
//         <ContactItem>
//           <FaEnvelope style={{ color: "rgba(0, 0, 255, 0.5)" }} /> Email: editorial@ajgajournal.com
//         </ContactItem>
//         <ContactItem>
//           <FaPhone style={{ color: "rgba(0, 0, 255, 0.5)" }} /> Phone: +1 (234) 567-890
//         </ContactItem>
//         <ContactItem>
//           <FaMapMarkerAlt style={{ color: "rgba(0, 0, 255, 0.5)" }} /> Address: 123 Research St, New York, NY 10001
//         </ContactItem>
//       </ContactContainer>

      // <FormContainer>
      //   <FormTitle>Contact Us</FormTitle>
      //   <form onSubmit={handleSubmit}>
      //     <Input
      //       type="text"
      //       name="name"
      //       value={formData.name}
      //       onChange={handleInputChange}
      //       placeholder="Your Name"
      //       required
      //     />
      //     <Input
      //       type="email"
      //       name="email"
      //       value={formData.email}
      //       onChange={handleInputChange}
      //       placeholder="Your Email"
      //       required
      //     />
      //     <Input
      //       type="tel"
      //       name="phone"
      //       value={formData.phone}
      //       onChange={handleInputChange}
      //       placeholder="Your Phone Number"
      //       required
      //     />
      //     <TextArea
      //       name="message"
      //       value={formData.message}
      //       onChange={handleInputChange}
      //       placeholder="Your Message"
      //       required
      //     />
      //     <SubmitButton type="submit">Send Message</SubmitButton>
      //   </form>
      // </FormContainer>

//       <FAQSection>
//         <FAQTitle>Frequently Asked Questions</FAQTitle>
//         {faqs.map((faq, index) => (
//           <FAQItem key={index} onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
//             <Question>
//               {faq.question} {openFAQ === index ? <FaMinus /> : <FaPlus />}
//             </Question>
//             <Answer show={openFAQ === index}>{faq.answer}</Answer>
//           </FAQItem>
//         ))}
//       </FAQSection>
//     </ContactPage>
//   );
// };

// export default ContactSupport;


import React, { useState } from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPlus, FaMinus, FaTwitter, FaLinkedin, FaFacebook, FaPaperPlane, FaGlobe } from "react-icons/fa";
import contactimg from "../Images/contactimg.jpg";

// Styled Components
const ContactPage = styled.div`
  font-family: "Arial", sans-serif;
  background: white;
  color: #333;
  padding: 50px 20px;
  text-align: center;
  padding-top: 100px;
  position: relative;
  background-image: url(${contactimg});
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: rgba(0,0,255,0.5);
  position: relative;
`;

const ContactContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.2rem;
  margin: 15px 0;
  color: rgba(0,0,255,0.5);
`;

const FAQSection = styled.div`
  max-width: 800px;
  margin: 40px auto;
  text-align: left;
  position: relative;
`;

const FAQTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: rgba(0,0,255,0.5);
  `;

const FAQItem = styled.div`
  background: #eef2ff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid #004080;

  &:hover {
    // background: rgba(0, 0, 255, 0.1);
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
`;

const Answer = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #555;
  display: ${({ show }) => (show ? "block" : "none")};
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 30px;
  background: rgba(255,255,255,0.5);
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position:relative;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: rgba(0, 0, 255, 0.5);
`;


const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 255, 0.3);
  border-radius: 5px;
  background: #fff;
  color: #333;
  outline: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 255, 0.3);
  border-radius: 5px;
  background: #fff;
  color: #333;
  outline: none;
  height: 120px;
`;

const SubmitButton = styled.button`
  background: rgba(0, 0, 255, 0.5);
  color: white;
  padding: 12px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(0, 0, 255, 0.7);
  }
`;

const FooterSection = styled.div`
position:relative;
  h2 {
    font-size: 20px;
    color: rgba(0,0,255,0.5);
    margin-bottom: 15px;
  }
  p, a {
    font-size: 14px;
    // color: #eee;
    transition: color 0.3s ease-in-out;
    margin-top:5px;
  }
  a:hover {
    color: white;
  }
`;

const NewsletterInput = styled.input`
  // width: 80%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  margin-right:10px;
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

const ContactSupport = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

    const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const faqs = [
    { question: "How do I submit a manuscript?", answer: "Manuscripts must be submitted via the online submission portal. A detailed guide is available in the Author Guidelines section." },
    { question: "What is the timeline for peer review?", answer: "The journal follows a double-blind peer review process, typically taking 6-8 weeks." },
    { question: "How can I check the status of my submission?", answer: "Authors can track their manuscript’s progress via the submission dashboard. Status updates are also sent via email." },
    { question: "Are there article processing charges (APCs)?", answer: "Yes, APCs apply after acceptance to cover editorial and publication costs. Waivers and discounts are available under specific conditions." },
    { question: "Can I request a waiver for APCs?", answer: "Authors from low-income countries or NISEB members may apply for APC waivers or discounts." },
    { question: "How do I make corrections after submission?", answer: "Authors may update their manuscript before editorial screening. For major corrections post-review, a revision request must be submitted." },
    { question: "How can I become a reviewer?", answer: "Researchers with relevant expertise can apply via the Reviewer Registration Portal on the journal website." },
    { question: "What are the review guidelines?", answer: "Reviewers must assess manuscripts based on originality, methodology, clarity, ethical compliance, and scientific contribution." },
    { question: "How much time do I have to review a manuscript?", answer: "Standard review time is 2-4 weeks. Extensions can be requested in special cases." },
    { question: "Can I decline a review request?", answer: "Yes, reviewers should decline if they have a conflict of interest or lack the expertise to evaluate the manuscript." }
  ];

  return (
    <ContactPage>
      <Title>Contact & Support</Title>

      <ContactContainer>
        <h2>Editorial Office Contact Information</h2>
        <p><strong>African Journal of General Agriculture</strong></p>
        <p>Society for Experimental Biology of Nigeria (NISEB)</p>
        <p>Department of Environmental Management and Toxicology, Federal University of Petroleum Resources, Effurun, Delta State, Nigeria</p>
        <ContactItem><FaEnvelope /> Email: editorial@ajga-journal.org</ContactItem>
        <ContactItem><FaPhone /> Phone: +234 803-715-9452</ContactItem>
        <ContactItem><FaGlobe /> Website: www.ajga-journal.org</ContactItem>
        <p><strong>Response Time:</strong> 2-3 business days</p>
      </ContactContainer>

      <FAQSection>
        <FAQTitle>Frequently Asked Questions (FAQs)</FAQTitle>
        {faqs.map((faq, index) => (
          <FAQItem key={index} onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
            <Question>{faq.question} {openFAQ === index ? <FaMinus /> : <FaPlus />}</Question>
            <Answer show={openFAQ === index}>{faq.answer}</Answer>
          </FAQItem>
        ))}
      </FAQSection>

      <ContactContainer>
        <h2>Technical Support</h2>
        <ContactItem><FaEnvelope /> Email: support@ajga-journal.org</ContactItem>
        <ContactItem><FaPhone /> Phone: +234 803-715-9452</ContactItem>
      </ContactContainer>

      <FormContainer>
        <FormTitle>Contact Us</FormTitle>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your Phone Number"
            required
          />
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </form>
      </FormContainer>

      <FAQSection>
        <FAQTitle>Social Media</FAQTitle>
        <p style={{textAlign:"center"}}>Follow us on social media for updates, research highlights, and calls for papers:</p>
        <SocialIcons>
        <a href="https://facebook.com/AJGAJournal" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} color="#1877F2" />
          </a>
          
          <a href="https://twitter.com/AJGA_Journal" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} color="#1DA1F2" />
          </a>
          <a href="https://linkedin.com/company/african-journal-of-general-agriculture" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#0077B5" />
          </a>
          
        </SocialIcons>
      </FAQSection>

      {/* <FAQSection>
        <FAQTitle>Email Alerts & Newsletters</FAQTitle>
        <p>Sign up to receive:</p>
        <ul>
          <li>📩 Table of Contents (TOC) Alerts</li>
          <li>📩 Call for Papers & Special Issues</li>
          <li>📩 Editorial & Peer Review Updates</li>
          <li>📩 Research Highlights & Author Spotlights</li>
        </ul>
        <p>Sign up via our website: <a href="http://www.ajga-journal.org">www.ajga-journal.org</a></p>
      </FAQSection> */}

<FooterSection>
                    <h2>Newsletter</h2>
                    <p>Stay updated with our latest updates.</p>
                    <div>
                        <NewsletterInput type="email" placeholder="Enter your email" />
                        <SubscribeButton>Subscribe</SubscribeButton>
                    </div>
                </FooterSection>
    </ContactPage>
  );
};

export default ContactSupport;

