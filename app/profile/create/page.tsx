import { createProfileAction } from "@/actions/actions";
import { SubmitButton } from "@/components/form/Button";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";



const CreateProfilePage = async () => {
    const user = await currentUser()
    if (user?.privateMetadata.hasProfile) redirect('/')
    return (
        <section>
            <h1 className="text-2xl font-semibold md-8 capitalize">new user</h1>
            <div className="border p-8 rounded-md">
                <FormContainer action={createProfileAction}>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">

                        <FormInput
                            name="firstName"
                            label="ชื่อ **(ไม่ต้องระบุ คำนำหน้า)"
                            type="text"
                            placeholder="ชื่อ"
                        />
                        <FormInput
                            name="lastName"
                            label="นามสกุล"
                            type="text"
                            placeholder="นามสกุล"
                        />
                        <FormInput
                            name="webName"
                            label="ชื่อที่อยากให้เรียก"
                            type="text"
                            placeholder="ชื่อที่อยากให้เรียก"
                        />
                    </div>
                    <SubmitButton text="ลงทะเบียนกับระบบ" size='lg' />
                </FormContainer>
            </div>
        </section>
    )
}
export default CreateProfilePage