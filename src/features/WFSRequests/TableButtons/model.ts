export default interface TableButtonsProps {
    label: string;
    hasModal?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isGetRequest?: boolean;
    initialState?: boolean;
}
