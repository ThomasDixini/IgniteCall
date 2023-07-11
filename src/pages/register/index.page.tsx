import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, Header, RegisterFormError } from './styles'
import { ArrowRight } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

const registerFormSchema = z.object({
    username: z
        .string()
        .min(3, { message: 'O Usuário precisa ter no minímo 3 letras.' })
        .regex(/^([a-z//-]+)$/i, {
        message: 'Usuário só pode conter letras e hífens.',
        })
        .transform((username) => username.toLocaleLowerCase()),
    name: z
        .string()
        .min(3, { message: 'O Nome precisa ter no minímo 3 letras.' })
})

type registerFormData = z.infer<typeof registerFormSchema>

export default function Register() {
    const { 
        register, 
        handleSubmit, 
        formState: { 
            errors, 
            isSubmitting
        } 
    } = useForm<registerFormData>({
        resolver: zodResolver(registerFormSchema)
    })

    function handleRegister(data: registerFormData){
        console.log(data)
    }

  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text>Nome de usuário</Text>
          <TextInput prefix="ignite.com/" placeholder="seu-usuario" {...register('username')}/>
          {errors.username && (
            <RegisterFormError size="sm">
                {errors.username.message}
            </RegisterFormError>
          )}
        </label>
        <label>
          <Text>Nome Completo</Text>
          <TextInput placeholder="Seu nome" {...register('name')}/>
          {errors.name && (
            <RegisterFormError size="sm">
                {errors.name.message}
            </RegisterFormError>
          )}
        </label>
        <Button type="submit" disabled={isSubmitting}>
          Próxima etapa
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
