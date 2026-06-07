import { CardGroup, Typography } from "layout/ui";
import type { Group } from "../../../../types";

export const GroupList = ({ groups }: { groups: Group[] }) => {
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
