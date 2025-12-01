import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * Color Palette Showcase Component
 * 
 * This component displays all the colors from the Starry Night Soft Gradient palette
 * for easy reference and testing. Remove this file after reviewing the palette.
 * 
 * Reference: https://gradientshub.com/freebies/gradients/46-starry-night-soft-gradient/
 */
export function ColorPaletteShowcase() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-foreground">
            🌌 Starry Night Soft Gradient
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A sophisticated color system inspired by cosmic beauty, featuring elegant blue, 
            indigo, violet, and purple tones that create depth and professional elegance.
          </p>
          <a 
            href="https://gradientshub.com/freebies/gradients/46-starry-night-soft-gradient/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-primary hover:text-primary/80 underline"
          >
            View Original Gradient Reference →
          </a>
        </div>

        {/* Buttons Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="default" disabled>Disabled Button</Button>
          </div>
        </section>

        {/* Badges Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Badges & Tags</h2>
          <div className="flex flex-wrap gap-3">
            <Badge>Default Badge</Badge>
            <Badge variant="secondary">Secondary Badge</Badge>
            <Badge variant="outline">Outline Badge</Badge>
            <Badge variant="destructive">Error Badge</Badge>
            <Badge className="bg-chart-1">Chart Color 1</Badge>
            <Badge className="bg-chart-2">Chart Color 2</Badge>
            <Badge className="bg-chart-3">Chart Color 3</Badge>
            <Badge className="bg-chart-4">Chart Color 4</Badge>
            <Badge className="bg-chart-5">Chart Color 5</Badge>
          </div>
        </section>

        {/* Cards Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>A standard card with default styling</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This card uses the default card background color from the palette.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-primary">Primary Accent</CardTitle>
                <CardDescription>Card with primary color border</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Highlighted with burnt orange primary accent color.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent">
              <CardHeader>
                <CardTitle className="text-accent">Accent Color</CardTitle>
                <CardDescription>Card with accent color border</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Using the vibrant orange accent color for emphasis.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Color Swatches */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Color Swatches</h2>
          
          <div className="space-y-8">
            {/* Primary Colors */}
            <div>
              <h3 className="text-xl font-medium mb-4 text-foreground">Primary & Accent</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="h-24 bg-primary rounded-lg shadow-md flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">Primary</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Rich Indigo</p>
                  <code className="text-xs">hsl(260, 70%, 55%)</code>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-accent rounded-lg shadow-md flex items-center justify-center">
                    <span className="text-accent-foreground font-semibold">Accent</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Vibrant Violet</p>
                  <code className="text-xs">hsl(280, 65%, 60%)</code>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-secondary rounded-lg shadow-md flex items-center justify-center">
                    <span className="text-secondary-foreground font-semibold">Secondary</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Light Blue-Gray</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-muted rounded-lg shadow-md flex items-center justify-center">
                    <span className="text-muted-foreground font-semibold">Muted</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Subtle Blue-Gray</p>
                </div>
              </div>
            </div>

            {/* Chart Colors */}
            <div>
              <h3 className="text-xl font-medium mb-4 text-foreground">Chart & Data Visualization</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="space-y-2">
                    <div 
                      className={`h-24 bg-chart-${num} rounded-lg shadow-md flex items-center justify-center`}
                      style={{ backgroundColor: `hsl(var(--chart-${num}))` }}
                    >
                      <span className="text-white font-semibold text-sm">Chart {num}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Data Set {num}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backgrounds */}
            <div>
              <h3 className="text-xl font-medium mb-4 text-foreground">Backgrounds</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="h-24 bg-background border border-border rounded-lg shadow-md flex items-center justify-center">
                    <span className="text-foreground font-semibold">Background</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Page Background</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-card border-card-border border rounded-lg shadow-md flex items-center justify-center">
                    <span className="text-card-foreground font-semibold">Card</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Card Background</p>
                </div>
                <div className="space-y-2">
                  <div className="h-24 bg-popover border-popover-border border rounded-lg shadow-md flex items-center justify-center">
                    <span className="text-popover-foreground font-semibold">Popover</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Popover Background</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gradients */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Gradient Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-48 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl"
                 style={{ background: 'linear-gradient(135deg, hsl(245, 50%, 20%) 0%, hsl(260, 45%, 25%) 35%, hsl(270, 40%, 30%) 65%, hsl(280, 35%, 35%) 100%)' }}>
              Starry Night Hero
            </div>
            <div className="h-48 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-2xl"
                 style={{ background: 'linear-gradient(135deg, hsl(260, 70%, 55%) 0%, hsl(270, 65%, 58%) 100%)' }}>
              Button Gradient
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Typography</h2>
          <div className="space-y-4 bg-card p-8 rounded-lg border-card-border border">
            <h1 className="text-5xl font-bold text-foreground">Heading 1 - Bold</h1>
            <h2 className="text-4xl font-semibold text-foreground">Heading 2 - Semibold</h2>
            <h3 className="text-3xl font-medium text-foreground">Heading 3 - Medium</h3>
            <p className="text-lg text-foreground">
              Body text in large size. The warm brown foreground color provides excellent readability.
            </p>
            <p className="text-base text-foreground">
              Regular body text size with proper contrast ratio for accessibility.
            </p>
            <p className="text-sm text-muted-foreground">
              Small text and captions using muted foreground for less emphasis.
            </p>
          </div>
        </section>

        {/* Interactive States */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-foreground">Interactive States</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover-elevate cursor-pointer transition-all">
              <CardHeader>
                <CardTitle>Hover Me</CardTitle>
                <CardDescription>Card with hover elevation effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hover over this card to see the elevation effect in action.
                </p>
              </CardContent>
            </Card>

            <Card className="active-elevate cursor-pointer transition-all">
              <CardHeader>
                <CardTitle>Click Me</CardTitle>
                <CardDescription>Card with active elevation effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Click this card to see the active state elevation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-primary">Focus State</CardTitle>
                <CardDescription>Primary accent with shadow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This card demonstrates focus and attention states.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center py-12 border-t border-border">
          <p className="text-muted-foreground">
            This showcase demonstrates the complete Starry Night Soft Gradient palette. 
            <br />
            See <code className="text-primary">COLOR_PALETTE.md</code> for detailed specifications and usage guidelines.
            <br />
            <a 
              href="https://gradientshub.com/freebies/gradients/46-starry-night-soft-gradient/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 underline mt-2 inline-block"
            >
              Original gradient reference on GradientsHub
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default ColorPaletteShowcase;

