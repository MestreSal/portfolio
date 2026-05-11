import type { Group } from "../types";
import CardGroup from "./CardGroup";
import { Typography } from "./Typography";

const GroupList = ({ groups }: { groups: Group[] }) => {
  return (
    <>
      {groups.length !== 0 ? (
        <div className="grid-cols-1 grid lg:grid-cols-2 gap-md p-sm">
          {groups.map((group) => (
            <CardGroup key={group.id} group={group} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <Typography variant="h4">Nenhum grupo encontrado.</Typography>
        </div>
      )}
    </>
  );
};

export default GroupList;
