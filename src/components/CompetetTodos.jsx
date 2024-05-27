export const CompleteTodos = (props) => {
    const {completeTodos, onClickReturn, } = props;
    return (
        <div className="comp">
     <p className="title">完了済のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
           <li key={todo}>
             <div className="disp">
               <p>{todo}</p>
               <button onClick={() => {onClickReturn(index)}}>戻す</button>
             </div>
           </li>
          );
        })}
      </ul>
     </div>
    )
};