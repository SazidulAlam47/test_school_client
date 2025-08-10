/* eslint-disable @typescript-eslint/no-explicit-any */
const UFromError = ({ error }: { error: any }) => {
    return (
        <>
            {error && (
                <p className="text-sm text-destructive mt-1">
                    {error?.message as string}
                </p>
            )}
        </>
    );
};

export default UFromError;
