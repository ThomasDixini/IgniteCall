import { Button, TextInput } from "@ignite-ui/react";
import { Form } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ClaimUsernameSchema = z.object({
    username: z.string()
})

type ClaimUsernameData = z.infer<typeof ClaimUsernameSchema>

export function ClaimUsernameForm() {
    const { register, handleSubmit } = useForm<ClaimUsernameData>()

    function handleClaimUsername(data: any) {
        console.log(data)
    }
    return (
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
    );
}