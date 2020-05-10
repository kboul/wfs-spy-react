export default interface ITableButtons {
    label: string;
    hasModal?: boolean;
    onClick: (e: React.FormEvent<HTMLInputElement>) => void;
    isGetRequest?: boolean;
    initialState?: boolean;
}
