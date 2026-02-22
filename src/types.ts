export interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  image: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  hotels?: string[];
  activities: string[];
  image: string;
}
