'use client';

import { ArrowRight, Monitor, Brain, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="h-screen overflow-hidden relative z-10 bg-gradient-to-br from-primary/10 via-primary/5 to-background flex items-center justify-center">
      <video src="/arbre.mp4" className='absolute z-[-10] object-cover' autoPlay loop muted></video>
        <div className="text-center space-y-6 max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Cleanup Games
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Fight Against Your Bad Online Habits
          </p>
          <Button size="lg" className="mt-8 text-lg group bg-yellow-500">
            Play Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">Transform Your Digital Life</h2>
            <p className="text-lg text-muted-foreground">
            Our game is designed to raise awareness about digital pollution and encourage everyone to take action. By playing, you’ll explore three unique universes, each featuring different gameplay mechanics. Each mini-game will teach you good practices for managing your digital activities all while having fun!
            </p>
            <p className="text-lg text-muted-foreground">
            It is a global initiative raising awareness about the environmental impact of digital activities. Every online action, from sending an email to storing unnecessary files, generates a carbon footprint. This event encourages individuals and businesses to clean up their digital data: delete outdated files, uninstall unused apps, and reduce online storage. Together, we can cut down on digital pollution and contribute to a more sustainable future. Every small action counts for a more responsible digital world!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-16">
        <div className="container mx-auto px-4 space-y-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 aspect-video bg-gradient-to-br from-primary/10 to-primary/5  flex items-center justify-center">
            <img src="/picture_tiles.png" alt="" />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold">PIANO PICTURE</h3>
              <p className="text-muted-foreground">
              You have lots of unnecessary photos, and you should delete them. To delete them, you need to tap the arrows in rhythm to earn points. Be careful if you fail, you will lose points!
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2 aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <img src="/sender.png" alt="alt" />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold">SENDER</h3>
              <p className="text-muted-foreground">
              You are receiving tons of emails, and as a responsible person, you are sorting them. Receive, read, and sort them until you have finished organizing them all. Be careful not to make a mistake!
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 aspect-video bg-gradient-to-br from-primary/10 to-primary/5  flex items-center justify-center">
              <img src="/denys_desktop.png" alt="alt" />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-3xl font-bold">DENYS’S DESKTOP</h3>
              <p className="text-muted-foreground">
              Sort through Denis' computer! 50 files are scattered on the desk, find the Bin, Leisure, Work and Photo folders to put things in order. Just grab the file and drag it into the folder. Each file will earn you 100 point, so make sure you don't make a mistake!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative w-96 h-96 mx-auto mb-8 overflow-hidden">
            <img src="/icon.png" alt="" />
          </div>
          <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">We are working on a sequel !</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          With tons of new features, including new games like Mails Invaders,Streaming Efficiency, Green Network Defender or Social Media Detox. The game will also be translat into Spanish, German, and French, and a global release is foreseen on the Apple Store and Play Store.
          </p>
        </div>
        </div>
      </section>
    </main>
  );
}