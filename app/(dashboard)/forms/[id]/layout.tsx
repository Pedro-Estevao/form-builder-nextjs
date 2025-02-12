import { ChildrenProps } from "@/types/nextjs";

const BuilderLayout = ({ children }: Readonly<ChildrenProps>) => {
    return (
        <div className="flex flex-col w-full flex-grow container mx-auto">
            {children}
        </div>
    );
};

export default BuilderLayout;