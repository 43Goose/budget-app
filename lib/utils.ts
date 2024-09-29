export function generateId() {
    // Generates random string of 12 characters for a budget or item ID
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    while (result.length < 12) {
        result += characters.charAt(Math.random() * charactersLength);
    }

    return result;
}