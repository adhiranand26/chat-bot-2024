document.getElementById('sent-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    appendMessage('user', userInput);
    document.getElementById('user-input').value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        appendMessage('bot', botResponse);
    }, 1000);
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

function getBotResponse(input) {
    const responses = {
        "hai":"Hi there! How can I help you?",
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a program, but thanks for asking!",
        "bye": "Goodbye! Have a great day!",
        "i love you" : "i love you too",
        "what can you do":"I can assist with answering questions, providing information, and helping you with tasks like writing and brainstorming ideas but i work ofline so i wont able to do a lot of things",
        "how do I get started":"Simply ask me a question or tell me what you need help with!",
        "can you help me with homework":"Absolutely! Just tell me the subject and what you need help with.", 
        "tell me a joke":"Why did the scarecrow win an award? Because he was outstanding in his field!",
        "tell me a another joke":"Why did the bicycle fall over? because it was two-tired",
        "what is your favorite movie":"I don’t watch movies, but I can recommend popular ones based on your preferences!",
        "how do I contact customer support":"You can reach customer support at: adhiranand26@gmail.com",
        "can you tell me a fun fact":"Did you know honey never spoils? Archaeologists have found pots of honey in ancient tombs that are over 3000 years old!",
        "what’s the weather like today":"I can’t check real-time weather, but you can look it up online!",
        "what are your hours of operation":"I’m available 24/7 to assist you anytime!",
        "what is your favorite color":"I don’t have personal preferences, but I like all colors equally!",
        "what should i do if I feel stressed":"Try deep breathing, take a walk, or talk to someone about it.",
        "what is ai":"Artificial intelligence is the simulation of human intelligence in machines.",
        "how can i stay motivated":"Set clear goals, celebrate small achievements, and surround yourself with supportive people!",
        "what are some tips for public speaking":"Practice, know your audience, and use visual aids to enhance your presentation",
        "how do i stay organized":"Use a planner, prioritize tasks, and declutter your space regularly.",
        "what’s the meaning of life":"Many say it's about finding happiness and fulfillment, but it varies for everyone!",
        "how do i deal with procrastination":"Break tasks into smaller steps, set deadlines, and eliminate distractions.",
        "how can i save money":"Create a budget, set savings goals, and avoid impulse purchases.",
        "how do i improve my sleep quality":"Establish a bedtime routine, avoid screens before bed, and create a comfortable sleeping environment.",
        "what is mindfulness":"Mindfulness is the practice of being present and fully engaged in the moment",
        "what are the benefits of exercise":"What are the benefits of exercise",
        "can you tell me a riddle":"Sure! What has keys but can’t open locks? (Answer: A piano!)",
        "what’s the difference between weather and climate":"Weather refers to short-term atmospheric conditions, while climate is the average over a longer period",
        "how can i make new friends":"Join clubs, attend events, or take classes in areas that interest you!",
        "what is the importance of gratitude":"Practicing gratitude can enhance your mood and improve overall well-being.",
        "what are some healthy snack options":"Fresh fruits, nuts, yogurt, and veggie sticks are all great choices!",
        "how do i stay informed about current events":"Follow reputable news sources online, listen to podcasts, or read news articles",
        "what should i include in my resume":"Include your contact information, work experience, education, and relevant skills.",
        "how do i manage stress?":"Identify stressors, practice relaxation techniques, and seek support from friends or professionals",
        "what are some popular books to read":"Some popular books include The great Gatsby and to kill a Mockingbird.",
        "how can i relax after a long day":"How can I relax after a long day",
        "can you recommend a workout routine":"A balanced routine includes cardio, strength training, and flexibility exercises. Aim for at least 150 minutes of moderate activity each week!",
        "how can i learn a new language":"You can use language learning apps, take online courses, practice with native speakers, and immerse yourself in the language!",
        "what are some popular travel destinations":"Popular destinations include Paris, Tokyo, New York City, and Bali!",
        "how do i start a garden":"Choose a sunny spot, select your plants, prepare the soil, and water regularly!",
        "how can i improve my public speaking skills":"Practice regularly, know your material, and focus on engaging your audience!",
    };
    const lowerCaseInput = input.toLowerCase();
    return responses[lowerCaseInput] || "Sorry, I don't understand that.Can you elaborate";
}
        

