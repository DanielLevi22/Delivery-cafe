import { ContainerInput, Label, Input as InputField } from './style'

export function Input() {
  return (
    <ContainerInput>
      <InputField type="text" placeholder="Opcional" id="CEP" />
      <Label htmlFor="CEP">CEP</Label>
    </ContainerInput>
  )
}
