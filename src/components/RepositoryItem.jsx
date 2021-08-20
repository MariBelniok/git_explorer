export function RepositoryItem(props){
    return(
        <li>
            <strong>{props.ola ?? "oi"}</strong>
            <p>Forms in React</p>

            <a href="">
                Acessar repositório
            </a>
        </li>
    )
}