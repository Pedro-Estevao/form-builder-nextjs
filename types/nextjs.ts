export interface ChildrenProps {
    children: React.ReactNode;
};

export interface ErrorPageProps {
    error: Error;
};

export interface BuilderPageProps {
    params: Promise<{
        id: string;
    }>;
};

export interface FormDetailPageProps {
    params: Promise<{
        id: string;
    }>;
};

export interface SubmitPageProps {
    params: Promise<{
        formUrl: string;
    }>;
};