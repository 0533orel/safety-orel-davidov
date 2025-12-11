export interface SafetyEvent {
    id: number;
    createdAt: number;
    unitName: string;
    description: string;
    eventDate: string;
    eventTime: string;
    location: string;
    result: string;
    injurySeverity?: string;
    unitActivity: string;
    personalActivity: string;
    category: string;
    weather: string;
    eventSeverity: string;
    recommendations: string;
    coordinates?: string;
    imagePath?: string;
    image?: File | null;
    deleteImage?: boolean;
}