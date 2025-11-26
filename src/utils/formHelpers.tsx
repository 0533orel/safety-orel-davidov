export const formatDateTimeLocal = () => {
    const date = new Date();

    const pad = (n: number) => n.toString().padStart(2, "0");

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${year}-${month}-${day}T${hours}:${minutes}`;
};

// export const maxEventDate = formatDateTimeLocal(new Date());

// export const getDateTime = (formatDatetimeLocal: boolean = false ): string => {
//     const now = new Date();
//
//     const pad = (n: number) => n.toString().padStart(2, "0");
//
//     const year = now.getFullYear();
//     const month = pad(now.getMonth() + 1);
//     const day = pad(now.getDate());
//     const hours = pad(now.getHours());
//     const minutes = pad(now.getMinutes());
//
//     return formatDatetimeLocal ? `${year}-${month}-${day}T${hours}:${minutes}` :
//         `${year}/${month}/${day} ${hours}:${minutes}`
// };


export const checkIfHasCasualties = (resultValue: string): boolean => {
    return resultValue.includes('יש נפגעים');
};

export const checkEventVenue = (resultValue: string): boolean => {
    return resultValue.includes('שטח אזרחי');
};



