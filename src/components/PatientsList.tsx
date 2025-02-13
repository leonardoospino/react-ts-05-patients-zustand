import { usePatientStore } from '../store'

export const PatientsList = () => {
  const patients = usePatientStore(state => state.patients);
  console.log(patients);

  return (
    <div>PatientsList</div>
  )
}
