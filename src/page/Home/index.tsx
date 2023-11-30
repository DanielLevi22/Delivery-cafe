import {
  Banner,
  ContainerHome,
  ContainerItem,
  FirstSesscionHome,
  Item,
  SecondSessesion,
  SecondSessesionTitle,
  SessionCardsCafe,
  SessionSubtitle,
  SessionTitles,
} from './styles'
import { CardCafe } from '../../components/CardCafe'
import { Icon } from '../../components/Icon'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useState, useEffect } from 'react'
import { Coffee as cafee } from '../../types/Coffe'
import { api } from '../../components/lib/api'

export function Home() {
  const [coffe, setCoffe] = useState<cafee[]>()

  async function fetchCoffe() {
    const response = await api.get('/coffee')
    setCoffe(response.data)
  }

  useEffect(() => {
    fetchCoffe()
  }, [])

  return (
    <ContainerHome>
      <FirstSesscionHome>
        <div>
          <SessionTitles>
            Encontre o café perfeito para qualquer hora do dia
          </SessionTitles>
          <SessionSubtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SessionSubtitle>

          <ContainerItem>
            <Item>
              <Icon
                icon={<ShoppingCart size={16} weight="fill" color="#fff" />}
                variant="primary"
              />
              <span>Compra simples e segura</span>
            </Item>
            <Item>
              <Icon
                icon={<Timer size={16} weight="fill" color="#fff" />}
                variant="secondary"
              />
              <span>Compra simples e segura</span>
            </Item>
            <Item>
              <Icon
                icon={<Package size={16} weight="fill" color="#fff" />}
                variant="tertiary"
              />
              <span>Compra simples e segura</span>
            </Item>
            <Item>
              <Icon
                icon={<Coffee size={16} weight="fill" color="#fff" />}
                variant="quaternary"
              />
              <span>Compra simples e segura</span>
            </Item>
          </ContainerItem>
        </div>

        <Banner>
          <img src="Imagem.png" alt="" width={476} height={360} />
        </Banner>
      </FirstSesscionHome>

      <SecondSessesion>
        <SecondSessesionTitle>Nossos cafés</SecondSessesionTitle>

        <SessionCardsCafe>
          {coffe && <CardCafe coffe={coffe} />}
        </SessionCardsCafe>
      </SecondSessesion>
    </ContainerHome>
  )
}
