import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image';
import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
        <Hero>
            <Heading size="4xl">
                Agendamento descomplicado
            </Heading>
            <Text size="xl"> Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre. </Text>
        </Hero>
        <Preview>
            <Image
                height={400}
                quality={100}
                priority
                src={previewImage}
                alt="Calendário que simula como será a aplicação"
            />
        </Preview>
    </Container>
  );
}
