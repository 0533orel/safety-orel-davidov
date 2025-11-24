export const renderOptions = (options: string[]) => {
    return options.map((option, index) => (
        <option key={index} value={option}>
            {option}
        </option>
    ));
};


const formatDateTimeLocal = (date: Date) => {
    const pad = (n: number) => n.toString().padStart(2, "0");
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
};
export const maxEventDate = formatDateTimeLocal(new Date());


export const checkIfHasCasualties = (resultValue: string): boolean => {
    return resultValue.includes('יש נפגעים');
};


