export const IncompleteTodos = (props) => {
  const {incompleteTodos, onClickComplete, onClickDelete} = props;
  return (
    <div className="uncomp">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
         return (
          <li key={todo}>
           <div className="disp">
             <p>{todo}</p>
             <button onClick={() => {onClickComplete(index)}}>完了</button>
             <button onClick={() => {onClickDelete(index)}}>削除</button>
           </div>
          </li>
         );
        })}
      </ul>
     </div>
  )
};