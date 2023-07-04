export const Dashboard = () =>{
    return(
        <div className="flex flex-col gap-6 w-10/12 mx-auto my-0 font-oswald">
            <nav className="flex gap-8 text-xl">
                <button className=" font-medium">INÍCIO</button>
                <button className="font-medium">PRODUTOS</button>
            </nav>
            <h1 className="text-6xl">PAINEL DO ADMINISTRADOR</h1>
            <p className=" text-xl font-roboto font-normal">Seja bem vindo, administrador!</p>
        </div>
    )
}