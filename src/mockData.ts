export type Level = 'Level 1' | 'Level 2' | 'Level 3';
export interface TrainingRecord { id: string; cohort: string; firstName: string; lastName: string; department: string; title: string; email: string; level: Level }
export const levels: Level[] = ['Level 1', 'Level 2', 'Level 3'];
// Unique supplied names; blank rows and entries containing Mansfield are excluded.
export const departments = [
  'CSE', 'EED', 'MAE', 'CDME', 'ISE', 'ECE', 'MAE & MSE', 'CSE (OHI/O)',
  'Aviation', 'Facilities Management', 'BME', 'ETS - Newark', 'CEGE', 'FABE',
  'ETS - Lima', 'OSU Libraries', 'EED/MAE', 'MSE', 'CBE', 'CCE', 'OSU Newark',
  'OSU Marion (MAE)', 'FABE - Wooster', 'FAES', 'Arts & Sciences',
  'CEGE - Co-Facilitated', 'Lima', 'ETS', 'CAR', 'Earth Sciences - regional',
  'Center for Computing Education', 'Marion Campus', 'MAE-AAE', 'BSET Lima',
];
const first = ['Avery','Jordan','Taylor','Morgan','Riley','Casey','Alex','Jamie','Sam','Quinn','Cameron','Drew','Reese','Parker','Robin','Skyler','Hayden','Rowan'];
const last = ['Patel','Rivera','Chen','Williams','Nguyen','Brown','Singh','Garcia','Kim','Wilson'];
const titles = ['Engineer','Senior Engineer','Engineering Manager','Technical Lead','Associate Engineer','Principal Engineer'];
export const records: TrainingRecord[] = Array.from({length:180}, (_,i) => {
  const person = {firstName:first[i%18],lastName:last[Math.floor(i/18)],department:departments[i%departments.length],title:titles[(i+Math.floor(i/9))%6],email:`${first[i%18].toLowerCase()}.${last[Math.floor(i/18)].toLowerCase()}@example.com`};
  // Every team has participants at all levels; some attend multiple levels.
  const n = Math.floor(i / departments.length) % 3;
  const make = (level:Level):TrainingRecord => ({...person,id:`record-${i}-${level}`,level,cohort:level});
  return [make(levels[n]), ...(i%4===0?[make(levels[(n+1)%3])]:[])];
}).flat();
