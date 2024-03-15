function Formulario({botao, eventoTeclado}, register){
    return (    
        <form>
            <input type='int' onChange={eventoTeclado} name='id' placeholder = "id" className = 'form-control'/>
            <input type='text'onChange={eventoTeclado} name='name_task' placeholder='Tarefa' className = 'form-control' />
            <input type='text' onChange={eventoTeclado} name='description' placeholder = "descrição" className = 'form-control'/>
            <select id="taskStatus" onChange={eventoTeclado} name="status">
                <option value="Pendente">Pendente</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Concluída">Concluída</option>
            </select>

            {
                botao
                ?
                <input type='button' value = "Adicionar" className = 'btn btn-primary'/>
                :
                <div>

                    <input type='button' value = "Atualizar" className = 'btn btn-primary' />
                    <input type='button' value = "Procurar id" className = 'btn btn-primary' />
                    <input type='button' value = "Listar" className = 'btn btn-primary' />
                    
                </div>
            }
        </form>
    )
}


export default Formulario;