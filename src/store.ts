import { create } from 'zustand';
import { v4 as uuid } from 'uuid';
import { DraftPatient, Patient } from './types';

type PatientState = {
  patients: Patient[];
  addPatient: (data: DraftPatient) => void;
}

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuid() };
}

export const usePatientStore = create<PatientState>((set) => ({
  patients: [],
  addPatient: (data) => {
    set((state) => ({
      patients: [...state.patients, createPatient(data)],
    }));
  },
}));
