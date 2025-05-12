import { useRef, useState, useEffect } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton } from './styles'


function Home() {
  const [products, setProducts] = useState([])
  const inputRef = useRef()
  //uma abordagem mais controlada (que é geralmente recomendada no React), você pode transformar o input em um componente controlado
  //  const [inputValue, setInputValue] = useState('') // Estado para o valor do input


  // Foca no input quando a página carrega
  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function clickOnButton() {
    setProducts([
      { id: v4(), name: inputRef.current.value }, ...products])

    // Limpa o campo de input
    //setInputValue('')
  }

  function delProduct(id) {
    setProducts(products.filter(product => product.id !== id))
  }

  function clickOnButton() {
    setProducts([
      { id: v4(), name: inputRef.current.value }, ...products])

    // Limpa o campo de input
    inputRef.current.value = ''
    inputRef.current.focus() // Coloca o foco de volta no input
  }

  return (

    <Container>
      <h1>Lista de Compras</h1>
      <input placeholder="produto..." ref={inputRef} />

      {/* <input placeholder="produto..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> */}

      <AddButton onClick={clickOnButton}>Adicionar</AddButton>

      {
        products.map(product => (
          <Product key={product.id}>
            <p>{product.name}</p>
            <TrashButton onClick={() => delProduct(product.id)}>🗑️</TrashButton>
          </Product>
        ))}
    </Container>
  )
}

export default Home
