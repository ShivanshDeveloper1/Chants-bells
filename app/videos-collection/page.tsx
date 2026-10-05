import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const videoPackages = [
  {
    id: "pkg_1",
    title: "Navratri Complete Video Series",
    price: "₹999",
    duration: "9 Videos • 4.5 Hours total",
    thumbnail: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "pkg_2",
    title: "Day 1: Kalash Sthapana Guide",
    price: "₹299",
    duration: "1 Video • 45 Minutes",
    thumbnail: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80"
  }
];

export default function VideoCollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 py-20">
        <Container>
          <Reveal>
            <h1 className="text-4xl font-serif mb-4">Premium Puja Videos</h1>
            <p className="text-muted mb-12 max-w-2xl">
              Purchase lifetime access to high-quality, professionally recorded puja tutorials. Watch on any device, at your own pace.
            </p>
            
            <div className="grid gap-10 md:grid-cols-2">
              {videoPackages.map((pkg) => (
                <div key={pkg.id} className="group overflow-hidden rounded-2xl border border-border/70">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${pkg.thumbnail})` }}
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {/* Play Icon Graphic */}
                      <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-2" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Details & Purchase */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-medium mb-1">{pkg.title}</h3>
                        <p className="text-sm text-muted">{pkg.duration}</p>
                      </div>
                      <p className="text-lg font-semibold text-gold">{pkg.price}</p>
                    </div>
                    {/* In a real app, this button triggers your payment gateway */}
                    <Button className="w-full">
                      Purchase Access to Watch
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </main>
      <Footer />
    </>
  );
}