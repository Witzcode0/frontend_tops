function TodoItems() {
    let items = [
      { id: 1, name: "Buy Milk", date: "13-10-2024" },
      { id: 2, name: "Buy Eggs", date: "15-10-2024" },
      { id: 3, name: "Buy Bread", date: "17-10-2024" },
      { id: 4, name: "Buy Chicken", date: "19-10-2024" },
      { id: 5, name: "Buy Bananas", date: "21-10-2024" },
    ];
  
    return (
      <div>
        {items.map(function(item) {
          return (
            <div className="row item-row" key={item.id}>
              <div className="col-6">
                {item.name}
              </div>
              <div className="col-4">
                {item.date}
              </div>
              <div className="col-2">
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default TodoItems;
  