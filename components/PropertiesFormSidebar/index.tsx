import { useDesigner } from "@/contexts/DesignerContext";
import { FormElements } from "../FormElements";
import { Button } from "../ui/button";
import { AiOutlineClose } from "react-icons/ai";
import { Separator } from "../ui/separator";

const PropertiesFormSidebar = () => {
    const { selectedElement, setSelectedElement } = useDesigner();
    if (!selectedElement) return null;

    const PropertiesForm = FormElements[selectedElement?.type].propertiesComponent;

    return (
        <div className="flex flex-col p-2">
            <div className="flex items-center justify-between">
                <p className="text-sm text-foreground/70">
                    Element properties
                </p>
                <Button
                    type="button"
                    size={"icon"}
                    variant={"ghost"}
                    onClick={() => {
                        setSelectedElement(null);
                    }}
                >
                    <AiOutlineClose />
                </Button>
            </div>
            <Separator className="mb-4" />
            <PropertiesForm elementInstance={selectedElement} />
        </div>
    );
};

export { PropertiesFormSidebar };