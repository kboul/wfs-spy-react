export default interface TableButtonsProps {
    disabled?: boolean;
    hasModal?: boolean;
    label: string;
    onGetClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onPostClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
