"use client";

import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import {
  Eventcalendar,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource,
  setOptions,
} from "@mobiscroll/react";
import { FC, useMemo } from "react";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

const App: FC = () => {
  const myView = useMemo<MbscEventcalendarView>(
    () => ({
      timeline: {
        type: "month",
      },
    }),
    []
  );

  const myEvents = useMemo<MbscCalendarEvent[]>(
    () => [
      {
        start: "2024-11-02T00:00",
        end: "2024-11-05T00:00",
        title: "Event 1",
        resource: 1,
      },
      {
        start: "2024-11-10T09:00",
        end: "2024-11-15T15:00",
        title: "Event 2",
        resource: 3,
      },
      {
        start: "2024-11-12T00:00",
        end: "2024-11-14T00:00",
        title: "Event 3",
        resource: 4,
      },
      {
        start: "2024-11-15T07:00",
        end: "2024-11-20T12:00",
        title: "Event 4",
        resource: 5,
      },
      {
        start: "2024-11-03T00:00",
        end: "2024-11-10T00:00",
        title: "Event 5",
        resource: 6,
      },
      {
        start: "2024-11-10T08:00",
        end: "2024-11-11T20:00",
        title: "Event 6",
        resource: 7,
      },
      {
        start: "2024-11-22T00:00",
        end: "2024-11-28T00:00",
        title: "Event 7",
        resource: 7,
      },
      {
        start: "2024-11-08T00:00",
        end: "2024-11-13T00:00",
        title: "Event 8",
        resource: 15,
      },
      {
        start: "2024-11-25T00:00",
        end: "2024-11-27T00:00",
        title: "Event 9",
        resource: 10,
      },
      {
        start: "2024-11-20T00:00",
        end: "2024-11-23T00:00",
        title: "Event 10",
        resource: 12,
      },
    ],
    []
  );

  const myResources = useMemo<MbscResource[]>(
    () => [
      {
        id: 1,
        name: "Resource A",
        color: "#e20000",
      },
      {
        id: 2,
        name: "Resource B",
        color: "#76e083",
      },
      {
        id: 3,
        name: "Resource C",
        color: "#4981d6",
      },
      {
        id: 4,
        name: "Resource D",
        color: "#e25dd2",
      },
      {
        id: 5,
        name: "Resource E",
        color: "#1dab2f",
      },
      {
        id: 6,
        name: "Resource F",
        color: "#d6d145",
      },
      {
        id: 7,
        name: "Resource G",
        color: "#34c8e0",
      },
      {
        id: 8,
        name: "Resource H",
        color: "#9dde46",
      },
      {
        id: 9,
        name: "Resource I",
        color: "#166f6f",
      },
      {
        id: 10,
        name: "Resource J",
        color: "#f7961e",
      },
      {
        id: 11,
        name: "Resource K",
        color: "#34c8e0",
      },
      {
        id: 12,
        name: "Resource L",
        color: "#af0000",
      },
      {
        id: 13,
        name: "Resource M",
        color: "#446f1c",
      },
      {
        id: 14,
        name: "Resource N",
        color: "#073138",
      },
      {
        id: 15,
        name: "Resource O",
        color: "#4caf00",
      },
    ],
    []
  );

  return (
    <Eventcalendar
      clickToCreate={true}
      dragToCreate={true}
      dragToMove={true}
      dragToResize={true}
      eventDelete={true}
      view={myView}
      data={myEvents}
      resources={myResources}
    />
  );
};
export default App;
