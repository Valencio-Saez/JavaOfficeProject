import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Event {
  eventId: number;
  title: string;
  description: string;
  location: string;
  eventDate: string;
  startTime: string;
  endTime: string;
}

interface EventContextType {
  event: Event;
  setEvent: (event: Event) => void;
}

const defaultEvent: Event = {
  eventId: 0,
  title: '',
  description: '',
  location: '',
  eventDate: '',
  startTime: '',
  endTime: ''
};

const EventContext = createContext<EventContextType>({
  event: defaultEvent,
  setEvent: () => {}
});

export const useEvent = () => useContext(EventContext);

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [event, setEvent] = useState<Event>(defaultEvent);

  return (
    <EventContext.Provider value={{ event, setEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventContext;