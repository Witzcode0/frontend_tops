function AddTodo(){
    return (
        <>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Todo here"
            />
          </div>
          <div className="col-4">
            <input type="date" className="form-control" name="" id="" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>
        </>
    );
}

export default AddTodo;