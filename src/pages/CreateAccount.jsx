import AuthLayout from "../components/layout/AuthLayout"
import MainLayout from "../components/layout/MainLayout"
import { Email, Password, User } from "../utils/AccountIcon"

const CreateAccount = () => {
  return (
    <MainLayout>
        <AuthLayout>
            <div className="lg:w-5/6 mx-auto md:w-5/6 lg:px-0 px-4">
                <h2 className="lg:text-[51px] text-[38px] font-semibold mb-5">Create account</h2>
                <p className="lg:text-[22px] text-[16px] font-normal mb-7 lg:w-3/4">
                    Welcome! enter your details and start creating, collecting and selling NFTs.
                </p>
                <form action="">
                    <div className="lg:w-3/5 md:w-full">
                    <div className="relative mb-4">
                        <div className="input-icon">
                            <User />
                        </div>
                        <input type="text" id="username" className="input-primary" placeholder="Username" />
                    </div>
                    <div className="relative mb-4">
                        <div className="input-icon">
                            <Email />
                        </div>
                        <input type="email" id="email" className="input-primary" placeholder="Email Address" />
                    </div>
                    <div className="relative mb-4">
                        <div className="input-icon">
                            <Password />
                        </div>
                        <input type="password" id="password" className="input-primary" placeholder="Password" />
                    </div>
                    <div className="relative">
                        <div className="input-icon">
                            <Password />
                        </div>
                        <input type="password" id="password" className="input-primary" placeholder="Confirm Password" />
                    </div>
                    <div className="mt-6">
                    <button className="border w-full border-[#A259FF] text-white bg-[#A259FF] hover:bg-[#A259FF] focus:ring-4 focus:ring-[#A259FF] font-medium rounded-[20px] text-[20px] px-[50px] py-2 focus:outline-none">
                        Create account
                    </button>
                    </div>
                    </div>
                </form>
            </div>
        </AuthLayout>
    </MainLayout>
  )
}

export default CreateAccount