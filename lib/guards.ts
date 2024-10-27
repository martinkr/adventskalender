export const isValidMonth = (month: number): boolean => {
    // Add 1 as months are zero-based
    const today = new Date().getMonth() + 1;
    return process.env.NODE_ENV === "development" ? true : today === month;
}

export const isValidDay = (day: number): boolean => {
    const today = new Date().getDate();
    return process.env.NODE_ENV === "development" ? true : today >= day;
}