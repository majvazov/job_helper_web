const interviewData = {
    'customer-service': {
        title: 'Customer Service Representative Interview',
        description: 'Practice answering common questions for a customer service position.',
        questions: [
            {
                question: "Tell me about a time you had to deal with a difficult situation and how you handled it.",
                tips: [
                    "Use the STAR method (Situation, Task, Action, Result) to structure your answer",
                    "Focus on your problem-solving skills and how you remained calm",
                    "Emphasize what you learned from the experience",
                    "Show how you maintained professionalism throughout the situation"
                ],
                keyWords: ["situation", "problem", "solution", "customer", "resolved", "professional", "calm", "learned", "experience", "handled"],
                goodFeedback: "Great answer! You showed problem-solving skills and empathy in your response. Customer service is about finding solutions while maintaining a positive attitude.",
                badFeedback: "Try to include specific examples of how you've handled conflicts or difficult situations. Even if you don't have work experience, you can draw from school, volunteer work, or personal interactions."
            },
            {
                question: "How would you handle an angry customer?",
                tips: [
                    "Start by actively listening to the customer's concerns",
                    "Stay calm and maintain a professional tone",
                    "Acknowledge their frustration and show empathy",
                    "Focus on finding a solution rather than placing blame",
                    "Follow up to ensure their issue was resolved"
                ],
                keyWords: ["listen", "understand", "empathy", "solution", "calm", "professional", "resolve", "patience", "apologize", "assist"],
                goodFeedback: "Excellent! You demonstrated patience and a focus on resolution. Listening to the customer and maintaining a calm demeanor are key skills for this role.",
                badFeedback: "Consider emphasizing active listening skills and empathy more in your answer. Remember the goal is to de-escalate the situation and find a solution for the customer."
            },
            {
                question: "What does good customer service mean to you?",
                tips: [
                    "Define what customer service means in your own words",
                    "Include specific examples of good customer service you've experienced",
                    "Mention the importance of active listening and empathy",
                    "Highlight the value of going above and beyond for customers",
                    "Connect your definition to the company's values"
                ],
                keyWords: ["satisfaction", "experience", "quality", "helpful", "listening", "empathy", "service", "support", "communication", "excellence"],
                goodFeedback: "Well done! Your definition of customer service aligns with what we're looking for - going above and beyond to ensure customer satisfaction.",
                badFeedback: "Try to be more specific about what actions constitute good customer service. Examples can help illustrate your understanding of customer needs."
            }
        ]
    },
    'web-developer': {
        title: 'Junior Web Developer Interview',
        description: 'Practice answering technical and situational questions for a web development role.',
        questions: [
            {
                question: "What interests you about web development?",
                tips: [
                    "Share your passion for technology and problem-solving",
                    "Mention any personal projects or coding exercises you've done",
                    "Talk about specific aspects of web development that excite you",
                    "Connect your interests to the company's tech stack or projects",
                    "Show enthusiasm for continuous learning in the field"
                ],
                keyWords: ["passionate", "projects", "learning", "technology", "coding", "development", "problem-solving", "creative", "innovation", "challenges"],
                goodFeedback: "Great answer! Your enthusiasm for technology and problem-solving comes through clearly. This shows us you have the right motivation for the role.",
                badFeedback: "Try to be more specific about what aspects of web development excite you. Mentioning any personal projects or coding exercises you've done would strengthen your answer."
            },
            {
                question: "How comfortable are you with HTML, CSS, and JavaScript?",
                tips: [
                    "Be honest about your current skill level",
                    "Mention any courses, tutorials, or projects you've completed",
                    "Highlight your willingness to learn and improve",
                    "Share specific examples of what you've built or learned",
                    "Express confidence in your ability to pick up new skills"
                ],
                keyWords: ["experience", "projects", "learning", "practice", "skills", "knowledge", "understanding", "development", "programming", "coding"],
                goodFeedback: "Good response! You've honestly assessed your knowledge level and shown a willingness to learn, which is exactly what we look for in entry-level positions.",
                badFeedback: "It's okay to be a beginner, but try to highlight any specific exposure you have had to these technologies, even if it's just from online courses or self-learning."
            },
            {
                question: "How do you approach learning new technologies?",
                tips: [
                    "Describe your learning process and resources you use",
                    "Mention specific online platforms or communities you engage with",
                    "Share how you practice and apply what you learn",
                    "Talk about how you stay updated with industry trends",
                    "Highlight your ability to learn independently"
                ],
                keyWords: ["research", "practice", "documentation", "tutorials", "learning", "resources", "community", "projects", "hands-on", "understanding"],
                goodFeedback: "Excellent answer! Your structured approach to learning shows us you can quickly adapt to new technologies, which is essential in this field.",
                badFeedback: "Consider mentioning specific strategies you use to learn, such as online courses, practice projects, or coding challenges. This shows your commitment to growth."
            }
        ]
    },
    'sales': {
        title: 'Sales Associate Interview',
        description: 'Practice answering sales-focused questions for a retail position.',
        questions: [
            {
                question: "Why do you want to work in sales?",
                tips: [
                    "Share your passion for helping customers",
                    "Mention your interest in product knowledge",
                    "Highlight your communication and interpersonal skills",
                    "Talk about your enthusiasm for meeting new people",
                    "Connect your answer to the company's products or services"
                ],
                keyWords: ["passion", "customers", "communication", "people", "products", "sales", "helping", "skills", "enthusiasm", "service"],
                goodFeedback: "Great answer! Your enthusiasm for customer interaction and helping people find solutions aligns perfectly with sales work.",
                badFeedback: "Try to emphasize your interest in the customer experience more. Sales is about understanding customer needs and connecting them with the right solutions."
            },
            {
                question: "How would you approach a customer who seems undecided?",
                tips: [
                    "Start by asking open-ended questions to understand their needs",
                    "Listen actively to their responses",
                    "Suggest products based on their specific requirements",
                    "Be patient and avoid being pushy",
                    "Offer to show them different options"
                ],
                keyWords: ["questions", "listen", "understand", "needs", "patient", "options", "suggest", "requirements", "help", "solutions"],
                goodFeedback: "Excellent! Your approach of asking open-ended questions and identifying needs shows you understand the consultative sales process.",
                badFeedback: "Consider focusing more on asking questions to understand the customer's needs rather than immediately pitching products. The best sales approach starts with listening."
            },
            {
                question: "How do you handle rejection?",
                tips: [
                    "Show resilience and a positive attitude",
                    "Mention how you learn from each rejection",
                    "Talk about maintaining professionalism",
                    "Share how you stay motivated",
                    "Highlight your ability to move on quickly"
                ],
                keyWords: ["resilience", "positive", "learn", "professional", "motivated", "improve", "attitude", "opportunity", "experience", "growth"],
                goodFeedback: "Well done! Your positive attitude toward rejection and seeing it as a learning opportunity is exactly what we look for in sales associates.",
                badFeedback: "Remember that rejection is a normal part of sales. Try to emphasize resilience and how you would learn from each rejection to improve your approach."
            }
        ]
    },
    'admin': {
        title: 'Administrative Assistant Interview',
        description: 'Practice answering questions related to organizational and support skills.',
        questions: [
            {
                question: "How do you prioritize multiple tasks when everything seems urgent?",
                tips: [
                    "Describe your method for assessing task urgency and importance",
                    "Mention tools or systems you use for organization",
                    "Talk about how you communicate with stakeholders",
                    "Share how you handle unexpected urgent tasks",
                    "Highlight your ability to stay calm under pressure"
                ],
                keyWords: ["prioritize", "organize", "urgent", "important", "system", "method", "communicate", "manage", "deadline", "efficiency"],
                goodFeedback: "Great answer! Your systematic approach to prioritization shows strong organizational skills essential for administrative work.",
                badFeedback: "Try to include more specific methods for prioritizing tasks, such as urgency/importance matrices or communication with stakeholders to clarify deadlines."
            },
            {
                question: "What experience do you have with Microsoft Office or Google Workspace?",
                tips: [
                    "List the specific applications you're familiar with",
                    "Mention any advanced features you know",
                    "Share examples of how you've used these tools",
                    "Talk about your willingness to learn new features",
                    "Highlight your ability to adapt to different software"
                ],
                keyWords: ["microsoft", "google", "excel", "word", "powerpoint", "sheets", "docs", "experience", "software", "skills"],
                goodFeedback: "Excellent! Your familiarity with these tools, even from academic or personal use, transfers well to professional settings.",
                badFeedback: "Even without professional experience, you can highlight your comfort level with these tools from school or personal projects. Be specific about which applications you know best."
            },
            {
                question: "How do you maintain confidentiality when handling sensitive information?",
                tips: [
                    "Emphasize the importance of trust and discretion",
                    "Mention specific security practices you follow",
                    "Talk about your understanding of data protection",
                    "Share how you handle sensitive documents",
                    "Highlight your commitment to privacy"
                ],
                keyWords: ["confidential", "security", "privacy", "trust", "discretion", "protection", "sensitive", "professional", "responsibility", "careful"],
                goodFeedback: "Well done! Your understanding of confidentiality principles shows maturity and professionalism needed for this role.",
                badFeedback: "Consider emphasizing the importance of trust and discretion more in your answer. Administrative roles often require handling confidential information."
            }
        ]
    },
    'data-entry': {
        title: 'Data Entry Specialist Interview',
        description: 'Practice answering questions about accuracy, attention to detail, and efficiency.',
        questions: [
            {
                question: "How do you ensure accuracy in repetitive tasks?",
                tips: [
                    "Describe your quality control process",
                    "Mention specific techniques for double-checking work",
                    "Talk about how you maintain focus",
                    "Share how you handle distractions",
                    "Highlight your attention to detail"
                ],
                keyWords: ["accuracy", "quality", "check", "detail", "focus", "process", "attention", "careful", "review", "precise"],
                goodFeedback: "Great answer! Your methods for maintaining focus and checking your work demonstrate the attention to detail needed for data entry.",
                badFeedback: "Try to mention specific techniques you use to maintain accuracy, such as double-checking entries, taking breaks to stay fresh, or creating a distraction-free environment."
            },
            {
                question: "How comfortable are you with typing and data entry speed?",
                tips: [
                    "Mention your typing speed if you know it",
                    "Talk about your accuracy rate",
                ],
                keyWords: ["typing", "speed", "accuracy", "efficient", "practice", "skills", "comfortable", "experience", "keyboard", "productivity"],
                goodFeedback: "Good response! Your focus on balancing speed with accuracy shows you understand the key requirements of data entry work.",
                badFeedback: "It's helpful to mention any typing speed you know (in WPM) or your comfort level with keyboard use. Also emphasize your willingness to improve speed while maintaining accuracy."
            },
            {
                question: "How do you handle monotonous or repetitive tasks?",
                tips: [
                    "Share strategies for maintaining focus",
                    "Mention how you break up the work into manageable chunks",
                    "Talk about setting personal goals",
                    "Highlight your ability to find satisfaction in detail-oriented work",
                    "Describe how you maintain quality over time"
                ],
                keyWords: ["focus", "strategy", "goals", "quality", "consistent", "organized", "efficient", "routine", "satisfaction", "methodical"],
                goodFeedback: "Excellent! Your strategies for maintaining focus and finding satisfaction in detail-oriented work align perfectly with data entry roles.",
                badFeedback: "Consider sharing specific techniques you use to stay engaged during repetitive tasks, such as setting small goals or finding satisfaction in maintaining quality work."
            }
        ]
    },
    'social-media': {
        title: 'Social Media Assistant Interview',
        description: 'Practice answering questions about social media knowledge, content creation, and online trends.',
        questions: [
            {
                question: "Which social media platforms are you most familiar with?",
                tips: [
                    "List the platforms you use regularly",
                    "Mention specific features you're familiar with",
                    "Share your understanding of each platform's audience",
                    "Talk about any content creation experience",
                    "Highlight your ability to adapt to new platforms"
                ],
                keyWords: ["platforms", "content", "experience", "audience", "features", "instagram", "facebook", "twitter", "linkedin", "creation"],
                goodFeedback: "Great answer! Your knowledge of multiple platforms and their different strengths shows you're ready to adapt to various social media strategies.",
                badFeedback: "Try to be more specific about how you use each platform and what types of content work best on each. Personal experience with social media can translate to professional skills."
            },
            {
                question: "How do you stay updated on social media trends?",
                tips: [
                    "Mention specific industry resources you follow",
                    "Talk about social media news sources",
                    "Share how you analyze trends",
                    "Highlight your ability to predict trends",
                    "Describe how you apply trends to content"
                ],
                keyWords: ["trends", "research", "industry", "analytics", "updates", "follow", "monitor", "analyze", "insights", "strategy"],
                goodFeedback: "Excellent! Your proactive approach to following industry trends shows initiative and genuine interest in the field.",
                badFeedback: "Consider mentioning specific resources you follow to stay updated, such as industry blogs, thought leaders, or competitor accounts. This demonstrates your commitment to the field."
            },
            {
                question: "What makes content engaging on social media?",
                tips: [
                    "Talk about the importance of visuals",
                    "Mention the role of storytelling",
                    "Share your understanding of audience engagement",
                    "Highlight the value of authenticity",
                    "Describe how you measure engagement"
                ],
                keyWords: ["engaging", "visuals", "storytelling", "authentic", "audience", "content", "interaction", "creative", "value", "strategy"],
                goodFeedback: "Well done! Your understanding of engagement factors shows you have insight into what resonates with audiences online.",
                badFeedback: "Try to include more specific elements that make content engaging, such as visuals, storytelling, or emotional connections. Examples from your personal experience can strengthen your answer."
            }
        ]
    }
};

export default interviewData;