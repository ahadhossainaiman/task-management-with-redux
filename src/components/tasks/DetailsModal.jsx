import Modal from "../UI/Modal";

const DetailsModal = ({ isOpen, setIsOpen, task }) => {
  //   const { tasks } = useSelector((state) => state.tasksSlice);
  console.log("aiman1", task);
  const onCancel = () => {
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="bg-secondary/10 rounded-md p-5">
        <h1
          className={`text-lg font-semibold mb-3  ${
            task.priority === "high" ? "text-red-500" : ""
          } ${task.priority === "medium" ? "text-yellow-500" : ""} ${
            task.priority === "low" ? "text-green-500" : ""
          }`}
        >
          {task?.title}
        </h1>
        <p className="mb-3">{task?.description}</p>
        <p className="text-sm">Assigned to - {task?.assignedTo}</p>
        <div className="flex justify-between mt-3">
          <p>{task?.date}</p>
        </div>
      </div>
      <div className="flex gap-3 justify-end">
        <button
          type="button"
          className="px-5 py-2 bg-red-600 text-white font-bold rounded-md"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DetailsModal;
