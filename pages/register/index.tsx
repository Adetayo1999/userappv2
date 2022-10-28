import { FoodIcon } from "../../assets";
import { Container } from "../../components/container";
import { RegisterForm } from "../../components/register-form";

const RegisterPage = () => {
    return (
        <div className='relative'>
            <Container>
                <div className=' mb-14 min-h-[80vh] md:w-[50%] mx-auto'>
                    <div className='text-center mb-8'>
                        <h1 className='font-bold text-2xl text-[#06192D]'>
                            Create your Safelybuy account
                        </h1>
                    </div>
                    <RegisterForm />
                </div>
            </Container>
            <div className='absolute -left-56 top-6'>
                <FoodIcon color='#8661FF12' scale={13} />
            </div>
        </div>
    );
};

export default RegisterPage;
