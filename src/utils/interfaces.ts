export interface IEvent {
    id?: number;
    title: string;
    hosted_by: number;
    thumbnail_url: string;
    banner_url: string;
    ticket_price: number;
    tax_percet: '2.5' | '5' | '9';
    capacity: number;
    is_taxable: boolean;
    max_tickets_available: number;
    genre: 'Comedy' | 'Music' | 'Dance' | 'Gaming' | 'Theatre & Art' | 'Workshops' | 'Health & Wellness' | 'Kids' | 'Talks';
    date_of_event: Date;
    duration: number;
    time_of_event: string;
    payment_status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
    createdAt?: Date;
    updatedAt?: Date;
  }
  