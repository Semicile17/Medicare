import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function MyReports() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Reports</CardTitle>
        <CardDescription>View and manage your medical reports.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium">Blood Test Report: Normal</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium">X-Ray Report: Clear</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}