export type category = {
    [tag: string]:{
        title: string,
        color: string,
        expense: boolean
    }
};
export type item = {
    date: Date;
    category: string;
    title: string;
    value: number;
}