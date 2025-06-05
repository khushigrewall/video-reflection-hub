
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Sparkles, Video } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const JournalingSection = () => {
  const [journalText, setJournalText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const dailyPrompts = [
    "What made you feel grateful today?",
    "What challenge did you overcome today?", 
    "What moment brought you the most joy?",
    "What did you learn about yourself today?",
    "What are you looking forward to tomorrow?"
  ];

  const todaysPrompt = dailyPrompts[Math.floor(Math.random() * dailyPrompts.length)];

  const handleGenerateVideo = async () => {
    if (!journalText.trim()) {
      toast({
        title: "Please write something first",
        description: "Add some thoughts to your journal before generating a video.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Video generation started!",
        description: "Your AI video is being created. Check your email shortly for the result.",
      });
    }, 2000);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-inter font-bold text-white mb-4">
          Write Today's Reflection
        </h2>
        <p className="text-white/80 text-lg font-inter max-w-2xl mx-auto">
          Capture your thoughts, feelings, and experiences. Our AI will transform them into a beautiful video memory.
        </p>
      </div>

      <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 rounded-2xl shadow-2xl">
        {/* Daily Prompt */}
        <div className="mb-6 p-4 bg-white/10 rounded-xl border border-white/20">
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white/90 font-inter font-medium">Today's Prompt</span>
          </div>
          <p className="text-white/80 font-inter italic">
            "{todaysPrompt}"
          </p>
        </div>

        {/* Journal Text Area */}
        <div className="mb-6">
          <Textarea
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
            placeholder="Start typing your thoughts here..."
            className="min-h-[300px] bg-white/10 border-white/20 text-white placeholder:text-white/50 font-inter text-lg leading-relaxed resize-none focus:bg-white/15 transition-all duration-200"
          />
          <div className="mt-2 text-right">
            <span className="text-white/50 text-sm font-inter">
              {journalText.length} characters
            </span>
          </div>
        </div>

        {/* Generate Video Button */}
        <div className="text-center">
          <Button
            onClick={handleGenerateVideo}
            disabled={isGenerating}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg font-inter font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Generating Video...
              </>
            ) : (
              <>
                <Video className="w-6 h-6 mr-3" />
                Generate Video Summary
              </>
            )}
          </Button>
          
          {isGenerating && (
            <p className="text-white/70 text-sm font-inter mt-3 animate-fade-in">
              This may take a few moments. You'll receive an email when ready!
            </p>
          )}
        </div>
      </Card>
    </section>
  );
};

export default JournalingSection;
