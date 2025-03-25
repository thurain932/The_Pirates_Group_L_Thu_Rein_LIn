import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot } from 'lucide-react';
import { supabase } from '../context/AuthContext';
import { useAuth } from '../context/AuthContext';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  image?: string;
}

const AIConsultant = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hello! I'm your AI Packaging Consultant. I can help you find the perfect sustainable packaging solution. Please choose an option:

1. Food & Beverage Packaging Solutions
2. E-commerce & Shipping Solutions
3. Cosmetics & Personal Care Packaging

Consult the Packaging idea with AI Consultant`
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Load existing messages
  useEffect(() => {
    const loadMessages = async () => {
      if (user) {
        const { data, error } = await supabase
          .from('chat_messages')
          .select('message, is_user')
          .eq('user_id', user.id)
          .order('created_at', { ascending: true });

        if (!error && data) {
          const loadedMessages = data.map(msg => ({
            role: msg.is_user ? 'user' as const : 'assistant' as const,
            content: msg.message
          }));
          setMessages(prev => [prev[0], ...loadedMessages]);
        }
      }
    };

    loadMessages();
  }, [user]);

  const getResponse = (query: string): Message => {
    const queryLower = query.toLowerCase();

    // Response for option 1 - Food & Beverage
    if (queryLower === "1") {
      return {
        role: 'assistant',
        content: `Here are biodegradable packaging solutions for food and beverages:

1. Sugarcane Bagasse Containers
   • Material: Made from sugarcane pulp, fully compostable
   • Best for: Hot foods, soups, takeaway meals
   • Features: Microwave-safe, grease-resistant

2. PLA-lined Paper Cups & Bowls
   • Material: Paper with plant-based PLA lining
   • Best for: Hot/cold beverages, salads
   • Features: Leak-proof, heat-resistant

3. Bamboo-based Packaging
   • Material: Bamboo fiber & pulp
   • Best for: Premium food presentation
   • Features: Natural antibacterial properties

Would you like specific details about:
A) Pricing and bulk orders
B) Custom sizes and branding
C) Material certifications

Please type A, B, or C for more information.`
      };
    }

    // Response for option 2 - E-commerce
    if (queryLower === "2") {
      return {
        role: 'assistant',
        content: `Here are sustainable shipping and e-commerce packaging options:

1. Corrugated Mailers
   • Material: 100% recycled corrugated cardboard
   • Sizes: Small (6x9"), Medium (9x12"), Large (12x15.5")
   • Features: Self-sealing, water-resistant

2. Kraft Paper Padded Mailers
   • Material: Recycled kraft paper with paper padding
   • Best for: Non-fragile items
   • Features: Plastic-free, curbside recyclable

3. Honeycomb Wrap
   • Material: Recycled paper in honeycomb structure
   • Best for: Fragile item protection
   • Features: Replaces bubble wrap, fully recyclable

Would you like specific details about:
A) Volume pricing
B) Custom printing options
C) International shipping compatibility

Please type A, B, or C for more information.`
      };
    }

    // Response for option 3 - Cosmetics
    if (queryLower === "3") {
      return {
        role: 'assistant',
        content: `Here are eco-friendly cosmetics and personal care packaging solutions:

1. Glass Containers
   • Material: Recycled glass with bamboo caps
   • Best for: Creams, serums, oils
   • Features: Premium look, infinitely recyclable

2. Biodegradable Tubes
   • Material: Sugarcane-based PE
   • Best for: Lotions, gels, toothpaste
   • Features: Bio-based, recyclable

3. Paper-based Packaging
   • Material: FSC-certified paper with bio-coating
   • Best for: Soap bars, solid cosmetics
   • Features: Water-resistant, plastic-free

Would you like specific details about:
A) Minimum order quantities
B) Custom design options
C) Material safety certifications

Please type A, B, or C for more information.`
      };
    }

    // Response for option A (Pricing)
    if (queryLower === "a") {
      return {
        role: 'assistant',
        content: `Here's our pricing structure:

• Small orders (100-500 units): MMK 50,000-100,000 per 100 units
• Medium orders (501-2000 units): MMK 45,000-90,000 per 100 units
• Large orders (2000+ units): Custom bulk pricing

Benefits of bulk ordering:
✓ Volume discounts
✓ Priority production
✓ Free shipping on orders over MMK 1,000,000

Would you like to:
1. Get a custom quote
2. See sample costs
3. Speak with a sales representative

Please type 1, 2, or 3 to proceed.`
      };
    }

    // Response for option B (Custom)
    if (queryLower === "b") {
      return {
        role: 'assistant',
        content: `Here are our customization options:

1. Branding Options:
   • Logo printing (up to 4 colors)
   • Custom patterns and designs
   • Embossing/debossing available

2. Size Customization:
   • Custom dimensions available
   • MOQ: 1000 units for custom sizes
   • Sample development available

3. Design Services:
   • Free basic design consultation
   • Professional design service available
   • 3D mockup visualization

Would you like to:
1. See design templates
2. Request a custom quote
3. Schedule a design consultation

Please type 1, 2, or 3 to proceed.`
      };
    }

    // Response for option C (Certifications)
    if (queryLower === "c") {
      return {
        role: 'assistant',
        content: `Our packaging meets the following certifications:

1. Environmental Certifications:
   • Biodegradable Products Institute (BPI)
   • EN 13432 Compostability
   • FSC (Forest Stewardship Council)

2. Food Safety Certifications:
   • FDA approved materials
   • EU 10/2011 compliance
   • ISO 22000 certified production

3. Quality Standards:
   • ISO 9001:2015
   • GMP certified facilities
   • REACH compliant

Would you like to:
1. View certification documents
2. Learn about testing procedures
3. Discuss compliance requirements

Please type 1, 2, or 3 to proceed.`
      };
    }

    // Default response for other queries
    return {
      role: 'assistant',
      content: `I can help you find the perfect sustainable packaging solution. Please choose from these options:

1. Food & Beverage Packaging Solutions
2. E-commerce & Shipping Solutions
3. Cosmetics & Personal Care Packaging

Please type the number (1, 2, or 3) of your choice.`
    };
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message.trim();
    setMessage('');
    
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = getResponse(userMessage);
      
      setMessages(prev => [...prev, response]);

      if (user) {
        try {
          await supabase
            .from('chat_messages')
            .insert([
              { message: userMessage, is_user: true, user_id: user.id },
              { message: response.content, is_user: false, user_id: user.id }
            ]);
        } catch (error) {
          console.error('Failed to save messages:', error);
        }
      }

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Packaging Consultant</h1>
          <p className="text-xl max-w-2xl">
            Get expert advice on sustainable packaging solutions powered by advanced AI technology.
          </p>
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[600px] overflow-y-auto p-6 bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center mr-2">
                      <Bot className="h-5 w-5" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-green-600 text-white'
                        : 'bg-white shadow-md'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                    {msg.image && (
                      <img 
                        src={msg.image} 
                        alt="Concept sketch" 
                        className="mt-4 rounded-lg w-full"
                      />
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center mr-2">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t">
              <form onSubmit={handleSendMessage}>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ask about sustainable packaging solutions or describe your needs..."
                    className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 disabled:bg-green-400 flex items-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIConsultant;