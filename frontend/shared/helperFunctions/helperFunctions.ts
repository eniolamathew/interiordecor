function validatePassword(password: string): string[] {
    const errors: string[] = [];
        
    // Define regex patterns for each requirement
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    // Check each condition and add corresponding error message
    if (!hasLowerCase) {
        errors.push('Password must contain at least one lowercase letter.');
    }
    if (!hasUpperCase) {
        errors.push('Password must contain at least one uppercase letter.');
    }
    if (!hasNumber) {
        errors.push('Password must contain at least one number.');
    }
    if (!hasSpecialChar) {
        errors.push('Password must contain at least one special character.');
    }
    
    // Check if the password length is at least 8 characters
    if (password.length < 8) {
        errors.push('8 characters long');
    }

    return errors;
}


function formatPasswordErrors(errors: string[]): string {
    const requirements = {
        lowercase: "one lowercase letter",
        uppercase: "one uppercase letter",
        specialCharacter: "one special character",
        number: "one number",
        length: "8 characters long"
    };

    const uniqueErrors: Set<string> = new Set(errors.map(error => {
        if (error.includes("lowercase")) return requirements.lowercase;
        if (error.includes("uppercase")) return requirements.uppercase;
        if (error.includes("number")) return requirements.number;
        if (error.includes("special")) return requirements.specialCharacter;
        if (error.includes("characters long")) return requirements.length;
        return '';
    }));

    const errorMessages = Array.from(uniqueErrors);

    if (errorMessages.length === 0) { return ""}

    // Create a formatted string from the error messages
    if (errorMessages.length === 1) {
        return `Password must contain ${errorMessages[0]}.`;
    } else if (errorMessages.length === 2) {
        return `Password must contain ${errorMessages[0]} and ${errorMessages[1]}.`;
    } else {
        const lastRequirement = errorMessages.pop();
        return `Password must contain ${errorMessages.join(', ')} and ${lastRequirement}.`;
    }
}

export { validatePassword, formatPasswordErrors }