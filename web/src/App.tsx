import { useEffect, useRef, useState } from 'react'

const App = () => {
  const [barcode, setBarcode] = useState('')
  const [count, setCount] = useState('')
  const [barecodes, setBarcodes] = useState<string[]>([])
  const barcodeInputRef = useRef<HTMLInputElement>(null)
  const countInputRef = useRef<HTMLInputElement>(null)

  const handleBarcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBarcode(e.target.value)
  }

  const handleBarcodeKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const valueEnterSound = new Audio('/audio/value-enter-notify.mp3')
      valueEnterSound.play()
      setBarcodes([...barecodes, barcode])
      setBarcode('')
    }
  }

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(e.target.value)
  }

  useEffect(() => {
    barcodeInputRef.current?.focus()
  }, [])

  return (
    <div>
      <input
        type="text"
        placeholder="Scan barcode"
        value={barcode}
        onChange={handleBarcodeChange}
        onKeyDown={handleBarcodeKeyPress}
        ref={barcodeInputRef}
      />
      <input
        type="number"
        placeholder="Enter count"
        value={count}
        onChange={handleCountChange}
        ref={countInputRef}
      />
      <ul>
        {barecodes.map((barcode, index) => (
          <li key={index}>{barcode}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
