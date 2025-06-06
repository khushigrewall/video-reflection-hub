
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Heart, Save, Lightbulb, Calendar, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const JournalingSection = () => {
  const [journalText, setJournalText] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const dailyPrompts = [
    "What brought you joy today?",
    "What challenge helped you grow?", 
    "What moment felt magical today?",
    "What are you grateful for right now?",
    "What made your heart feel full?",
    "What did you learn about yourself today?",
    "What small victory can you celebrate?",
    "What surprised you today?"
  ];

  const todaysPrompt = dailyPrompts[Math.floor(Math.random() * dailyPrompts.length)];

  const handleSaveEntry = async () => {
    if (!journalText.trim()) {
      toast({
        title: "Write something first ✨",
        description: "Share your thoughts before saving your journal entry.",
        variant: "destructive"
      });
      return;
    }

    setIsSaving(true);
    
    // Simulate saving to database
    setTimeout(() => {
      setIsSaving(false);
      setJournalText('');
      toast({
        title: "Entry saved! 📝",
        description: "Your authentic thoughts have been recorded for this week's video.",
      });
    }, 1500);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-rose-50 border border-rose-200 rounded-full px-4 py-2 mb-6">
          <Heart className="w-4 h-4 text-rose-600 mr-2" />
          <span className="text-rose-700 font-inter text-sm font-medium">Today's Journal</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-inter font-bold text-rose-900 mb-4">
          Capture Your Day
        </h2>
        <p className="text-xl text-rose-700 font-inter max-w-3xl mx-auto font-light">
          Document your authentic thoughts and experiences. After 7 days of consistent journaling, 
          we'll analyze your entries and create a personalized video summary.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Writing Stats */}
        <div className="space-y-6">
          <Card className="bg-white/70 backdrop-blur-sm border-rose-200 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-5 h-5 text-rose-600" />
              <h3 className="text-rose-900 font-inter font-semibold">This Week</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-rose-600 font-inter">Days Completed</span>
                <span className="text-rose-900 font-semibold">6/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-rose-600 font-inter">Total Words</span>
                <span className="text-rose-900 font-semibold">2,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-rose-600 font-inter">Avg. Entry Length</span>
                <span className="text-rose-900 font-semibold">474 words</span>
              </div>
            </div>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-rose-200 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="w-5 h-5 text-purple-600" />
              <h3 className="text-rose-900 font-inter font-semibold">Quick Tips</h3>
            </div>
            <ul className="space-y-2 text-rose-600 font-inter text-sm">
              <li>• Write for at least 5 minutes</li>
              <li>• Be honest about your feelings</li>
              <li>• Include specific details</li>
              <li>• Don't worry about grammar</li>
            </ul>
          </Card>
        </div>

        {/* Main Journal Editor */}
        <div className="lg:col-span-2">
          <Card className="bg-white/70 backdrop-blur-sm border-rose-200 p-8 rounded-2xl shadow-sm">
            {/* Daily Prompt */}
            <div className="mb-6 p-6 bg-gradient-to-r from-rose-50 to-purple-50 rounded-xl border border-rose-100">
              <div className="flex items-center space-x-2 mb-3">
                <Lightbulb className="w-5 h-5 text-rose-600" />
                <span className="text-rose-700 font-inter font-medium">Today's reflection prompt</span>
              </div>
              <p className="text-rose-800 font-inter text-lg italic font-light">
                "{todaysPrompt}"
              </p>
            </div>

            {/* Journal Text Area */}
            <div className="mb-6">
              <Textarea
                value={journalText}
                onChange={(e) => setJournalText(e.target.value)}
                placeholder="Start writing your thoughts here... What's on your mind today?"
                className="min-h-[400px] bg-white/80 border-rose-200 text-rose-800 placeholder:text-rose-400 font-inter text-lg leading-relaxed resize-none focus:bg-white transition-all duration-200 rounded-xl p-6"
              />
              <div className="mt-3 flex justify-between items-center">
                <span className="text-rose-500 text-sm font-inter">
                  {journalText.length} characters • {Math.round(journalText.split(' ').length)} words
                </span>
                <span className="text-rose-500 text-sm font-inter">
                  Est. reading time: {Math.ceil(journalText.split(' ').length / 200)} min
                </span>
              </div>
            </div>

            {/* Save Entry Button */}
            <div className="text-center">
              <Button
                onClick={handleSaveEntry}
                disabled={isSaving}
                className="bg-gradient-to-r from-rose-500 to-purple-500 hover:from-rose-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-inter font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Saving your authentic thoughts...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5 mr-3" />
                    Save Today's Entry
                  </>
                )}
              </Button>
              
              {isSaving && (
                <p className="text-rose-600 text-sm font-inter mt-3 font-light">
                  Recording your genuine experiences for AI analysis ✨
                </p>
              )}
            </div>

            {/* Info about video generation */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Heart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-blue-900 font-inter font-semibold mb-2">How Your Video is Created</h4>
                  <p className="text-blue-700 font-inter text-sm leading-relaxed">
                    Complete 7 days of authentic journaling and our AI will analyze your entries for emotional patterns, 
                    growth moments, and key insights. Your video will be based entirely on YOUR words and experiences - 
                    not AI-generated content. Every video is as unique as your personal journey.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JournalingSection;
