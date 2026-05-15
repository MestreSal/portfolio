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
        <Typography variant="h4" className="text-center p-lg">
          Nenhum grupo encontrado.
        </Typography>
      )}
    </>
  );
};

export default GroupList;
