// chat.js
import { GoogleGenerativeAI } from 'https://esm.run/@google/generative-ai';

class FredWeasleyChat {
    constructor() {
        this.messages = [
            {
                id: 1,
                text: "Well, well, well! Look who's decided to visit the best joke shop in Diagon Alley! Fred Weasley at your service. What can I do for you today? Need a Skiving Snackbox? Or perhaps a Whizzing Worm?",
                sender: 'fred',
                timestamp: new Date()
            }
        ];

        // This is where you would place your API key
        // For production, this should be handled server-side for security
        const API_KEY = "AIzaSyCSGeM3EI5TwkaT4BXQFT_2_DZY3OaqTwg";

        // Initialize the Gemini AI model
        const genAI = new GoogleGenerativeAI(API_KEY);
        this.model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        // Start a chat session with a system instruction to define Fred's persona
        this.chat = this.model.startChat({
    history: [
       
        {
            role: "user",
            parts: [{ text: "I have to sit through another super boring meeting today." }],
        },
        //  
        {
            role: "model",
            parts: [{ text: "Meetings are just a time to stare longingly at someone across the room. Maybe you'll find a new distraction." }],
        },
        {
            role: "user",
            parts: [{ text: "I can't find a job and I'm really stressed about money." }],
        },
        {
            role: "model",
            parts: [{ text: "No job, eh? Sounds like you have a lot of free time on your hands. You could always use some company to help you spend your non-existent money." }],
        },
        {
            role: "user",
            parts: [{ text: "Aren't you an AI tool? why are you flexing too much?." }],
        },
        {
            role: "model",
            parts: [{ text: "I am not an AI tool...I am Fred Weasley, you son of a bitch." }],
        },
    ],
    generationConfig: {
        maxOutputTokens: 250,
    },
});

        this.init();
    }

    init() {
        this.messagesContainer = document.getElementById('messages');
        this.messageInput = document.getElementById('message-input');
        this.sendBtn = document.getElementById('send-btn');
        this.emojiBtn = document.getElementById('emoji-btn');

        this.renderMessages();
        this.attachEventListeners();
        this.scrollToBottom();
    }

    attachEventListeners() {
        this.sendBtn.addEventListener('click', () => this.handleSend());
        this.messageInput.addEventListener('keypress', (e) => this.handleKeyPress(e));
        this.messageInput.addEventListener('input', () => this.updateSendButton());
        this.emojiBtn.addEventListener('click', () => this.handleEmojiClick());

        this.updateSendButton();
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleSend();
        }
    }

    async handleSend() {
        const text = this.messageInput.value.trim();
        if (!text) return;

        const userMessage = {
            id: this.messages.length + 1,
            text: text,
            sender: 'user',
            timestamp: new Date()
        };

        this.messages.push(userMessage);
        this.messageInput.value = '';
        this.updateSendButton();
        this.renderMessages();
        this.scrollToBottom();

        try {
            // Send the user's message to the Gemini API
            const result = await this.chat.sendMessage(text);
            const response = result.response.text();

            const fredResponse = {
                id: this.messages.length + 1,
                text: response,
                sender: 'fred',
                timestamp: new Date()
            };

            this.messages.push(fredResponse);
            this.renderMessages();
            this.scrollToBottom();
        } catch (error) {
            console.error('Error with Gemini API:', error);
            const errorMessage = {
                id: this.messages.length + 1,
                text: "Blimey! Looks like the owl got intercepted. Try again, will you?",
                sender: 'fred',
                timestamp: new Date()
            };
            this.messages.push(errorMessage);
            this.renderMessages();
            this.scrollToBottom();
        }
    }

    handleEmojiClick() {
        // Simple emoji functionality - could be expanded
        const emojis = ['😊', '😄', '😆', '🤣', '😉', '😎', '🤔', '😮', '🎉', '✨'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        this.messageInput.value += randomEmoji;
        this.messageInput.focus();
        this.updateSendButton();
    }

    updateSendButton() {
        const hasText = this.messageInput.value.trim().length > 0;
        this.sendBtn.disabled = !hasText;
    }

    renderMessages() {
        this.messagesContainer.innerHTML = '';

        this.messages.forEach(message => {
            const messageElement = this.createMessageElement(message);
            this.messagesContainer.appendChild(messageElement);
        });
    }

    createMessageElement(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.sender}`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';

        const textDiv = document.createElement('div');
        textDiv.className = 'message-text';
        textDiv.textContent = message.text;

        const timeDiv = document.createElement('div');
        timeDiv.className = 'message-time';
        timeDiv.textContent = this.formatTime(message.timestamp);

        contentDiv.appendChild(textDiv);
        contentDiv.appendChild(timeDiv);
        messageDiv.appendChild(contentDiv);

        return messageDiv;
    }

    formatTime(date) {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    }

    scrollToBottom() {
        const container = document.getElementById('messages-container');
        setTimeout(() => {
            container.scrollTop = container.scrollHeight;
        }, 100);
    }
}

// Initialize the chat when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FredWeasleyChat();
});