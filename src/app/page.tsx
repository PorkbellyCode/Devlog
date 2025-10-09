import { Card, CardContent, CardHeader} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto flex-grow p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Post List Section */}
        <section className="md:col-span-2">
          <h2 className="text-3xl font-semibold mb-4">Latest Posts</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Post Title 1</h3>
                <p className="text-muted-foreground text-sm">Date | Category</p>
              </CardHeader>
              <CardContent>
                <p className="mt-2">Short description of the post...</p>
                <Button variant="link" asChild>
                  <a href="#">Read More</a>
                </Button>
              </CardContent>
            </Card>
            {/* More posts... */}
          </div>
        </section>

        {/* Sidebar */}
        <aside className="md:col-span-1 bg-card p-6 rounded-xl border shadow-sm">
          {/* ...생략 */}
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Devlog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  
  );
}
