type ContainerProps = {
    children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className='w-[90%] md:w-[85%] 2xl:w-[60%] mx-auto'>{children}</div>
    );
};
