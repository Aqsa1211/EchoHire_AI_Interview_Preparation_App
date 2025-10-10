"use client"
import React from 'react'
import Image from 'next/image'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import FormField from "@/components/FormField"
import {
    Form,
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import {toast} from "sonner";
import {useRouter} from "next/navigation";


const AuthFormSchema = (type:FormType)=> {
    return z.object({
        name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
        email: z.email(),
        password: z.string().min(6),
    })
}

const AuthForm = ({type}:{type:FormType}) => {
    const router = useRouter();
    const formSchema = AuthFormSchema(type)
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password:""
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
       try{
           if (type === "sign-up"){
               toast.success('Account Created Successfully. Please Sign In')
               router.push("/sign-in")
           }else{
               toast.success('Signed In Successfully')
               router.push("/")
           }

       } catch(error) {
           console.log(error)
           toast.error(`There was an error: ${error}`)
       }
    }
    const isSignIn = type === "sign-in";
    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src="/logo.svg" alt="logo" height={32} width={38} />
                    <h2 className="text-primary-100">PrepWise</h2>
                </div>
                <h3>Practice job interviews with AI</h3>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                        {!isSignIn && (
                            <FormField
                                name='name'
                                control={form.control}
                                label='Name'
                            placeholder='Your Name' />
                        )}
                        <FormField
                            name='email'
                            control={form.control}
                            label='Email'
                            placeholder='Your Email'
                            type='email'/>
                        <FormField
                            name='password'
                            control={form.control}
                            label='Password'
                            placeholder='Enter your password'
                            type='password'
                        />

                        <Button className="btn" type="submit">{isSignIn ? 'Sign In':'Create an Account'}</Button>
                    </form>
                    <p className="text-center">
                        {isSignIn? "No Account Yet ?  ":"Have an Account Already ?  "}
                        <Link href={!isSignIn? "/sign-in" :"/sign-up"} className="font-bold text-user-primary ml-1">
                            {!isSignIn ? " Sign In" : " Sign Up"}
                        </Link>
                    </p>
                </Form>
            </div>
        </div>
    )
}
export default AuthForm
