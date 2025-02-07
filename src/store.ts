import { create } from 'zustand';
import { Patient } from './types';

type PatientState = {
  patient: Patient[]
}
export const usePatienteStore = create<PatientState>((set) => ({
  patient: [],

}));
