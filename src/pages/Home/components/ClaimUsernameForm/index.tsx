import { Button, Text, TextInput } from "@ignite-ui/react";
import { Form, FormError } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod";

const ClaimUsernameSchema = z.object({
    username: 
        z.string()
        .min(3, { message: 'Minímo necessário de 3 letras.'})
        .regex(/^([a-z//-]+)$/i, { message: 'Usuário só pode conter letras e hífens.'})
        .transform((username) => username.toLocaleLowerCase())  
})

type ClaimUsernameData = z.infer<typeof ClaimUsernameSchema>

export function ClaimUsernameForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<ClaimUsernameData>({
        resolver: zodResolver(ClaimUsernameSchema)
    })

    function handleClaimUsername(data: any) {
        console.log(data)
    }
    return (
        <>
            <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
                <TextInput 
                    size='sm' 
                    prefix='ignite.com/' 
                    placeholder='seu-usuario' 
                    {...register('username')}
                />
                <Button size='sm' type='submit'>
                    Reservar
                    <ArrowRight />
                </Button>
            </Form>
            <FormError>
                <Text size="sm">
                    {errors.username ? errors.username.message : 'Digite o nome de usuário'}
                </Text>
            </FormError>
        </>
    );
}