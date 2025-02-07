import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function Portfolio() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
        <CardDescription>Your investment and health portfolio overview.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium">Total Investments: $10,000</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium">Health Goals: Achieved 75%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}