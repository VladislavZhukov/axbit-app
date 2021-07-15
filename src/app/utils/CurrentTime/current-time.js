export const getCurrentTime = () => {
    return new Date().toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
};