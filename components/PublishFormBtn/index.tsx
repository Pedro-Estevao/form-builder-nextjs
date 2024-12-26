import { MdOutlinePublish } from "react-icons/md";
import { Button } from "../ui/button";

const PublishFormBtn = () => {
    return (
        <Button
            type="button"
            variant={"outline"}
            className="gap-2 text-white bg-gradient-to-r from-indigo-400 to-cyan-400"
        >
            <MdOutlinePublish className="size-4" />
            Publish
        </Button>
    );
};

export { PublishFormBtn };