import { useForm } from "react-hook-form";
import Modal from "../UI/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addTask(data));
    reset();
    setIsOpen(false);
  };
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Manage Task">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            title
          </label>
          <input
            type="text"
            id="title"
            className="w-full rounded-md"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Description
          </label>
          <input
            type="text"
            id="title"
            className="w-full rounded-md"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Deadline
          </label>
          <input
            type="date"
            id="title"
            className="w-full rounded-md"
            {...register("deadline")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Assign to
          </label>
          <select
            name=""
            className="w-fill rounded-md"
            id=""
            {...register("assignedTo")}
          >
            <option value="Ahad Hossain Aiman">Ahad Hossain Aiman</option>
            <option value="Fatema Jannat">Fatema Jannat</option>
            <option value="Kaynat Hamid">Kaynat Hamid</option>
            <option value="Mir Hussain">Mir Hussain</option>
            <option value="HM Nayeem">HM Nayeem</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Priority
          </label>
          <select
            name=""
            className="w-fill rounded-md"
            id=""
            {...register("priority")}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            type="button"
            className="px-5 py-2 bg-red-600 text-white font-bold rounded-md"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-green-600 text-white font-bold rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
