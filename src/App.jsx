import './App.css'
import { Grid } from '@mui/material'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'

function App() {
  

  /*
    1. 연락처 등록 
    2. 연락처 검색
    3. 연락처 삭제
    4. 초기화 
  */
  return (
    <>
      <h1>연락처앱</h1>
        <Grid container spacing={2}>
          <Grid size={6}>
            <ContactForm />
          </Grid>
          <Grid size={6}>
            <ContactList />
          </Grid>
        </Grid>
    </>
  )
}



export default App
