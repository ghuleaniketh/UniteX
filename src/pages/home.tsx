// src/pages/home.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Bell, Upload, Search, Play, Tag as TagIcon } from "lucide-react";

type Topic = { name: string; posts: string };
type Creator = { name: string; role: string; followers: string };

const topics: Topic[] = [
  { name: "React 19", posts: "1.2K posts" },
  { name: "AI Development", posts: "2.8K posts" },
  { name: "Web3", posts: "945 posts" },
  { name: "Next.js", posts: "1.8K posts" },
  { name: "TypeScript", posts: "3.1K posts" },
];

const creators: Creator[] = [
  { name: "John Doe", role: "Frontend", followers: "45.2K" },
  { name: "Jane Smith", role: "Backend", followers: "38.7K" },
  { name: "Bob Wilson", role: "Mobile", followers: "29.4K" },
];

export default function Home() {
  const [tab, setTab] = useState("for-you");

  return (
    <>
      <Header />

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[1fr_320px]">
        <section>
          <Tabs value={tab} onValueChange={setTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="for-you">For You</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
              <TabsTrigger value="latest">Latest</TabsTrigger>
            </TabsList>

            <TabsContent value="for-you" className="mt-4 space-y-6">
              <FeedCard />
              <FeedCard compact />
            </TabsContent>

            <TabsContent value="following" className="mt-4">
              <EmptyState title="No new posts from creators you follow yet." />
            </TabsContent>

            <TabsContent value="latest" className="mt-4">
              <FeedCard />
            </TabsContent>
          </Tabs>
        </section>

        <aside className="space-y-6">
          <TrendingTopics />
          <FeaturedCreators />
        </aside>
      </main>
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
        <div className="flex items-center gap-2 font-semibold">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-slate-900 text-white">
            DV
          </div>
          <span>DevVault</span>
        </div>

        <div className="mx-auto hidden w-full max-w-xl md:block">
          <div className="relative">
            <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input className="w-full pl-8" placeholder="Search videos, notes, developers..." />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="icon" aria-label="Upload">
            <Upload className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="relative" aria-label="Notifications">
            <Bell className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 h-4 min-w-4 rounded-full bg-red-500 px-1 text-[10px] leading-4 text-white">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}

function FeedCard({ compact = false }: { compact?: boolean }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-start gap-3 p-4">
        <div className="h-8 w-8 shrink-0 rounded-full bg-slate-200" />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <span className="font-medium text-slate-700">Sarah Johnson</span>
            <span>• 12.4K followers</span>
            <span>• 2 days ago</span>
          </div>
          <h2 className="mt-1 text-lg font-semibold">
            Building Scalable React Applications with TypeScript
          </h2>
          {!compact && (
            <p className="mt-1 text-slate-600">
              Learn how to build scalable React applications using TypeScript, best practices, and modern development tools.
            </p>
          )}
        </div>
        <Button variant="outline" size="sm">Follow</Button>
      </div>

      <div className="relative bg-slate-100">
        <div className="mx-auto grid aspect-video max-w-4xl place-items-center">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-white shadow">
            <Play className="h-7 w-7 text-slate-700" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">24:15</div>
      </div>

      <div className="flex flex-wrap items-center gap-2 p-4 text-xs">
        <TagPill label="React" />
        <TagPill label="TypeScript" />
        <TagPill label="Web Development" />
      </div>

      <div className="flex items-center justify-between border-t px-4 py-3 text-sm text-slate-600">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 21s-7-4.35-7-10a7 7 0 1 1 14 0c0 5.65-7 10-7 10z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            45.2K views
          </span>
          <span>1240 likes</span>
          <span>89 comments</span>
        </div>
        <button className="text-slate-500 hover:text-slate-700">Share</button>
      </div>
    </Card>
  );
}

function TagPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border bg-white px-2 py-1 text-slate-600">
      <TagIcon className="h-3 w-3" /> {label}
    </span>
  );
}

function TrendingTopics() {
  return (
    <Card className="p-4">
      <h3 className="mb-3 text-sm font-semibold text-slate-700">Trending Topics</h3>
      <div className="space-y-3">
        {topics.map((t) => (
          <div key={t.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-slate-100 text-slate-600">#</span>
              <span>{t.name}</span>
            </div>
            <span className="text-slate-500">{t.posts}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function FeaturedCreators() {
  return (
    <Card className="p-4">
      <h3 className="mb-3 text-sm font-semibold text-slate-700">Featured Creators</h3>
      <div className="space-y-3">
        {creators.map((c) => (
          <div key={c.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-slate-200" />
              <div>
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-xs text-slate-500">
                  {c.role} • {c.followers}
                </div>
              </div>
            </div>
            <Button size="sm" variant="outline">
              Follow
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}

function EmptyState({ title }: { title: string }) {
  return <Card className="grid place-items-center p-10 text-sm text-slate-500">{title}</Card>;
}
