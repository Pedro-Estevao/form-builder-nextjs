'use client';

import { FormBuilderProps } from "@/types/components";
import { PreviewDialogBtn } from "../PreviewDialogBtn";
import { SaveFormBtn } from "../SaveFormBtn";
import { PublishFormBtn } from "../PublishFormBtn";
import { Designer } from "../Designer";
import { DndContext } from "@dnd-kit/core";
import { DragOverlayWrapper } from "../DragOverlayWrapper";

const FormBuilder = ({ form }: FormBuilderProps) => {
    return (
        <DndContext>
            <main className="flex flex-col w-full">
                <nav className="flex items-center justify-between gap-3 border-b-2 p-4">
                    <h2 className="truncate font-medium">
                        <span className="text-muted-foreground mr-2">
                            Form:
                        </span>
                        {form.name}
                    </h2>
                    <div className="flex items-center gap-2">
                        <PreviewDialogBtn />
                        {!form.published && (
                            <>
                                <SaveFormBtn />
                                <PublishFormBtn />
                            </>
                        )}
                    </div>
                </nav>
                <div className="relative flex flex-grow items-center justify-center overflow-y-auto h-[200px] w-full bg-accent bg-[url('/paper.svg')] dark:bg-[url('/paper-dark.svg')]">
                    <Designer />
                </div>
            </main>
            <DragOverlayWrapper />
        </DndContext>
    );
};

export { FormBuilder };