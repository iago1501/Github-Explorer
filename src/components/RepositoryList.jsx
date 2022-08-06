import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "unform",
    description: "this is a description",
    link: "https://github.com/iago1501/Github-Explorer"
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />    
      </ul>
    </section>
  );
}
