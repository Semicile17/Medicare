import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function MedicalHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Medical History</CardTitle>
        <CardDescription>Your past medical records and history.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium">Allergies: None</p>
          </div>
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium">Chronic Conditions: None</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}