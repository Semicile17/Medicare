import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function HealthReports() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Reports</CardTitle>
        <CardDescription>Your recent health reports and metrics.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium">Blood Pressure: 120/80 mmHg</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium">Heart Rate: 72 BPM</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}