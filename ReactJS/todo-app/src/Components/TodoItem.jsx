function TodoItem({ name, date }) {
      return (
      <div className="row item-row">
        <div className="col-6">
          {name}
        </div>
        <div className="col-4">
          {date}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
      );
}

export default TodoItem;
