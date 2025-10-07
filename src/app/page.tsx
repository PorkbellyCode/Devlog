import { Card, CardContent, CardHeader} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Devlog</h1>
          <nav className="flex items-center gap-4">
            <ul className="flex space-x-2">
              <li><Button variant="ghost" asChild><a href="#">Home</a></Button></li>
              <li><Button variant="ghost" asChild><a href="#">About</a></Button></li>
              <li><Button variant="ghost" asChild><a href="#">Posts</a></Button></li>
              <li><Button variant="ghost" asChild><a href="#">Contact</a></Button></li>
            </ul>
            <ThemeToggle />
          </nav>
        </div>
      </header>

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
