import {
  Field,
  FieldError,
  FieldGroup,
  FieldSeparator,
} from "@/core/components/ui/field";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Input } from "@/core/components/ui/input";
import { Label } from "@/core/components/ui/label";
import { Button } from "@/core/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  identifier: z.string().min(1, "Identifier cannot blank"),
  password: z.string().min(1, "Password cannot blank"),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {}

  return (
    <>
      <div className='flex flex-col'>
        <Button variant={"outline"} size={"lg"}>
          <img src='/ic-google.svg' alt='Icon' className='size-4' />
          Continue with Google
        </Button>
      </div>
      <FieldSeparator className='my-1'>Or continue with</FieldSeparator>
      <form id='login-form' onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <Controller
            name='identifier'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Label>Identifier</Label>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder='Type username or email'
                  type='text'
                  autoComplete='off'
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Controller
            name='password'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <span className='flex justify-between'>
                  <Label>Password</Label>{" "}
                  <Link
                    to={"/forgot-password"}
                    className='text-sm text-muted-foreground hover:underline'
                  >
                    Forgot password
                  </Link>
                </span>

                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder='Type password'
                  type='password'
                  autoComplete='off'
                />
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <Button type='submit' size={"lg"}>
            Login <ArrowRight />
          </Button>
        </FieldGroup>
      </form>
      <span className='w-full text-center text-sm'>
        Don't have an account?{" "}
        <Link to={"/auth/signup"} className='underline hover:'>
          Signup
        </Link>
      </span>
    </>
  );
};

export default LoginForm;
