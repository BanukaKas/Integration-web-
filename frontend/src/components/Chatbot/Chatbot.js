import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uploadpic from '../../assets/upload.png';
import logo from '../../assets/logo.png';
import close from '../../assets/close.png';

function Chatbot() {
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  async function manageInput() {
    if (message.trim() === '') {
      return;
    }

    const userMessage = message;
    setMessage('');

    setConversations(prev => [...prev, { user: userMessage, bot: '...' }]);
    await fetchResponse(userMessage);
  }

  async function fetchResponse(input) {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/chat`, { message: input });
      if(response.status === 200) {
        setConversations(prev => {
          const updatedConversations = [...prev];
          updatedConversations[updatedConversations.length - 1].bot = response.data;
          return updatedConversations;
        });
      }
    } catch (error) {
      console.error(error);
      setConversations(prev => {
        const updatedConversations = [...prev];
        updatedConversations[updatedConversations.length - 1].bot = "Sorry, I'm having trouble connecting to the server.";
        return updatedConversations;
      });
    }
  }

  useEffect(() => {
    const toastId = toast.info("ChatBot is Loading...", {
      autoClose: 15000,
      closeButton: false,
      closeOnClick: false,
      draggable: false,
      progress: undefined
    });

    const timeout = setTimeout(() => {
      toast.dismiss(toastId);
      setLoading(false);
    }, 15000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='chatbot-container' style={{ display: isOpen ? 'block' : 'none' }}>
      <p className='chatbot-label'>live chat</p>
      <div className='chatbot-popup'>
        <ToastContainer />
        <div className='chatbot-header'>
          <div className='chatbot-header-info'>
            <img src={logo} alt='logo' width={100} height={100}/>
            <div className="chatbot-grey-line">
              <p className="chatbot-grey-line-text">Gamage Recruiters</p>
            </div>
          </div>
          <button className="chatbot-close-button" onClick={() => setIsOpen(false)}>
            <img src={close} alt="close" width={20} height={20} />
          </button>
        </div>

        <div className='chatbot-body'>
          <div className='chatbot-message-bot-message'>
            <div className='chatbot-set1'>
              <input type="text" className="chatbot-box1-input" defaultValue={"Gamage Recruiters ChatBot"} readOnly/>
            </div>
            <div className='chatbot-set1'>
              <input type="text" className="chatbot-box2-input"
                defaultValue={"Hello! How can I assist you today?"}
                rows={3} readOnly/>
            </div>
            <div className='chatbot-set1'>
              <input type="text" className="chatbot-box2-input"
                defaultValue={"Please ask only about the company."}
                rows={3} readOnly/>
            </div>
          </div>

          {conversations.map((conv, index) => (
            <div key={index} className='chatbot-message-bot-message'>
              <div className='chatbot-set2'>
                <input type="text" className="chatbot-box3-input" value={"You"} readOnly style={{width: '45px'}}/>
              </div>
              <div className='chatbot-set2'>
                <input type="text" className="chatbot-box4-input" value={conv.user} 
                  style={{ minHeight: '40px', height: `${Math.max(40, conv.bot.length / 2)}px`, 
                  overflowY: 'auto', whiteSpace: 'nowrap', color: 'white' }} readOnly/>
              </div>
              <div className='chatbot-set1'>
                <input type="text" className="chatbot-box1-input" value={"Gamage Recruiters ChatBot"} readOnly/>
              </div>
              <div className='chatbot-set1'>
                <input type="text" className="chatbot-box2-input" value={conv.bot} 
                  style={{ minHeight: '40px', height: `${Math.max(40, conv.bot.length / 2)}px`, 
                  overflowY: 'auto', whiteSpace: 'nowrap' }} readOnly/>
              </div>
            </div>
          ))}
          <hr className="chatbot-centered-hr"/>
        </div>

        <div className='chatbot-footer'>
          <form action="#" className="chatbot-form">
            <input type="text" placeholder="TYPE YOUR MESSAGE...." className="chatbot-message-input" required
              value={message} onChange={(e) => setMessage(e.target.value)} disabled={loading}/>
            <button type="button" onClick={manageInput}>
              <img src={uploadpic} alt="upload" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chatbot; 