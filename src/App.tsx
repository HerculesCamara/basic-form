import { Container, Form, SubmitButton, Title } from "./styles"

function App() {

  return (
    <Container>
      <Title>
        <h1>Olá!😀</h1>
        <h2>Vamos conversar?</h2>
      </Title>
      <Form>
        <input type="text" placeholder="Nome" name="" id="" />
        <input type="text" placeholder="Email" name="" id="" />
        <textarea name="" placeholder="Sobre o que vamos conversar?" id="" cols={50} rows={5}></textarea>
      </Form>

      <SubmitButton>Enviar</SubmitButton>
    </Container>
  )
}

export default App
