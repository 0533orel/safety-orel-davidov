
export interface SafetyEvent {
    unitName: string;
    description: string;
    eventDate: string;
    location: string;
    result: string;
    injurySeverity?: string;
    unitActivity: string;
    personalActivity: string;
    category: string;
    weather: string;
    eventSeverity: string;
    recommendations: string;
}
