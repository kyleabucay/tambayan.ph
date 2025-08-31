import { Routes, Route, BrowserRouter } from "react-router-dom"
import ScrollToTop from './components/ui/ScrollToTop'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import DormsList from './components/pages/Dorms'
import CarinderiasList from './components/pages/Carinderias'
import LayoutRoute from './components/pages/Layout'
import DormDetails from './components/pages/DormDetails'
import CarinderiaDetails from './components/pages/CarinderiaDetails'

// For n8n Chatbot
import { useEffect } from 'react';
import '@n8n/chat/style.css';
import './chat-custom.css'
import { createChat } from '@n8n/chat';

export default function App() {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n-kylobite.duckdns.org/webhook/e5fe5319-c21a-49e2-8c3f-594cef3560cd/chat',
      webhookConfig: {
        method: 'POST',
        headers: {}
      },
      target: '#n8n-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      loadPreviousSession: true,
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
        "Hi there! I am Tambay, your fellow assistant 👋"
      ],
      i18n: {
        en: {
          title: 'Ask Tambay 👋',
          subtitle: "Your friendly assistant for quick answers.",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your question..',
        },
      },
      enableStreaming: false,
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LayoutRoute />}>
            <Route index element={<Home />}/>
            <Route path="dorms" element={<DormsList />} />
            <Route path="dorms/:id" element={<DormDetails />} />
            <Route path="carinderias" element={<CarinderiasList />} />
            <Route path="carinderias/:id" element={<CarinderiaDetails />} />
          </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
