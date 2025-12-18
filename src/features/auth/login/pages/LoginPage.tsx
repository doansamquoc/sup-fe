import LoginForm from "../components/LoginForm";
const LoginPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <span className='text-center'>
        <h1 className='text-3xl font-bold font-head'>Welcome back!</h1>
        <span className='text-center text-sm text-muted-foreground'>
          Login with your Google account
        </span>
      </span>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
