import { usePatientStore } from '../store'
import { Patient } from '../types'
import { PatientDetailItem } from './PatientDetailItem'

type PatientDetailsProps = {
  patient: Patient,
}

export const PatientDetails = ({ patient } : PatientDetailsProps) => {
  const deletePatient = usePatientStore(state => state.deletePatient);
  const setActiveId = usePatientStore(state => state.setActiveId);

  const handleEdit = () => {
    setActiveId(patient.id);
  }

  const handleDelete = () => {
    deletePatient(patient.id);
  }

  return (
    <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>
      <PatientDetailItem label='ID' data={ patient.id } />
      <PatientDetailItem label='Nombre' data={ patient.name } />
      <PatientDetailItem label='Propietario' data={ patient.caretaker } />
      <PatientDetailItem label='Correo' data={ patient.email } />
      <PatientDetailItem label='Fecha Alta' data={ patient.date.toString() } />
      <PatientDetailItem label='Síntomas' data={ patient.symptoms } />

      <div className='flex justify-between gap-3 mt-10'>
        <button
          type='button'
          className='py-2 px-10 bg-indigo-600 hover:border-indigo-700 text-white font-bold uppercase rounded-lg'
          onClick={ handleEdit }
        >
          Editar
        </button>

        <button
          type='button'
          className='py-2 px-10 bg-red-600 hover:border-red-700 text-white font-bold uppercase rounded-lg'
          onClick={ handleDelete }
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}
