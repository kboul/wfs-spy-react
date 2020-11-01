export default interface TableButtonsProps {
    disabled?: boolean;
    hasModal?: boolean;
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
