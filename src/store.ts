import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';
import { DraftPatient, Patient } from './types';

type PatientState = {
  patients: Patient[],
  activeId: Patient['id'],
  addPatient: (data: DraftPatient) => void;
  deletePatient: (patientId: Patient['id']) => void,
  setActiveId: (patientId: Patient['id']) => void,
  updatePatient: (data: DraftPatient) => void;
}

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuid() };
}

export const usePatientStore = create<PatientState>()(
  devtools(
    persist(
      (set) => ({
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
        updatePatient: (data) => {
          set((state) => ({
            patients: state.patients.map((patient) => (
              patient.id === state.activeId ?
              {id: state.activeId, ...data,} :
              patient
            )),
            activeId: '',
          }));
        },
      }),
      {
        name: 'patient-storage',
        // storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
