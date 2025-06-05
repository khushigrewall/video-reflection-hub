
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Sparkles, Video, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const JournalingSection = () => {
  const [journalText, setJournalText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const dailyPrompts = [
    "What made you smile today?",
    "What challenge helped you grow today?", 
    "What moment felt like pure magic?",
    "What are you proud of yourself for today?",
    "What made your heart feel full today?"
  ];

  const todaysPrompt = dailyPrompts[Math.floor(Math.random() * dailyPrompts.length)];

  const handleGenerateVideo = async () => {
    if (!journalText.trim()) {
      toast({
        title: "Write something first ✨",
        description: "Share your thoughts before creating your video memory.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Creating your video! 🎬",
        description: "Your reflection is being transformed into a beautiful memory.",
      });
    }, 2000);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-inter font-light text-slate-700 mb-4">
          Today's Reflection
        </h2>
        <p className="text-slate-600 text-lg font-inter max-w-2xl mx-auto font-light">
          A safe space for your thoughts, feelings, and moments that matter
        </p>
      </div>

      <Card className="bg-white/70 backdrop-blur-sm border-slate-200 p-8 rounded-2xl shadow-sm">
        {/* Daily Prompt */}
        <div className="mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center space-x-2 mb-2">
            <Heart className="w-5 h-5 text-slate-500" />
            <span className="text-slate-600 font-inter font-medium">Today's gentle prompt</span>
          </div>
          <p className="text-slate-700 font-inter italic font-light">
            "{todaysPrompt}"
          </p>
        </div>

        {/* Journal Text Area */}
        <div className="mb-6">
          <Textarea
            value={journalText}
            onChange={(e) => setJournalText(e.target.value)}
            placeholder="Let your thoughts flow here..."
            className="min-h-[300px] bg-white/50 border-slate-200 text-slate-700 placeholder:text-slate-400 font-inter text-lg leading-relaxed resize-none focus:bg-white/70 transition-all duration-200 rounded-xl"
          />
          <div className="mt-2 text-right">
            <span className="text-slate-400 text-sm font-inter font-light">
              {journalText.length} characters
            </span>
          </div>
        </div>

        {/* Generate Video Button */}
        <div className="text-center">
          <Button
            onClick={handleGenerateVideo}
            disabled={isGenerating}
            className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-6 text-lg font-inter font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Creating your memory...
              </>
            ) : (
              <>
                <Sparkles className="w-6 h-6 mr-3" />
                Transform into Video
              </>
            )}
          </Button>
          
          {isGenerating && (
            <p className="text-slate-500 text-sm font-inter mt-3 animate-fade-in font-light">
              This magical process takes a few moments ✨
            </p>
          )}
        </div>
      </Card>
    </section>
  );
};

export default JournalingSection;
