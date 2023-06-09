import Header from "../components/Header";

const Error = () => {
    return (
        <>
            <Header />
            <div className="w-screen h-screen text-center bg-[rgb(17,17,17)] py-96">
                <p className="text-white text-5xl">
                    Cannot direct to the path you typed
                </p>
            </div>
        </>
    );
};

export default Error;
