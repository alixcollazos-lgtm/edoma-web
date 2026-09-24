"use client";

import { ChangeEvent, useMemo, useState } from "react";

type ScheduleItem = {
  id: number;
  teacher: string;
  subject: string;
  course: string;
  date: string;
  time: string;
  room: string;
};

const DAYS = [
  { key: 1, label: "Lunes" },
  { key: 2, label: "Martes" },
  { key: 3, label: "Miércoles" },
  { key: 4, label: "Jueves" },
  { key: 5, label: "Viernes" },
];

const TIME_SLOTS = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];

const INITIAL_SCHEDULE: ScheduleItem[] = [
  {
    id: 1,
    teacher: "Laura Gómez",
    subject: "Matemáticas",
    course: "8°A",
    date: "2026-09-21",
    time: "07:00",
    room: "Aula 201",
  },
  {
    id: 2,
    teacher: "Carlos Ruiz",
    subject: "Ciencias",
    course: "9°B",
    date: "2026-09-22",
    time: "09:00",
    room: "Laboratorio",
  },
];

function getDayFromDate(date: string): number | null {
  if (!date) return null;

  const selectedDate = new Date(`${date}T12:00:00`);
  const day = selectedDate.getDay();

  if (day === 0 || day === 6) {
    return null;
  }

  return day;
}

function formatDate(date: string): string {
  if (!date) return "";

  const selectedDate = new Date(`${date}T12:00:00`);

  return selectedDate.toLocaleDateString("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export function ScheduleDemo() {
  const [schedule, setSchedule] =
    useState<ScheduleItem[]>(INITIAL_SCHEDULE);

  const [teacher, setTeacher] = useState("");
  const [subject, setSubject] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("07:00");
  const [room, setRoom] = useState("");

  const [selectedId, setSelectedId] =
    useState<number | null>(null);

  const [message, setMessage] = useState("");

  const selectedItem =
    schedule.find((item) => item.id === selectedId) ?? null;

  const scheduleByDay = useMemo(() => {
    return DAYS.map((day) => ({
      ...day,
      items: schedule
        .filter(
          (item) => getDayFromDate(item.date) === day.key
        )
        .sort((a, b) => a.time.localeCompare(b.time)),
    }));
  }, [schedule]);

  function handleDateChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const value = event.target.value;

    setDate(value);
    setMessage("");

    if (value && !getDayFromDate(value)) {
      setMessage("Selecciona un día de lunes a viernes.");
    }
  }

  function handleAddClass() {
    setMessage("");

    if (
      !teacher.trim() ||
      !subject.trim() ||
      !course.trim()
    ) {
      setMessage("Completa docente, asignatura y curso.");
      return;
    }

    if (!date) {
      setMessage("Selecciona una fecha.");
      return;
    }

    if (!getDayFromDate(date)) {
      setMessage("Selecciona un día de lunes a viernes.");
      return;
    }

    const alreadyExists = schedule.some(
      (item) => item.date === date && item.time === time
    );

    if (alreadyExists) {
      setMessage("Ya existe una clase en ese horario.");
      return;
    }

    const newItem: ScheduleItem = {
      id: Date.now(),
      teacher: teacher.trim(),
      subject: subject.trim(),
      course: course.trim(),
      date,
      time,
      room: room.trim() || "Por asignar",
    };

    setSchedule((current) => [...current, newItem]);

    setSelectedId(newItem.id);

    setTeacher("");
    setSubject("");
    setCourse("");
    setDate("");
    setTime("07:00");
    setRoom("");

    setMessage("Clase agregada correctamente.");
  }

  function handleRemoveClass(id: number) {
    setSchedule((current) =>
      current.filter((item) => item.id !== id)
    );

    if (selectedId === id) {
      setSelectedId(null);
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] py-12 sm:py-16">
      {/* Decoración */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#1E88E5]/8 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-20 h-64 w-64 rounded-full bg-[#7956B8]/8 blur-3xl" />

         <div className="relative mx-auto w-full max-w-container px-2 sm:px-6 lg:px-8 xl:px-10">
        {/* Encabezado */}
        <div className="w-full text-center">
          <span className="mb-3 inline-flex items-center rounded-full bg-brand-support/10 px-4 py-1.5 font-display text-sm font-medium text-brand-support">
            Muestra interactiva
          </span>

          <h2 className="font-display text-3xl font-medium leading-[1.15] text-brand-ink sm:text-4xl">
            Genera y organiza horarios fácilmente
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-brand-ink/70">
            Una demostración general de cómo podría organizarse el horario docente
            dentro de una institución educativa.
          </p>
        </div>

        {/* Formulario */}
        <div className="mt-8 rounded-2xl border border-[#DCE8F0] bg-white p-4 shadow-sm sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#1E88E5] text-white shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <rect
                  width="18"
                  height="18"
                  x="3"
                  y="4"
                  rx="2"
                />

                <line
                  x1="16"
                  x2="16"
                  y1="2"
                  y2="6"
                />

                <line
                  x1="8"
                  x2="8"
                  y1="2"
                  y2="6"
                />

                <line
                  x1="3"
                  x2="21"
                  y1="10"
                  y2="10"
                />
              </svg>
            </div>

            <div>
              <h3 className="text-sm font-bold text-brand-ink sm:text-base">
                Agregar clase
              </h3>

              <p className="text-[11px] text-slate-500 sm:text-xs">
                Completa los datos para incorporarla al horario.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold text-brand-ink">
                Docente
              </span>

              <input
                type="text"
                value={teacher}
                onChange={(event) =>
                  setTeacher(event.target.value)
                }
                placeholder="Ej. Laura Gómez"
                className="w-full rounded-lg border border-[#DCE8F0] bg-white px-3 py-2.5 text-xs text-brand-ink outline-none transition focus:border-[#1E88E5] focus:ring-2 focus:ring-[#1E88E5]/10"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold text-brand-ink">
                Asignatura
              </span>

              <input
                type="text"
                value={subject}
                onChange={(event) =>
                  setSubject(event.target.value)
                }
                placeholder="Ej. Matemáticas"
                className="w-full rounded-lg border border-[#DCE8F0] bg-white px-3 py-2.5 text-xs text-brand-ink outline-none transition focus:border-[#7956B8] focus:ring-2 focus:ring-[#7956B8]/10"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold text-brand-ink">
                Curso
              </span>

              <input
                type="text"
                value={course}
                onChange={(event) =>
                  setCourse(event.target.value)
                }
                placeholder="Ej. 8°A"
                className="w-full rounded-lg border border-[#DCE8F0] bg-white px-3 py-2.5 text-xs text-brand-ink outline-none transition focus:border-[#159A68] focus:ring-2 focus:ring-[#159A68]/10"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold text-brand-ink">
                Día
              </span>

              <input
                type="date"
                value={date}
                onChange={handleDateChange}
                className="w-full rounded-lg border border-[#DCE8F0] bg-white px-3 py-2.5 text-xs text-brand-ink outline-none transition focus:border-[#E6A817] focus:ring-2 focus:ring-[#E6A817]/10"
              />

              <span className="mt-1 block text-[10px] text-slate-500">
                Selecciona un día de la semana.
              </span>
            </label>

            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold text-brand-ink">
                Hora
              </span>

              <select
                value={time}
                onChange={(event) =>
                  setTime(event.target.value)
                }
                className="w-full rounded-lg border border-[#DCE8F0] bg-white px-3 py-2.5 text-xs text-brand-ink outline-none transition focus:border-[#1E88E5] focus:ring-2 focus:ring-[#1E88E5]/10"
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-[11px] font-semibold text-brand-ink">
                Aula
              </span>

              <input
                type="text"
                value={room}
                onChange={(event) =>
                  setRoom(event.target.value)
                }
                placeholder="Ej. Aula 201"
                className="w-full rounded-lg border border-[#DCE8F0] bg-white px-3 py-2.5 text-xs text-brand-ink outline-none transition focus:border-[#159A68] focus:ring-2 focus:ring-[#159A68]/10"
              />
            </label>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handleAddClass}
              className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#1E88E5] px-4 py-2.5 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1976D2] hover:shadow-md sm:w-auto"
            >
              <span className="text-base leading-none">
                +
              </span>

              Agregar al horario
            </button>

            {message && (
              <p
                className={`text-[11px] font-medium ${
                  message.includes("correctamente")
                    ? "text-[#159A68]"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Horario semanal */}
        <div className="mt-6 rounded-2xl border border-[#DCE8F0] bg-white p-3 shadow-sm sm:p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-bold text-brand-ink sm:text-lg">
                Horario semanal
              </h3>

              <p className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">
                Selecciona una clase para consultar sus detalles.
              </p>
            </div>

            <span className="w-fit rounded-full bg-[#F1FAF6] px-2.5 py-1 text-[10px] font-semibold text-[#159A68]">
              {schedule.length} clases
            </span>
          </div>

          {/* Vista móvil */}
          <div className="mt-5 space-y-4 md:hidden">
            {scheduleByDay.map((day) => (
              <div key={day.key}>
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#7956B8]" />

                  <h4 className="text-xs font-bold text-brand-ink">
                    {day.label}
                  </h4>
                </div>

                {day.items.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-[#DCE8F0] bg-[#F8FBFD] px-3 py-3 text-[10px] text-slate-400">
                    No hay clases programadas.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {day.items.map((item) => {
                      const isSelected =
                        selectedId === item.id;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            setSelectedId(item.id)
                          }
                          className={`w-full rounded-xl border p-3 text-left transition ${
                            isSelected
                              ? "border-[#7956B8] bg-[#F7F3FC] shadow-sm"
                              : "border-[#DCE8F0] bg-white hover:border-[#7956B8]/40"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <p
                                className={`text-[10px] font-semibold ${
                                  isSelected
                                    ? "text-[#7956B8]"
                                    : "text-[#1E88E5]"
                                }`}
                              >
                                {item.time}
                              </p>

                              <p className="mt-0.5 break-words text-xs font-bold text-brand-ink">
                                {item.subject}
                              </p>

                              <p className="mt-0.5 break-words text-[10px] text-slate-500">
                                {item.teacher} · {item.course}
                              </p>
                            </div>

                            <span className="shrink-0 rounded-md bg-[#F1FAF6] px-1.5 py-1 text-[9px] font-medium text-[#159A68]">
                              {item.room}
                            </span>
                          </div>

                          {isSelected && (
                            <div className="mt-2 flex items-center justify-between border-t border-[#7956B8]/15 pt-2">
                              <span className="text-[9px] text-slate-500">
                                {formatDate(item.date)}
                              </span>

                              <span className="text-[9px] font-semibold text-[#7956B8]">
                                Seleccionado
                              </span>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Vista escritorio */}
          <div className="mt-5 hidden md:block">
            <div className="grid grid-cols-[58px_repeat(5,minmax(0,1fr))] overflow-hidden rounded-xl border border-[#DCE8F0]">
              <div className="border-b border-r border-[#DCE8F0] bg-[#F3F8FC] px-2 py-2" />

              {DAYS.map((day, index) => (
                <div
                  key={day.key}
                  className={`border-b border-r border-[#DCE8F0] px-2 py-2 text-center last:border-r-0 ${
                    index % 2 === 0
                      ? "bg-[#F3F8FC]"
                      : "bg-[#F7F3FC]"
                  }`}
                >
                  <span className="text-[11px] font-bold text-brand-ink">
                    {day.label}
                  </span>
                </div>
              ))}

              {TIME_SLOTS.map((slot) => (
                <div key={slot} className="contents">
                  <div className="flex min-h-16 items-start justify-center border-b border-r border-[#DCE8F0] bg-[#FFF9F0] px-1.5 py-2">
                    <span className="text-[9px] font-semibold text-[#A87400]">
                      {slot}
                    </span>
                  </div>

                  {DAYS.map((day) => {
                    const item = schedule.find(
                      (entry) =>
                        getDayFromDate(entry.date) === day.key &&
                        entry.time === slot
                    );

                    const isSelected =
                      item?.id === selectedId;

                    return (
                      <div
                        key={`${day.key}-${slot}`}
                        className="min-h-16 border-b border-r border-[#DCE8F0] p-1 last:border-r-0"
                      >
                        {item && (
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedId(item.id)
                            }
                            className={`h-full w-full rounded-lg p-1.5 text-left transition ${
                              isSelected
                                ? "bg-[#7956B8] text-white shadow-sm"
                                : "bg-[#F1FAF6] hover:bg-[#E7F6EF]"
                            }`}
                          >
                            <p
                              className={`truncate text-[9px] font-bold ${
                                isSelected
                                  ? "text-white"
                                  : "text-[#159A68]"
                              }`}
                            >
                              {item.subject}
                            </p>

                            <p
                              className={`mt-0.5 truncate text-[8px] ${
                                isSelected
                                  ? "text-white/80"
                                  : "text-slate-500"
                              }`}
                            >
                              {item.course}
                            </p>

                            <p
                              className={`mt-0.5 truncate text-[8px] ${
                                isSelected
                                  ? "text-white/80"
                                  : "text-slate-500"
                              }`}
                            >
                              {item.room}
                            </p>
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detalle de clase */}
        {selectedItem && (
          <div className="mt-4 rounded-xl border border-[#7956B8]/15 bg-[#F7F3FC] p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#7956B8]">
                  Clase seleccionada
                </span>

                <h4 className="mt-0.5 break-words text-sm font-bold text-brand-ink">
                  {selectedItem.subject}
                </h4>

                <p className="mt-0.5 break-words text-[10px] text-slate-600">
                  {selectedItem.teacher} · {selectedItem.course}
                </p>

                <p className="mt-0.5 text-[10px] text-slate-500">
                  {formatDate(selectedItem.date)} ·{" "}
                  {selectedItem.time} · {selectedItem.room}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  handleRemoveClass(selectedItem.id)
                }
                className="w-full shrink-0 rounded-lg border border-red-200 bg-white px-3 py-2 text-[10px] font-semibold text-red-600 transition hover:bg-red-50 sm:w-auto"
              >
                Eliminar clase
              </button>
            </div>
          </div>
        )}

        {/* Nota */}
        <p className="mt-4 text-center text-[10px] leading-5 text-slate-400">
          Datos ilustrativos para mostrar la experiencia de uso.
          No corresponden a información real de una institución.
        </p>
      </div>
    </section>
  );
}

export default ScheduleDemo;