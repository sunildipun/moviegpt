export const LoginValidation = (email: string, password: string) => {
    const emailRegex = new RegExp('^[\\w.-]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    const isValidEmail: boolean = emailRegex.test(email);
    const passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
    const isValidPassword: boolean = passwordRegex.test(password)

    if(!isValidEmail) return 'Email is not valid!';
    if(!isValidPassword) return 'Password is not valid!'

    return null;
};