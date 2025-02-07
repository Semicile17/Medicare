import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ConsultDoctor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Consult a Doctor</CardTitle>
        <CardDescription>Schedule an appointment with a doctor.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="font-medium">Available Doctors:</p>
            <ul className="mt-2 space-y-2">
              <li>Dr. John Doe (Cardiologist)</li>
              <li>Dr. Jane Smith (Dermatologist)</li>
            </ul>
          </div>
          <Button className="w-full">Schedule Appointment</Button>
        </div>
      </CardContent>
    </Card>
  );
}