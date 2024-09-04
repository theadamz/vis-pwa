import { ReactNode } from "react";

type CardProps = {
    icon: ReactNode;
    label: string;
    onClick?: () => void;
};

const Card = ({ icon, label, onClick }: CardProps): ReactNode => {
    return (
        <div
            className="p-4 bg-white shadow-md rounded-lg"
            onClick={onClick && onClick}
        >
            <div className="flex flex-col items-center">
                {icon}
                <span className="font-medium pt-2">{label}</span>
            </div>
        </div>
    );
};

export default Card;
