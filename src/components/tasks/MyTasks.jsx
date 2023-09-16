import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSelector } from "react-redux";
import DetailsModal from "./detailsModal";

const MyTasks = () => {
  let [isOpen, setIsOpen] = useState(false);
  // const item = {
  //   id: 1,
  //   status: "pending",
  //   title: "Remove Button",
  //   description:
  //     "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
  //   date: "2023-08-28",
  //   assignedTo: "Mir Hussain",
  //   priority: "high",
  // };
  const { tasks } = useSelector((state) => state.tasksSlice);
  console.log("aiman", tasks);
  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {tasks.map((item) => (
          <div
            key={item?.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item?.title}</h1>
            <div className="flex gap-3">
              <button
                className="grid place-content-center"
                onClick={() => setIsOpen(!isOpen)}
                title="Details"
              >
                <DetailsModal
                  task={item}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button className="grid place-content-center" title="Done">
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
