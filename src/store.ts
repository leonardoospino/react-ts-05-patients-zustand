import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';
import { DraftPatient, Patient } from './types';

type PatientState = {
  patients: Patient[],
  activeId: Patient['id'],
  addPatient: (data: DraftPatient) => void;
  deletePatient: (patientId: Patient['id']) => void,
  setActiveId: (patientId: Patient['id']) => void,
}

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuid() };
}

export const usePatientStore = create<PatientState>()(
  devtools((set) => ({
    patients: [],
    activeId: '',
    addPatient: (data) => {
      set((state) => ({
        patients: [...state.patients, createPatient(data)],
      }));
    },
    deletePatient: (patientId) => {
      set((state) => ({
        patients: [...state.patients.filter(({ id }) => id != patientId)],
      }));
    },
    setActiveId: (patientId) => {
      set(() => ({
        activeId: patientId,
      }));
    },
  },
)));
