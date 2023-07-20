import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight, Check } from 'phosphor-react'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Register() {
    const router = useRouter();
    const session = useSession();

    const hasAuthError = !!router.query.error;
    const isSignedIn = session.status == 'authenticated'

    return (
        <Container>
            <Header>
                <Heading as="strong">Conecte sua agenda!</Heading>
                <Text>
                    Conecte o seu calendário para verificar automaticamente
                    as horas ocupadas e os novos eventos à medida em que são agendados.
                </Text>
                <MultiStep size={4} currentStep={2} />
            </Header>

            <ConnectBox>
                <ConnectItem>
                    <Text>
                        Google Calendar
                    </Text>
                    {
                        isSignedIn ? (
                            <Button size="sm" disabled>
                                Conectado
                                <Check />
                            </Button>
                        ) : (
                            <Button variant="secondary" size="sm" onClick={() => signIn('google')}>
                                Conectar
                                <ArrowRight />
                            </Button>
                        )
                    }
                </ConnectItem>
                {
                    hasAuthError ?? (
                        <AuthError>
                            Falha ao se conectar com o google, verifique se você concedeu as permissões
                            para habiltiar o Google Calendar.
                        </AuthError>
                    )
                }
                <Button type="submit" disabled={!isSignedIn}>
                    Próxima etapa
                    <ArrowRight />
                </Button>
            </ConnectBox>
        </Container>
    )
}
