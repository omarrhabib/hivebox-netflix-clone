import Input from "@/components/input";
import {useCallback, useState} from "react";

const Auth = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant == 'login' ? 'register' : 'login')
    }, [])

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-norepeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-35" >
                <nav className="px-5 py-5"> 
                    <img src="/images/logo.svg" alt="logo" className="h-8"/ >
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-50 backdrop-blur px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-xl w-full"> 
                    <h2 className="text-white text-4xl mb-8 font-semibold">
                        {variant == 'login' ? 'Log In':'Sign Up' }
                    </h2>
                    <div className="flex flex-col gap-4">
                        {variant == 'register' &&( 
                    <Input 
                        label="Username"
                        onChange={(ev: any) => setName(ev.target.value)}
                        id="name"
                        value={name}
                        />
                    )}

                        <Input 
                        label="Email"
                        onChange={(ev: any) => setEmail(ev.target.value)}
                        type="email"
                        id="email"
                        value={email}
                        />

                        <Input 
                        label="Password"
                        onChange={(ev: any) => setPassword(ev.target.value)}
                        type="password"
                        id="password"
                        value={password}
                        />
                    </div>
                    <button className="bg-HivePink py-3 text-white text-lg rounded-md w-full mt-10 hover:bg-HivePink-dark transition"> 
                        {variant == 'login'? 'Log In' : 'Sign Up'}
                    </button>
                    <p className="text-zinc-400 mt-12"> 
                        {variant == 'login'? 'New to Hivebox?':'Already have an account?'}
                        <span onClick={toggleVariant}  className="text-white ml-1 hover:underline cursor-pointer">
                            {variant == 'login'? 'Create an account.' : 'Log In.'}
                        </span>
                    </p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Auth;