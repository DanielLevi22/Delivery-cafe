import { useState } from 'react'
import { ContainerSelect } from './styles'
import { MapPinLine } from 'phosphor-react'

export function StateSelect() {
  const [state, setState] = useState('')
  const locais = [
    'São Paulo',
    'Rio Grande do Norte',
    'Ceará',
    'Fortaleza',
    'Crateus',
  ]

  function selectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value
    setState(value)
    console.log(value)
  }

  return (
    <ContainerSelect>
      <span>
        <MapPinLine size={22} color="#8047F8" weight="fill" />
      </span>

      <div>
        <select value={state} onChange={selectChange}>
          {locais.map((local) => (
            <option key={local} value={local}>
              {' '}
              {local}{' '}
            </option>
          ))}
        </select>
      </div>
    </ContainerSelect>
  )
}
