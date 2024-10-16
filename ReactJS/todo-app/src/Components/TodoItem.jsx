function TodoItem({ name, date }) {
      return (
        <table className="table">
          <tbody>
            <tr>
              <td >{name}</td>
              <td>{date}</td>
              <td >
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      );
}

export default TodoItem;
