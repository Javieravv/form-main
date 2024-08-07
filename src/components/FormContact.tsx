import { yupResolver } from "@hookform/resolvers/yup"
import { IconStar } from "../ui/Icons"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const schema = yup
    .object({
        firstName: yup.string().required('This field is required'),
        lastName: yup.string().required('This field is required'),
        email: yup.string().email('Please enter a valid email address').required('This field is required'),
        querytype: yup.string().required('This field is required'),
        message: yup.string().required('This field is required'),
        formConsent: yup.boolean().oneOf([true], 'To submit this form, please consent to being contacted')
    }).required()

export const FormContact = () => {
    const { register, handleSubmit, formState: { errors }, watch, reset, setFocus } = useForm({
        resolver: yupResolver(schema)
    })

    const qType = watch("querytype")

    const onSubmit = (data: any) => {
        console.log(data)
        toast.success(`Thanks for completing the form. We'll be in touch soon!`)
        setFocus("firstName")
        reset()
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="form">
                <h2>Contact Us</h2>
                <div className="form__dataperson">
                    <fieldset className="title__dataperson">
                        <legend>First Name <IconStar /></legend>
                        <input
                            type="text"
                            {...register("firstName")}
                            id="first-name " 
                            className={`${errors.firstName && 'error-border'}`}
                            />
                        {errors.firstName?.type === "required" && (<p className="error-message" role="alert" >{errors.firstName.message}</p>)}
                    </fieldset>
                    <fieldset className="title__dataperson">
                        <legend>Last Name <IconStar /></legend>
                        <input 
                        type="text" 
                        {...register("lastName")} 
                        id="last-name "
                        className={`${errors.lastName && 'error-border'}`} />
                        {errors.lastName?.type === "required" && (<p className="error-message" role="alert" >{errors.lastName.message}</p>)}
                    </fieldset>
                </div>
                <fieldset className="title__dataperson">
                    <legend>Email Adress <IconStar /></legend>
                    <input 
                    type="email" 
                    {...register("email")} 
                    id="email" 
                    className={`${errors.email && 'error-border'}`}
                    />
                    {errors.email?.type === "required" && (<p className="error-message" role="alert" >{errors.email.message}</p>)}
                    {errors.email?.type === "email" && (<p className="error-message" role="alert" >{errors.email.message}</p>)}
                </fieldset>
                <fieldset className="title__dataperson form__querytype">
                    <legend>Query Type <IconStar /> </legend>
                    <div className={`${qType === 'general-enquiry' && 'bg-radio'}`}>
                        <input type="radio" {...register("querytype")}
                            value="general-enquiry"
                            id="general-enquiry"
                            className="radio-input"
                        />
                        <label htmlFor="general-enquiry" className="radio-label">
                            General Enquiry
                        </label>
                    </div>
                    <div className={`${qType === 'support-request' && 'bg-radio'}`}>
                        <input type="radio" {...register("querytype")}
                            value="support-request"
                            id="support-request"
                            className="radio-input"
                        />
                        <label htmlFor="support-request" className="radio-label">
                            Support Request
                        </label>
                    </div>
                </fieldset>
                {errors.querytype?.type === "nullable" && (<p className="error-message" role="alert" >{errors.querytype.message}</p>)}
                <fieldset className="title__dataperson">
                    <legend>Message <IconStar /> </legend>
                    <textarea
                        {...register("message")}
                        id="form-message"
                        rows={4}
                        className={`${errors.message && 'error-border'}`}
                        >
                    </textarea>
                    {errors.message && (<p className="error-message" role="alert" >{errors.message.message}</p>)}

                </fieldset>
                <label className="form__conset" htmlFor="form-conset">
                    <input type="checkbox" {...register("formConsent")} id="form-conset" />
                    I consent to being contacted by the team.
                    <IconStar />
                </label>
                {errors.formConsent?.type === "oneOf" && (<p className="error-message" role="alert" >{errors.formConsent.message}</p>)}
                <input className="form__submit" type="submit" value="Submit" />
            </form>
            <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}
