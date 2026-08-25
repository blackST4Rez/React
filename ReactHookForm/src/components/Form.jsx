
import { useForm } from 'react-hook-form';

function SimpleForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert('Form submitted! Check console.');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label>
                <input
                    {...register('name', { required: 'Name is required' })}
                    placeholder="Enter your name"
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                        }
                    })}
                    placeholder="Enter your email"
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default SimpleForm;