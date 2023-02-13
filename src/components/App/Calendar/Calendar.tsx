import React, { useEffect, useState } from "react";
import { Breadcrumb, Card, Col, Row } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
export function Calendar (){
  let eventGuid = 0;
  let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
  const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: "Meeting",
      start: todayStr,
    },
    {
      id: createEventId(),
      title: "Meeting Time",
      start: todayStr + "T16:00:00",
    },
  ];

  function createEventId() {
    return String(eventGuid++);
  }
  const initialstate1 = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: new Date("2019-04-04 00:00"),
        id: "1001",
      },
      {
        title: "My Favorite Murder",
        start: new Date("2019-04-05 00:00"),
        id: "1002",
      },
    ],

    events: [
      {
        title: "My Event 1",
        id: "1",
        bg: "bg-primary",
        border: "border-primary",
      },
      {
        title: "My Event 2",
        id: "2",
        bg: " bg-secondary",
        border: "border-success",
      },
      {
        title: "My Event 3",
        id: "3",
        bg: "bg-warning",
        border: "border-warning",
      },
      { title: "My Event 4", id: "4", bg: "bg-info", border: "border-info" },
      {
        title: "My Event 5",
        id: "5",
        bg: "bg-success",
        border: "border-success",
      },
      {
        title: "My Event 6",
        id: "6",
        bg: "bg-danger",
        border: "border-danger",
      },
    ],
  };
  const [state] = useState(initialstate1);

  useEffect(() => {
    let draggableEl:any = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        let classValue = eventEl.getAttribute("class");
        return {
          title: title,
          id: id,
          className: classValue,
        };
      },
    });
  }, []);

  function renderEventContent(eventInfo:any) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  const handleEventClick = (clickInfo:any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };
  const handleEvents = (events:any) => {};

  const handleDateSelect = (selectInfo:any) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };
  return (
    <div>
      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">CALENDAR</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#">
              Apps
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Calendar
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      <div className="pd-b-0  main-content-calendar pt-0">
        {/* <!-- Row --> */}
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header>
                <h3 className="card-title">
                  Calender With different Color Events
                </h3>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={12} sm={12} lg={3}>
                    <div id="external-events">
                      <h4>Draggable Events</h4>
                      {state.events.map((event:any) => (
                        <div
                          className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event ${event.bg} ${event.border}`}
                          title={event.title}
                          key={event.id}
                        >
                          <div className="fc-event-main">{event.title}</div>
                        </div>
                      ))}
                    </div>
                    <div></div>
                  </Col>
                  <Col md={12} lg={9}>
                    <div id="calendar2">
                      <FullCalendar
                        plugins={[
                          dayGridPlugin,
                          timeGridPlugin,
                          interactionPlugin,
                        ]}
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,timeGridWeek,timeGridDay",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        initialEvents={INITIAL_EVENTS}
                        select={handleDateSelect}
                        eventContent={renderEventContent}
                        eventClick={handleEventClick}
                        eventsSet={handleEvents}
                      />
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
        {/* <!-- End Row --> */}
      </div>
    </div>
  );};

Calendar.propTypes = {};

Calendar.defaultProps = {};

export default Calendar;
