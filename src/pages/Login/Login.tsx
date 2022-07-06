import { yupResolver } from '@hookform/resolvers/yup'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useForm } from 'react-hook-form'
import { FaClipboardList } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import useTitle from '../../hooks/useTitle'
import './login.scss'

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
})

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
}

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    })

    useTitle('Login')

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <div className="login login-bg">
            <div className="login-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="form-label text-white my-4">Sign In</h2>
                    <div className="login-row">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Username"
                            {...register('username')}
                        />
                        <p className="login-err">
                            {errors && errors.username?.message}
                        </p>
                    </div>
                    <div className="login-row">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            {...register('password')}
                        />
                        <p className="login-err">
                            {errors && errors.password?.message}
                        </p>
                    </div>
                    <div className="login-row">
                        <button className="login-btn mbtn bg-danger">
                            Sign In
                        </button>
                    </div>
                </form>{' '}
                <h6 className="text-center text-white">Or</h6>
                <div className="">
                    <button className="login-btn mbtn">
                        <Link to="/" className="login-register">
                            <i className="login-icon">
                                <FaClipboardList />
                            </i>
                            Register
                        </Link>
                    </button>
                    {/* <button className="login-btn mbtn w-100 mb-2">
                        <i className="login-icon">
                            <FaFacebookF />
                        </i>
                        Login with Facebook
                    </button> */}
                    {/* <button className="login-btn mbtn w-100">
                        <i className="login-icon">
                            <FaGoogle />
                        </i>
                        Login with Google
                    </button> */}
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login
